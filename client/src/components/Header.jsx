import React from "react";

const Header = () => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="intro-text">
                <h1>Planete Hotel</h1>
                <p>Hotel / Restaurant / Night Club</p>
                <a href="#about" className="btn btn-custom btn-lg page-scroll">
                  Discover Story
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
