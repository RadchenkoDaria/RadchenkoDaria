import React, { Component } from "react";
import CarouselBox from "../Components/CarouselBox";
import Carousel from "react-bootstrap/Carousel";
import SectionTwo from "../Components/SectionTwo";

export default class Hello extends Component {
  render() {
    return (
      <div>
        <CarouselBox />
        <SectionTwo />
      </div>
    );
  }
}
