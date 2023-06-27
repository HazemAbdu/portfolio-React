import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import {
  SiCss3,
  SiBootstrap,
  SiJavascript,
  SiSemanticuireact,
  SiTypescript,
} from "react-icons/si";
import "./Section.css";
import "./ScrollUp";

const Sections = () => {
  return (
    <section className="Skills">
      <div>
        <h1 className="titleskills"> my skills </h1>
        <div className="cards">
          <div className="item">
            <h3 className="ICNS">
              <AiFillHtml5 />
            </h3>
            <h3>HTML</h3>
          </div>
          <div className="item">
            <h3 className="ICNS">
              <SiJavascript />
            </h3>
            <h3>Java Script</h3>
          </div>
          <div className="item">
            <h3 className="ICNS">
              <SiBootstrap />
            </h3>
            <h3>Bootstrap</h3>
          </div>
          <div className="item">
            <h3 className="ICNS">
              <SiCss3 />
            </h3>
            <h3>CSS</h3>
          </div>
          <div className="item">
            <h3 className="ICNS">
              <SiSemanticuireact />
            </h3>
            <h3>React</h3>
          </div>
          <div className="item">
            <h3 className="ICNS">
              <SiTypescript />
            </h3>
            <h3>Type Script</h3>
          </div>
        </div>
        <span
          className="up show"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          up
        </span>
      </div>
    </section>
  );
};

export default Sections;
