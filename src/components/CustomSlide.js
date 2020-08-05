import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { withKnobs, boolean, number } from "@storybook/addon-knobs";
export default class CustomSlide extends Component {
  render() {
    const tooglesGroupId = 'Toggles';
    return (
      <Carousel
        showArrows={true}
        showIndicators={false}
        showThumbs={false}
        useKeyboardArrows={boolean("useKeyboardArrows", true, tooglesGroupId)}
      >
        {this.props.children}
      </Carousel>
    );
  }
}
