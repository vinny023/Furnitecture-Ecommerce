import React from "react";
import "./AboutMe.css";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className="left-am-container">
        <div className="am-title">
          <h1 style={{ fontSize: "4vw" }}>About Me</h1>
        </div>
        <h2 style={{ fontSize: "1.5vw" }} className="whoami">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </h2>
      </div>
      <div className="right-am-container">
        <div className="button-box">
          <div className="link-box-1">
            <Link to="/" className="btn btn-primary">
              <h2 style={{ color: "white" }}>Home</h2>
            </Link>
          </div>
          <div className="possible-shopping-cart">
            <Link to="/" className="btn btn-primary">
              <h2 style={{ color: "white" }}>Home</h2>
            </Link>
          </div>
        </div>
        <div className="book-box">
          <div className="book-1">
            <div className="line-separator"></div>
            <h5 className="site-title">My Portfolio</h5>
            <div className="line-separator-2"></div>
            <a
              href="https://www.isaacreeder.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <h1 style={{ fontSize: "2vw" }} className="book-1-title">
                IsaacReeder.com
              </h1>
            </a>
          </div>
          <div className="book-2">
            <a
              href="https://www.isaacreeder.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <h1 style={{ fontSize: "2vw" }} className="book-2-title">
                &#9830;&#9830; Pictures
              </h1>
            </a>
          </div>
          <div className="book-3">
            <a
              href="https://github.com/IsaacReeder"
              rel="noopener noreferrer"
              target="_blank"
            >
              <h1 style={{ fontSize: "2vw" }} className="book-3-title">
                GitHub Repository
              </h1>
            </a>
          </div>
          <div className="vase"></div>
          <div className="book-4">
            <a
              href="https://www.linkedin.com/in/isaac-reeder/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <h1 style={{ fontSize: "2vw" }} className="book-3-title">
                LinkedIn
              </h1>
            </a>
          </div>
          <div style={{ fontSize: "1vw" }} className="book-5">
            <a
              href="https://www.linkedin.com/in/isaac-reeder/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <h1 className="book-3-title">LinkedIn</h1>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
