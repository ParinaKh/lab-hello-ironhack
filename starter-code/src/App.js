import React from "react";
import HeaderMain from "./HeaderMain";
import Section2 from "./Section2";
import Button from "./Button";
import "./css/App.css";

export default function App() {
  return (
    <div className="Background">
      <div className="App">
        <HeaderMain />
        <h1 className="Title">Say hello to ReactJS</h1>
        <div className="Main-text">
          You will learn a FrontEnd framework from scratch to become a ninja
          developer
        </div>
        <Button />
        <Section2 />
      </div>
    </div>
  );
}
