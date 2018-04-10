import React from "react";

const Education = () => (
  <div className="row education">
    <div className="three columns header-col">
      <h1>
        <span>Education</span>
      </h1>
    </div>

    <div className="nine columns main-col">

      <div className="row item">
        <div className="twelve columns">
          <h3>Code Fellows</h3>
          <p className="info">
            Certificate in Full Stack JavaScript
            <span>&bull;</span>
            <em className="date">February 2018</em>
          </p>

          <p>
            ● Learned to build and contribute to a server-side and client-side applications, using architectures/frameworks that promote maintainability, scalability, and collaboration.
            <br />
            ● Applied Computer Science fundamentals in analyzing the trade-offs between competing solutions when choosing algorithms.
          </p>
        </div>
      </div>
      
      <div className="row item">
        <div className="twelve columns">
          <h3>Miami University</h3>
          <p className="info">
            Bachelor of Philosophy in Interdisciplinary Studies
            <span>&bull;</span>
            <em className="date">June 2007</em>
          </p>

          <p>
            ● Studied a variety of topics related to communications, interactive media studies, media history, all culminating in a senior thesis positing that people are happier and better off with affordable access to information.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Education;
