import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter
} from "react-icons/lib/fa";
// https://gorangajic.github.io/react-icons/fa.html

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a href="http://www.github.com/kerrynordstrom">
        <FaGithub />
      </a>
    </li>
    <li>
      <a href="http://www.linkedin.com/in/kerry-nordstrom">
        <FaLinkedin />
      </a>
    </li>
    <li>
      <a href="http://www.facebook.com/kerrynordstrom">
        <FaFacebook />
      </a>
    </li>
    <li>
      <a href="http://www.twitter.com/nrdstrm">
        <FaTwitter />
      </a>
    </li>
    <li>
      <a href="http://www.instagram.com/dirt_drops">
        <FaInstagram />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
