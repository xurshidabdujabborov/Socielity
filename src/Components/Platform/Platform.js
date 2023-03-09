import React from "react";
import { Container, Grid } from "@mui/material";
import bot from "../../assets/img/bot.png";
import bot1 from "../../assets/img/bot 1.png";
import bot2 from "../../assets/img/bot 2.png";
import bot3 from "../../assets/img/bot 3.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Platform.css";
import Slider from "react-slick";

function Platform() {
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
    <div className="Platform">
      <Container maxWidth="xl">
        <div className="text">
          <h2 className="title">Award Winning Engagement Platform</h2>
          <p className="text">
            the private on-line marketplace where you are able to exchange goods
            and services, cash-free, in one place, 24/7, with a <br /> select
            group of individuals, organizations, and businesses that you know
            and trust.
          </p>
        </div>
        <Slider {...settings}>
          <div className="box">
            <img src={bot} alt="" />
            <h4>Award 2021 </h4>
            <p>Winning Engagement Platform that you know and trust</p>
          </div>
          <div className="box">
            <img src={bot1} alt="" />
            <h4>Award 2021 </h4>
            <p>Winning Engagement Platform that you know and trust</p>
          </div>
          <div className="box">
            <img src={bot2} alt="" />
            <h4>Award 2021 </h4>
            <p>Winning Engagement Platform that you know and trust</p>
          </div>
          <div className="box">
            <img src={bot3} alt="" />
            <h4>Award 2021 </h4>
            <p>Winning Engagement Platform that you know and trust</p>
          </div>
          <div className="box">
            <img src={bot2} alt="" />
            <h4>Award 2021 </h4>
            <p>Winning Engagement Platform that you know and trust</p>
          </div>
          <div className="box">
            <img src={bot} alt="" />
            <h4>Award 2021 </h4>
            <p>Winning Engagement Platform that you know and trust</p>
          </div>
          <div className="box">
            <img src={bot} alt="" />
            <h4>Award 2021 </h4>
            <p>Winning Engagement Platform that you know and trust</p>
          </div>
          <div className="box">
            <img src={bot1} alt="" />
            <h4>Award 2021 </h4>
            <p>Winning Engagement Platform that you know and trust</p>
          </div>
          <div className="box">
            <img src={bot2} alt="" />
            <h4>Award 2021 </h4>
            <p>Winning Engagement Platform that you know and trust</p>
          </div>
          <div className="box">
            <img src={bot3} alt="" />
            <h4>Award 2021 </h4>
            <p>Winning Engagement Platform that you know and trust</p>
          </div>
          <div className="box">
            <img src={bot2} alt="" />
            <h4>Award 2021 </h4>
            <p>Winning Engagement Platform that you know and trust</p>
          </div>
          <div className="box">
            <img src={bot} alt="" />
            <h4>Award 2021 </h4>
            <p>Winning Engagement Platform that you know and trust</p>
          </div>
          <div className="box">
            <img src={bot} alt="" />
            <h4>Award 2021 </h4>
            <p>Winning Engagement Platform that you know and trust</p>
          </div>
          <div className="box">
            <img src={bot1} alt="" />
            <h4>Award 2021 </h4>
            <p>Winning Engagement Platform that you know and trust</p>
          </div>
          <div className="box">
            <img src={bot2} alt="" />
            <h4>Award 2021 </h4>
            <p>Winning Engagement Platform that you know and trust</p>
          </div>
          <div className="box">
            <img src={bot3} alt="" />
            <h4>Award 2021 </h4>
            <p>Winning Engagement Platform that you know and trust</p>
          </div>
          <div className="box">
            <img src={bot2} alt="" />
            <h4>Award 2021 </h4>
            <p>Winning Engagement Platform that you know and trust</p>
          </div>
          <div className="box">
            <img src={bot} alt="" />
            <h4>Award 2021 </h4>
            <p>Winning Engagement Platform that you know and trust</p>
          </div>
        </Slider>
      </Container>
    </div>
  );
}

export default Platform;
