import React from "react";
import { Container, Grid } from "@mui/material";
import SmsIcon from '@mui/icons-material/Sms';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <Container maxWidth="xl">
        <Grid container>
          <Grid items md={3} sm={6} xs={12}>
            <div className="left">
              <h3>Socielity</h3>
              <p className="text">Your private online marketplace where you can trade goods and services with family, friends, neighbors, classmates, co-workers, and members of the many other Socielities that comprise your personal world.</p>
            </div>
          </Grid>
          <Grid items md={3} sm={6} xs={12}>
            <ul>
              <h3>Company</h3>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </Grid>
          <Grid items md={3} sm={6} xs={12}>
            <ul>
              <h3>Sociality</h3>
              <li>
                <a href="#">User  Agreement</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Sociality Guidelines</a>
              </li>
              <li>
                <a href="#">Cookie Policy</a>
              </li>
              <li>
                <a href="#">My Account</a>
              </li>
            </ul>
          </Grid>
          <Grid items md={3} sm={6} xs={12}>
            <div className="right">
              <h3>Contact us</h3>
              <a href="#"> <SmsIcon/> contact@example.com</a>
              <a href="#"> <LocalPhoneIcon/> +152 534-468-854</a>
              <a href="#"> <LocationOnIcon/> contact@example.com</a>
              <div className="icon">
                <FacebookIcon/>
                <TwitterIcon/>
                <TelegramIcon/>
                <InstagramIcon/>
                <YouTubeIcon/>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;
