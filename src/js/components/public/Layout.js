/**
 * Created by Administrator on 2017/6/30.
 */
import React from "react";
import Gfs from "../gfComponents/Gfs";
import Twice from "../twiceComponent/Twice";
import MemberCounter from "./MemberCounter";

export default class Layout extends React.Component {

  render() {
    return (
      <div>
        <Gfs />
        <hr />
        <Twice />
        <hr />
        <MemberCounter />
      </div>
    );
  }
}