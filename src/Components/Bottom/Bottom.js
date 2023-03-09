import React from "react";
import { Container } from "@mui/material";
import "./Bottom.css";

function Bottom() {
  return (
    <div className="Bottom">
      <Container maxWidth="xl">
        <div className="text">
          <h2 className="title">Subscribe to get the latest news about us</h2>
          <p className="text">
            Socielity offers insured and non-insured individuals access to
            affordable, convenient, and personalized <br /> care for urgent and ongoing
            medical conditions.
          </p>
        </div>
        <form action="#">
          <input type="text" placeholder="Enter your email address" />
          <a href="#" className="Bgblue">Subscribe Now</a>
        </form>
      </Container>
    </div>
  );
}

export default Bottom;
