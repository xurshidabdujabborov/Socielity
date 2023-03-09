import React from "react";
import { Container, Grid } from "@mui/material";
import car3 from "../../assets/img/card 3.png"
import "./George.css";

function George() {
  return (
    <div className="George">
      <Container maxWidth="xl">
        <Grid container alignItems={"center"}>
          <Grid items md={6} sm={12} xs={12}>
            <div className="img">
                <img src={car3} alt="" />
            </div>
          </Grid>
          <Grid items md={6} sm={12} xs={12}>
            <div className="left">
                <h5>Skylar George</h5>
                <p className="text">Managing Director, Lovgency Company</p>
                <h2 className="title">“You'll want to use a format that's viewable for your potential leads and aligns closely with their values. To give you an idea of how testimonials can be portrayed, below are the different testimonial types that you can use to show off your customers' stories”</h2>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default George;
