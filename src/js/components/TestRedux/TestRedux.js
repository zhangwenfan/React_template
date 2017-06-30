/**
 * Created by Administrator on 2017/6/22.
 */
import React from "react";
import store from "../redux/store/Store";
import Gf from "../gfComponents/Gf";
import * as gfActions from "../redux/actions/GfActions";
import {connect} from "react-redux";
import CounterGfs from "./CounterGfs";

// 用@connect实现绑定, 这些数据会存在props里面, 改动后会自动render()!
@connect((store) => {
  return {
    gfs: store.gfReducer.gfs,
    twice: store.twiceReducer
  }
})

// function mapStateToProps(state) {
//   return {
//     gfs: state.gfReducer,
//   };
// }

class TestRedux extends React.Component {

  constructor() {
    super();
    this.state = {
      addGf: {
        name: ""
      },
    }
  }

  bindGf(e) {
    this.state.addGf.name = e.target.value;
  }

  addGf() {
    store.dispatch((dispacth) => {
      dispacth(gfActions.addGf(this.state.addGf.name));
    });
  }

  render() {
    const gfs = this.props.gfs.gfs;
    const data = gfs.map((gf) => {
      return (<Gf key={gf.id} name={gf.name} id={gf.id}/>)
    });
    return (
      <div>
        <CounterGfs />
        <hr />
        {data}
        <input onChange={this.bindGf.bind(this)}/>
        <button onClick={this.addGf.bind(this)}>add gf</button>
      </div>
    )
  }
}

export default connect(mapStateToProps)(TestRedux);