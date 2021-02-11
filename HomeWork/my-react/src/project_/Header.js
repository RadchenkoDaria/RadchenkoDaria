import React, { Component } from "react";
import "../project_/StyleAll.css";
import LogoImg from "../project_/img/logo192.png";

export default class Header extends Component {
  render() {
    return (
      <div className="headerClases">
        <img src={LogoImg} />
      </div>
    );
  }
}
