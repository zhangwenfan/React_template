/**
 * Created by Administrator on 2017/6/30.
 */
import React from "react";
import store from "../redux/store/Store";
import * as twiceActions from "../redux/actions/TwiceActions";
import * as gfActions from "../redux/actions/GfActions";
import styles from '../../../css/button.css'

export default class Layout extends React.Component {

  remove() {
    if (this.props.type === "twice") {
      store.dispatch((dispacth) => {
        dispacth(twiceActions.deleteMember(this.props.id));
      })
    } else if (this.props.type === "gf") {
      store.dispatch((dispacth) => {
        dispacth(gfActions.deleteMember(this.props.id));
      })
    }
  }

  render() {
    return (
      <div>
        <li>{this.props.name}<button className="button" onClick={this.remove.bind(this)}>X</button></li>
      </div>
    );
  }
}