import React from "react";
import { FaPlus, FaTag } from "react-icons/lib/fa";

import FirePolls from "../assets/images/portfolio/firepolls.jpg";
import Roastful from "../assets/images/portfolio/roastful.jpg";
import Noncents from "../assets/images/portfolio/noncents.jpg";

const Portfolio = () => (
  <section id="portfolio">
    <div className="row">
      <div className="twelve columns collapsed">
        <h1>Check Out Some of My Recent Work.</h1>

        <div
          id="portfolio-wrapper"
          className="bgrid-halves s-bgrid-thirds cf"
        >
          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="http://www.firepolls.com" title="">
                <img alt="" src={FirePolls} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Fire Polls</h5>
                    <p>React Polling App</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="http://roastfulapi.club" title="">
                <img alt="" src={Roastful} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Roastful</h5>
                    <p>Recipe Finder App</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="http://www.github.com/HashMoney/Noncents" title="">
                <img alt="" src={Noncents} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Noncents</h5>
                    <p>Blockchain Mining Backend</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>


      {/*<div id="modal-01" className="popup-modal mfp-hide">
        <img
          className="scale-with-grid"
          src={FirePolls}
          alt=""
        />

         <div className="description-box">
          <h4>Fire Polls</h4>
          <p>
            Here we built an application in React/Redux with persistence in MongoDB and deployed via Heroku.
          </p>
          <span className="categories">
            <FaTag /> Full Stack Application
          </span>
        </div>

        <div className="link-box">
          <a href="http://www.firepolls.com">Details</a>
          <a className="popup-modal-dismiss">Close</a>
        </div>
      </div>

      <div id="modal-02" className="popup-modal mfp-hide">
        <img
          className="scale-with-grid"
          src="images/portfolio/modals/m-console.jpg"
          alt=""
        />

        <div className="description-box">
          <h4>Console</h4>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit.
          </p>
          <span className="categories">
            <FaTag />Branding, Web Development
          </span>
        </div>

        <div className="link-box">
          <a href="http://www.behance.net">Details</a>
          <a className="popup-modal-dismiss">Close</a>
        </div>
      </div>

      <div id="modal-03" className="popup-modal mfp-hide">
        <img
          className="scale-with-grid"
          src="images/portfolio/modals/m-judah.jpg"
          alt=""
        />

        <div className="description-box">
          <h4>Judah</h4>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit.
          </p>
          <span className="categories">
            <FaTag />Branding
          </span>
        </div>

        <div className="link-box">
          <a href="http://www.behance.net">Details</a>
          <a className="popup-modal-dismiss">Close</a>
        </div>
      </div>

      <div id="modal-04" className="popup-modal mfp-hide">
        <img
          className="scale-with-grid"
          src="images/portfolio/modals/m-intothelight.jpg"
          alt=""
        />

        <div className="description-box">
          <h4>Into the Light</h4>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit.
          </p>
          <span className="categories">
            <FaTag />Photography
          </span>
        </div>

        <div className="link-box">
          <a href="http://www.behance.net">Details</a>
          <a className="popup-modal-dismiss">Close</a>
        </div>
      </div>

      <div id="modal-05" className="popup-modal mfp-hide">
        <img
          className="scale-with-grid"
          src="images/portfolio/modals/m-farmerboy.jpg"
          alt=""
        />

        <div className="description-box">
          <h4>Farmer Boy</h4>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit.
          </p>
          <span className="categories">
            <FaTag />Branding, Webdesign
          </span>
        </div>

        <div className="link-box">
          <a href="http://www.behance.net">Details</a>
          <a className="popup-modal-dismiss">Close</a>
        </div>
      </div>
       */}
    </div>
  </section>
);

export default Portfolio;
