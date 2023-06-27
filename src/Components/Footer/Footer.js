import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import "./Footer.css";

function Footer() {
  return (
    <div className="end">
      <h3>
        <span className="eend"> &copy; All Rights Reserved 2023</span>
      </h3>
      <div className="end1">
        <a
          href="https://github.com/HazemAbdu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineTwitter />
        </a>
      </div>
    </div>
  );
}

export default Footer;
