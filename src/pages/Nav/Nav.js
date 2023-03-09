import React from "react";
import { Container, Grid } from "@mui/material";
import logo from "../../assets/img/logo.png";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./Navbar.css";

function Nav() {
  return (
    <nav>
      <Container maxWidth="xl">
        <Grid container alignItems={"center"}>
          <Grid md={4} sm={12} xs={12}>
            <div className="img">
              <img src={logo} alt="" />
            </div>
          </Grid>
          <Grid md={8} sm={12} xs={12}>
            <ul>
              <li>
                <a href="#">Socielity</a>
              </li>
              <li>
                <a href="#">Resources</a>
              </li>
              <li>
                <a href="#">Platfrom</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Login</a>
              </li>
               <li>
                <a href="#" className="Bgblue">Explore More</a>
               </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </nav>
  );
}

export default Nav;
