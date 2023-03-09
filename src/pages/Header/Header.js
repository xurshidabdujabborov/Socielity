import React from 'react'
import { Container , Grid } from '@mui/material'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Header.css"

function Header() {
  return (
    <header>
        <Container maxWidth="xl">
          <Grid container alignItems={"center"}>
            <Grid md={12} xs={12} sm={12}>
              <div className="box">
                <h1>Your Private Online Marketplace Where <span>Socielities</span> That Comprise Your Personal <span>World</span> </h1>
                <p className="text">Your private online marketplace where you can trade goods and services with family, friends, neighbors, classmates, <br /> co-workers, and members of the many other communities that comprise your personal world.</p>
                <a href="#" className='Bgblue'>Explore More</a>
              </div>
            </Grid>
          </Grid>
        </Container>
    </header>
  )
}

export default Header