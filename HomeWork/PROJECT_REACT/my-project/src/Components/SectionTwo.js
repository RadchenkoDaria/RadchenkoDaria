import React, { Component } from "react";
import { Container, Row, Col, Media } from "react-bootstrap";
import CarouselBox from "../Components/CarouselBox";
import sectionHello from "../assets/sectionHello.png";
import "../Components/SectionTwo.css";
//import { Button } from "bootstrap";
import ButtonAll from "./ButtonAll";

export default class SectionTwo extends Component {
  render() {
    return (
      <Container className="SectionTwo_box">
        <Row>
          <Col md="7">
            <Media.Body>
              <h3 style={{ margin: "40px 0px" }}>THIS IS BOUNCY</h3>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio.
                <ButtonAll />
              </p>
            </Media.Body>
          </Col>
          <Col md="5">
            <img className="SectionTwo_img" src={sectionHello} alt="header" />
          </Col>
        </Row>
      </Container>
    );
  }
}
