import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "@mui/material";
import Slider from "react-slick";
import owl from "../../assets/img/owl.png";
import owl1 from "../../assets/img/owl 1.png";
import owl2 from "../../assets/img/owl 2.png";
import owl3 from "../../assets/img/owl 3.png";
import owl4 from "../../assets/img/owl 4.png";
import owl5 from "../../assets/img/owl 5.png";
import "./Carusel.css";

function Carusel() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="Carusel">
      <Container maxWidth="xl">
        <div className="text">
          <h2 className="title">Trusted By</h2>
          <p className="text">
            The private on-line marketplace where you are able to exchange goods
            and services, cash-free, in one place, 24/7, with a <br /> select
            group of individuals, organizations, and businesses that you know
            and trust.
          </p>
        </div>
        <Slider {...settings}>
          <div className="img">
            <img src={owl} alt="" />
          </div>
          <div className="img">
            <img src={owl1} alt="" />
          </div>
          <div className="img">
            <img src={owl2} alt="" />
          </div>
          <div className="img">
            <img src={owl3} alt="" />
          </div>
          <div className="img">
            <img src={owl4} alt="" />
          </div>
          <div className="img">
            <img src={owl5} alt="" />
          </div>
          <div className="img">
            <img src={owl} alt="" />
          </div>
          <div className="img">
            <img src={owl1} alt="" />
          </div>
          <div className="img">
            <img src={owl2} alt="" />
          </div>
          <div className="img">
            <img src={owl3} alt="" />
          </div>
          <div className="img">
            <img src={owl4} alt="" />
          </div>
          <div className="img">
            <img src={owl5} alt="" />
          </div>
          <div className="img">
            <img src={owl} alt="" />
          </div>
          <div className="img">
            <img src={owl1} alt="" />
          </div>
          <div className="img">
            <img src={owl2} alt="" />
          </div>
          <div className="img">
            <img src={owl3} alt="" />
          </div>
          <div className="img">
            <img src={owl4} alt="" />
          </div>
          <div className="img">
            <img src={owl5} alt="" />
          </div>
        </Slider>
      </Container>
    </div>
  );
}

export default Carusel;
