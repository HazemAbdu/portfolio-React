import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Typ() {
  const [textf] = useTypewriter({
    words: ["front end developer", "math teacher"],
    loop: {},
    typeSpeed: 400,
    delaySpeed: 900,
  });
  return (
    <h1 style={{ margin: "50px" }}>
      i'm a
      <span style={{ fontWeight: "bold", color: "blueviolet" }}> {textf} </span>
      <span style={{ color: "red" }}>
        <Cursor cursorStyle="<" />
      </span>
    </h1>
  );
}

export default Typ;
