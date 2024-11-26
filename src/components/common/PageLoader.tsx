import React from "react";
import "./loader.css";
export default function PageLoader() {
  return (
    <div className=" grid h-screen place-items-center">
      <div className="container">
        <div className="dash first"></div>
        <div className="dash seconde"></div>
        <div className="dash third"></div>
        <div className="dash fourth"></div>
      </div>
    </div>
  );
}
