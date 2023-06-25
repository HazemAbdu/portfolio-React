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


const Sections = () => {
  return (
    <div>
      <div className="AllCards">
        <section>
          <h1 className="titleskills"> my skills </h1>
          <div className="cards">
            <div>
              <h3 className="ICNS">
                <AiFillHtml5 />
              </h3>
              <h3>HTML</h3>
            </div>
            <div>
              <h3 className="ICNS">
                <SiJavascript />
              </h3>
              <h3>Java Script</h3>
            </div>
            <div>
              <h3 className="ICNS">
                <SiBootstrap />
              </h3>
              <h3>Bootstrap</h3>
            </div>
            <div>
              <h3 className="ICNS">
                <SiCss3 />
              </h3>
              <h3>CSS</h3>
            </div>
            <div>
              <h3 className="ICNS">
                <SiSemanticuireact />
              </h3>
              <h3>React</h3>
            </div>
            <div>
              <h3 className="ICNS">
                <SiTypescript />
              </h3>
              <h3>Type Script</h3>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Sections;
