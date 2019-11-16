import React, { Component } from "react";
class Image extends Component {
  render() {
    return (
      <div>
        <div>{this.props.header}</div>
        <img src={this.props.url} style={{ height: 250 }}></img>
      </div>
    );
  }
}
export default Image;
