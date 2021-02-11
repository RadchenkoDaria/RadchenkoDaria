import React, { Component } from "react";
import "../project_/StyleAll.css";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <ul>
          <li className="listtItem">
            <a className="" href="#">
              START
            </a>
          </li>
          <li className="listtItem">
            <a className="" href="#">
              ABOUT US
            </a>
          </li>
          <li className="listtItem">
            <a className="" href="#">
              WORK
            </a>
          </li>
          <li className="listtItem">
            <a className="" href="#">
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
