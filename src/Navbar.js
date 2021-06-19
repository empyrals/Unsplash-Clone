import React, { useState, useEffect } from "react";
import logo from "./images/logo.png";
import "./Navbar.css";
import { BsSearch } from "react-icons/bs";
import { IoMdQrScanner } from "react-icons/io";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { queryUrl, fetchImages } = useGlobalContext();

  const [query, setQuery] = useState("");

  const searchImages = (e) => {
    let searchText = e.target.value;
    setQuery(searchText);
    // fetchImages(query);
  }

  useEffect(() => {
    fetchImages(query);
  }, [query])

  const handleSubmit = () => {
    fetchImages();
  };
  return (
    <nav>
      <div className="nav">
        <div className="logo__container">
          <img className="logo" src={logo} alt="logo" />
          <div className="tagline">
            <h4>Unsplash</h4>
            <p>Photos for everyone</p>
          </div>
        </div>
        <div className="search__container">
          <BsSearch className="search__icon" />
          <input
            type="text" 
            className="input__search"
            placeholder="Search free high-resolution photos"
            value={query}
            onChange={searchImages}
          />
          <button type="submit" onClick={handleSubmit}>
            <IoMdQrScanner className="search__icon" />
          </button>
          {/* {queryUrl(query)} */}
        </div>
        <div className="right__container">
          <a href="#" className="brands">
            <p>Brands</p>
          </a>
          <a href="#">
            <p>Explore</p>
          </a>
          <a href="#">
            <p>Hiring</p>
          </a>
          <button className="btn submit__btn">Submit a photo</button>
          <div className="line"></div>
          <button className="btn login__btn">Login</button>
          <button className="btn join__btn">Join free</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
