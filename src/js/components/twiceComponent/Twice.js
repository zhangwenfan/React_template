/**
 * Created by Administrator on 2017/6/30.
 */
import React from "react";
import store from "../redux/store/Store";
import Person from "../public/Person";
import * as twiceActions from "../redux/actions/TwiceActions";
import {connect} from "react-redux";
import styles from '../../../css/twice.css'

@connect((store) => {
  return {
    twiceMember: store.twiceMember,
  }
})
export default class Twice extends React.Component {

  constructor() {
    super();
    this.state = {
      addName: "",
    }
  }

  addMember() {
    if (null != this.state.addName && "" != this.state.addName) {
      store.dispatch((dispacth) => {
        dispacth(twiceActions.addMember(this.state.addName));
      });
    }
  }

  bindName(e) {
    this.state.addName = e.target.value;
  }

  render() {
    const members = this.props.twiceMember.members;
    const data = members.map((m) => {
      return (<Person key={m.id} name={m.name} type="twice" id={m.id}/>)
    });
    return (
      <div>
        <h1 className="item">this is twice block</h1>
        <ul className="item">
          {data}
        </ul>
        <input onChange={this.bindName.bind(this)} />
        <button onClick={this.addMember.bind(this)}>add</button>
      </div>
    )
  }
}