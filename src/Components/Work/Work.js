import React from "react";
import { Container, Grid } from "@mui/material";
import vec from "../../assets/img/vec.png"
import vec1 from "../../assets/img/vec 1.png"
import vec2 from "../../assets/img/vec 2.png"
import vec3 from "../../assets/img/vec 3.png"
import "./Work.css";

function Work() {
  return (
    <div className="Work">
      <Container maxWidth="xl">
        <div className="text">
          <h2 className="title">Why Socielity?</h2>
          <p className="text">
            Welcome to CommuniTrader.com, the private on-line marketplace where
            you are able to exchange goods <br /> and services, cash-free, in one
            place, 24/7, with a select group of individuals, organizations, and <br />
            businesses that you know and trust.
          </p>
        </div>
        <Grid container alignItems={"center"}>
            <Grid md={3} sm={6} xs={12}>
                <div className="box">
                    <img src={vec} alt="" />
                    <h4>Financial Security</h4>
                    <p className="text">you want to keep more of your hard-earned cash in your wallet. </p>
                </div>
            </Grid>
            <Grid md={3} sm={6} xs={12}>
                <div className="box">
                    <img src={vec1} alt="" />
                    <h4>Financial Security</h4>
                    <p className="text">you want to keep more of your hard-earned cash in your wallet. </p>
                </div>
            </Grid>
            <Grid md={3} sm={6} xs={12}>
                <div className="box">
                    <img src={vec2} alt="" />
                    <h4>Financial Security</h4>
                    <p className="text">you want to keep more of your hard-earned cash in your wallet. </p>
                </div>
            </Grid>
            <Grid md={3} sm={6} xs={12}>
                <div className="box">
                    <img src={vec3} alt="" />
                    <h4>Financial Security</h4>
                    <p className="text">you want to keep more of your hard-earned cash in your wallet. </p>
                </div>
            </Grid>
            <Grid md={3} sm={6} xs={12}>
                <div className="box">
                    <img src={vec} alt="" />
                    <h4>Financial Security</h4>
                    <p className="text">you want to keep more of your hard-earned cash in your wallet. </p>
                </div>
            </Grid>
            <Grid md={3} sm={6} xs={12}>
                <div className="box">
                    <img src={vec1} alt="" />
                    <h4>Financial Security</h4>
                    <p className="text">you want to keep more of your hard-earned cash in your wallet. </p>
                </div>
            </Grid>
            <Grid md={3} sm={6} xs={12}>
                <div className="box">
                    <img src={vec2} alt="" />
                    <h4>Financial Security</h4>
                    <p className="text">you want to keep more of your hard-earned cash in your wallet. </p>
                </div>
            </Grid>
            <Grid md={3} sm={6} xs={12}>
                <div className="box">
                    <img src={vec3} alt="" />
                    <h4>Financial Security</h4>
                    <p className="text">you want to keep more of your hard-earned cash in your wallet. </p>
                </div>
            </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Work;
