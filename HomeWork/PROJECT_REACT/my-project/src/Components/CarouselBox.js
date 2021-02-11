import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import headerImg from "../assets/headerImg.png";
import headerImg2 from "../assets/headerImg2.png";
import headerImg3 from "../assets/headerImg3.png";

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={headerImg} alt="header" />
          <Carousel.Caption style={{ bottom: "50%" }}>
            <h1>We Are Code Cafe</h1>
            <h4>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum
            </h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={headerImg2} alt="header" />
          <Carousel.Caption style={{ bottom: "50%" }}>
            <h1>We Are Code Cafe2</h1>
            <h4>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum
            </h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={headerImg3} alt="header" />
          <Carousel.Caption style={{ bottom: "50%" }}>
            <h1>We Are Code Cafe3</h1>
            <h4>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum
            </h4>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
