import React, { useState, useRef } from "react";
import { Container, Grid } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import vd1 from "../../assets/video/vd1.mp4";
import vd2 from "../../assets/video/vd2.mp4";
import vfs from "../../assets/img/vd.png";
import vf1 from "../../assets/img/vd 1.png";
import "./Video.css";

function Video() {
  const [play, setPlay] = useState(false);
  const videoIcon = useRef();
  return (
    <div className="video">
      <div className="box">
        <Container maxWidth="xl">
          <div className="text">
            <h2 className="title">They love us! Do you know why?</h2>
            <p className="text">
              The following videos are currently in production. In the meantime,
              please use our Help Center.
            </p>
          </div>
          <video src={vd2} poster={vf1} ref={videoIcon}></video>
          <Grid container alignItems={"center"}>
            <Grid items md={12} xs={12}>
              {play ? (
                <div
                  className="videoPlayerIcons"
                  onClick={() => {
                    videoIcon.current.pause();
                    setPlay(false);
                  }}
                >
                  <PauseIcon />
                </div>
              ) : (
                <div
                  className="videoPlayerIcons"
                  onClick={() => {
                    videoIcon.current.play();
                    setPlay(true);
                  }}
                >
                  <PlayArrowIcon />
                </div>
              )}
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default Video;
