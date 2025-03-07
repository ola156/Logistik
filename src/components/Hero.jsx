import React, { useState } from "react";

import hero1 from "../assets/pexels-muhammedtarikkahraman-16706765.jpg";
import hero2 from "../assets/pexels-sergeich-03-3559004-9280464 (1).jpg";
import hero3 from "../assets/project_1_3.jpg.webp";
import video1 from "../assets/video1.mp4";

const Hero = ({ playStatus, heroCount }) => {
  if (playStatus) {
    return (
      <video className="background fade-in" autoPlay loop muted>
        <source src={video1} type="video/mp4" />
      </video>
    );
  } else if (heroCount === 0) {
    return <img src={hero3} alt="" className="background fade-in" />;
  } else if (heroCount === 1) {
    return <img src={hero2} alt="" className="background fade-in" />;
  } else if (heroCount === 2) {
    return <img src={hero1} alt="" className="background fade-in" />;
  }
};

export default Hero;
