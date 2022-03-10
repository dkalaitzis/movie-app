import React, { useState, useEffect } from "react";
import HomeContent from "./HomeContent";
import SocialMediaIcons from "./SocialMediaIcons";

const NavigationBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav>
      {/* Nav Logo */}
      <div className="row">
        <div className="col-4">
            <img
              src="assets/GCNLogoTXT.svg"
              width="80"
              height="50"
              className="d-inline-block align-top"
              alt="GCNlogo"
              href="#home"
            />
        </div>
        <div className="col-5 align-self-center">
          {/* Social Media Icons */}
          <SocialMediaIcons />
        </div>

        <div className="col-3">
          {/* Toggle Nav Menu Dropdown */}
          {screenWidth < 500 && (
            <img
              onClick={toggleNav}
              className="toggle-btn"
              alt="img"
              src="assets/toggle-nav.png"
            ></img>
          )}
        </div>
      </div>

      {/* Show Nav Menu Dropdown */}
      {toggleMenu & (screenWidth < 500) && (
        <div className="row">
          <a className="col events-btn" href="#events">
            <p className="second-sites-btn">Events</p>
          </a>
          <a className="col club-btn" href="#club">
            <p className="second-sites-btn">Club</p>
          </a>
          <a className="col shop-btn" href="shop">
            <p className="second-sites-btn">Shop</p>
          </a>
          <a className="col youtube-btn" href="youtube">
            <p className="second-sites-btn">YouTube</p>
          </a>

          <ul className="list">
            {/* Search Bar */}
            <li className="items">
              <input
                className="form-control"
                placeholder="Type to search..."
                data-testid="test"
              ></input>
            </li>
            <li className="items">Home</li>
            <li className="items">GCN Show</li>
            <li className="items">How To</li>
            <li className="items">Maintenance</li>
            <li className="items">ASK GCN</li>
            <li className="items">Training</li>
            <li className="items">Features</li>
            <li className="items">Top 10s</li>
            <li className="items">GCN Racing</li>
            <li className="items">GCN Tech</li>
            <li className="items">Presenters</li>
          </ul>
        </div>
      )}

      {/* MOVE TO HOME */}
      <HomeContent />
    </nav>
  );
};

export default NavigationBar;
