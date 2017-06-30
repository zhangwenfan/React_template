/**
 * Created by Administrator on 2017/6/22.
 */
import React from "react";
import store from "../redux/store/Store";
import Gf from "../gfComponents/Gf";
import * as gfActions from "../redux/actions/GfActions";
import {connect} from "react-redux";

@connect((store) => {
  return {
    // 只能这么写, 不能再进一层了, 这里的坑在于数组, 数组push不算变化!!!!
    // 总之, 记得操作数组往上面退一层
    gfs: store.gfReducer,
    twice: store.twiceReducer.twice
  }
})

export default class CounterGfs extends React.Component {

  addGf() {
    store.dispatch((dispacth) => {
      dispacth({
        type: "CHANGE_TWICE",
        name: "like Sana"
      });
    });
  }

  render() {
    const gfs = this.props.gfs.gfs;
    const data = gfs.map((gf) => {
      return (<Gf key={gf.id} name={gf.name} id={gf.id}/>)
    });
    return (
      <div>
        <h1>gf = {this.props.gfs.gfs.length}</h1>
        <h1>twice = {this.props.twice.name}</h1>
        <button onClick={this.addGf.bind(this)}>add gf</button>
        <hr />
        {data}
      </div>
    )
  }
}

