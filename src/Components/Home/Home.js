import React from "react";
import "./Home.css";
import Typ from "./Typing";

function Home() {
  return (
    <section className="container" id="home">
      <div className="hero">
        <h1>
          hi i'm <span className="title">hazem</span>
          <h3>
            <Typ />
          </h3>
        </h1>
      </div>
    </section>
  );
}

export default Home;
