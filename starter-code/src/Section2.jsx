import React from "react";
import "./css/Section2.css";

export default function Section2() {
  return (
    <div className="Container-section2">
      <div className="EachContainer">
        <img src="/images/icon1.png" className="Icon1"></img>
        <h3>Declarative</h3>
        <p>React makes it painless to create intereactive UIs.</p>
      </div>
      <div className="EachContainer">
        <img src="/images/icon2.png" className="Icon2"></img>
        <h3>Components</h3>
        <p>Built encapsumated components that manage their state.</p>
      </div>
      <div className="EachContainer">
        <img src="/images/icon3.png" className="Icon3"></img>
        <h3>Single-Way</h3>
        <p>A set of immutablme values are passed to the component's</p>
      </div>
      <div className="EachContainer">
        <img src="/images/icon4.png" className="Icon4"></img>
        <h3>JSX</h3>
        <p>Statically-typed, designed to run on modern browsers.</p>
      </div>
    </div>
  );
}
