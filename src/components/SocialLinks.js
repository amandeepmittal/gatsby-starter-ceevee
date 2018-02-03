import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaGooglePlus,
  FaInstagram,
  FaTwitter
} from "react-icons/lib/fa";
// https://gorangajic.github.io/react-icons/fa.html

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a href="#">
        <FaFacebook />
      </a>
    </li>
    <li>
      <a href="#">
        <FaTwitter />
      </a>
    </li>
    <li>
      <a href="#">
        <FaGooglePlus />
      </a>
    </li>
    <li>
      <a href="#">
        <FaInstagram />
      </a>
    </li>
    <li>
      <a href="#">
        <FaGithub />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
