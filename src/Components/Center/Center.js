import React from "react";
import { Container, Grid } from "@mui/material";
import car from "../../assets/img/card.png"
import car1 from "../../assets/img/card 1.png"
import car2 from "../../assets/img/card 2.png"
import "./Center.css";

function Center() {
  return (
    <div className="Center">
      <Container maxWidth="xl">
        <Grid container alignItems={"center"}>
          <Grid md={6} sm={12} xs={12}>
            <div className="img">
              <img src={car} alt="" />
            </div>
          </Grid>
          <Grid md={6} sm={12} xs={12}>
            <div className="text">
              <h2 className="title">You want to strengthen more of communities or groups you are associated with.</h2>
              <p className="text">A simple definition is that leadership is the art of motivating a group of people to act towards achieving a common goal. In a business setting, this can mean directing workers and colleagues with a strategy to meet the company's needs.</p>
              <a href="#" className="Bgblue">Explore More</a>
            </div>
          </Grid>
          <Grid md={6} sm={12} xs={12}>
            <div className="text">
              <h2 className="title">You want to strengthen more of communities or groups you are associated with.</h2>
              <p className="text">A simple definition is that leadership is the art of motivating a group of people to act towards achieving a common goal. In a business setting, this can mean directing workers and colleagues with a strategy to meet the company's needs.</p>
              <a href="#" className="Bgblue">Explore More</a>
            </div>
          </Grid>
          <Grid md={6} sm={12} xs={12}>
            <div className="img1">
              <img src={car1} alt="" />
            </div>
          </Grid>
          <Grid md={6} sm={12} xs={12}>
            <div className="img">
              <img src={car2} alt="" />
            </div>
          </Grid>
          <Grid md={6} sm={12} xs={12}>
            <div className="text">
              <h2 className="title">You want to strengthen more of communities or groups you are associated with.</h2>
              <p className="text">A simple definition is that leadership is the art of motivating a group of people to act towards achieving a common goal. In a business setting, this can mean directing workers and colleagues with a strategy to meet the company's needs.</p>
              <a href="#" className="Bgblue">Explore More</a>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Center;
