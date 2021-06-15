import React from "react";
import "./Hero.css";
import { BsSearch } from "react-icons/bs";
import { IoMdQrScanner } from "react-icons/io";
import { useGlobalContext } from "./context";
import background from "./images/bg.jpg";

const Hero = () => {
  const data = useGlobalContext();
  return (
    <section>
      <div className="main__container">
        <div className="inner__container">
          <h1>Unsplash</h1>
          <div className="info">
            <p>
              The internet's source of <span>freely-usable images.</span>
            </p>
            <p>Powered by creators everywhere</p>
          </div>
          <div className="Search__container">
            <BsSearch className="icon" />
            <input
              type="text"
              placeholder="Search free high-resolution photos"
              className="input"
            />
            <IoMdQrScanner className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
