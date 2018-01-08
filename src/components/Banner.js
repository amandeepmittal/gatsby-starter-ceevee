import React from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaGooglePlusSquare,
  FaInstagram,
  FaGithubSquare
} from "react-icons/lib/fa";

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">I'm Jonathan Doe.</h1>
      <h3>
        I'm a Manila based <span>graphic designer</span>,
        <span>illustrator</span> and <span>webdesigner</span> creating awesome
        and effective visual identities for companies of all sizes around the
        globe. Let's
        <a className="smoothscroll" href="#about">
          start scrolling
        </a>
        and learn more
        <a className="smoothscroll" href="#about">
          about me
        </a>.
      </h3>
      <hr />
      <ul className="social">
        <li>
          <a href="#">
            <FaFacebookSquare />
          </a>
        </li>
        <li>
          <a href="#">
            <FaTwitterSquare />
          </a>
        </li>
        <li>
          <a href="#">
            <FaGooglePlusSquare />
          </a>
        </li>
        <li>
          <a href="#">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="#">
            <FaGithubSquare />
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default Banner;
