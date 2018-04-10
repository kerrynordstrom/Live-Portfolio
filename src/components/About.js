import React from "react";
import { FaCloudDownload } from "react-icons/lib/fa";

import profilePic from "../assets/images/profilepic.jpg";

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={profilePic} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>About Me</h2>
        <p>
          I'm a full stack JavaScript developer.
        </p>
        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              <span>Kerry Nordstrom</span>
              <span>
                <br /> Austin, TX 78702 US
              </span>
              <br />
              <span>kerry.a.nordstrom@gmail.com</span>
            </p>
          </div>
          <div className="columns download">
            <p>
              <a href="https://github.com/kerrynordstrom/Portfolio/blob/master/Kerry%20Nordstrom_2_22_18.pdf" className="button">
                <FaCloudDownload /> Download Resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
