import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class ButtonAll extends Component {
  render() {
    return (
      <div>
        <Button
          variant="outline-dark"
          style={{
            padding: "10px 30px",
            borderRadius: "30px",
            margin: "40px 0px",
          }}
        >
          Read More
        </Button>
      </div>
    );
  }
}
//Если нужна кнопка, посмотреть как переопределить название в тетрадке или урок
