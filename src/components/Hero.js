import React from "react";

export default function Hero({ info, title }) {
  return (
    <>
      <div
        className="hero"
        // style={{
        //   backgroundImage: "url(../../assets/image/hero.png)",
        // }}
      >
        <div className="hero-inner container">
          <span className="hero__info">{info}</span>
          <h1 className="hero__title">{title}</h1>
        </div>
      </div>
    </>
  );
}
