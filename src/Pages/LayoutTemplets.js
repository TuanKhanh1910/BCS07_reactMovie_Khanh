import React, { Component } from "react";
import { Outlet } from "react-router-dom";

export default class LayoutTemplets extends Component {
  render() {
    return (
      <div className="body">
        <Outlet />
      </div>
    );
  }
}
