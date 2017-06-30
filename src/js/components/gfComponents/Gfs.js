/**
 * Created by Administrator on 2017/6/30.
 */
import React from "react";
import store from "../redux/store/Store";
import Person from "../public/Person";
import * as gfActions from "../redux/actions/GfActions";
import {connect} from "react-redux";
// import CSSModules from 'react-css-modules'
/* import your css modules styles for the component */
import styles from '../../../css/gf.css'

@connect((store) => {
  return {
    gfMember: store.gfMember,
  }
})
export default class Gfs extends React.Component {

  constructor() {
    super();
    this.state = {
      addName: "",
    }
  }

  addMember() {
    if (null != this.state.addName && "" != this.state.addName) {
      store.dispatch((dispacth) => {
        dispacth(gfActions.addMember(this.state.addName));
      });
    }
  }

  bindName(e) {
    this.state.addName = e.target.value;
  }

  render() {
    const members = this.props.gfMember.members;
    const data = members.map((gf) => {
      return (<Person key={gf.id} name={gf.name} type="gf" id={gf.id}/>)
    });
    return (
      <div>
        <h1 className="test">this is gf block</h1>
        <ul>
          {data}
        </ul>
        <input onChange={this.bindName.bind(this)}/>
        <button onClick={this.addMember.bind(this)}>add</button><br />
      </div>
    )
  }
}