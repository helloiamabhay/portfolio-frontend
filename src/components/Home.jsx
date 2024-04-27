import React from "react";
import profile from "../assets/profile-pic2.png";
import "../styles/Home.css";
// import { Button } from "@mui/material";

const Home = () => {
  return (
    <div>
      <div className="homeBox">
        <span className="intro">
          <h3>Hii,</h3>
          <h1>I'm Abhay Vishwakarma</h1>
          {/* <h2>Web Developer,</h2> */}
          <h3>
            Web Developer , Innovative Web Solutions , User Friendly Application
            ,Skills & Technologies, Continuous Learning.
          </h3>

          <a href="">
            <button className="resumebtn">Download CV</button>
          </a>
        </span>
        <img src={profile} alt="" className="profile" />
      </div>
      <h1 className="about">-: About Me :-</h1>
      <hr className="aboutHr" />
    </div>
  );
};

export default Home;
