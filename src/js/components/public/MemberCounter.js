/**
 * Created by Administrator on 2017/6/30.
 */
import React from "react";
import {connect} from "react-redux";

@connect((store) => {
  return {
    gfMembers: store.gfMember,
    twiceMembers: store.twiceMember,
  }
})
export default class MemberCounter extends React.Component {

  render() {
    const number = this.props.gfMembers.members.length + //
                    this.props.twiceMembers.members.length;
    return (
      <div>
        <h1>total number</h1>
        <ul>
          {number}
        </ul>
      </div>
    )
  }
}