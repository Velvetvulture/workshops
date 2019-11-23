import React, { Component } from "react";
class FamilyMember extends Component {
  render() {
    return <div>{this.props.name + ": " + this.props.quote}</div>;
  }
}
export default FamilyMember;
