import React from "react";
import avatar from "../assets/images/unnamed.jpg";

const FeaturedBox = () => {
  return (
    <section className="featured-box" id="home">
      <div className="featured-text">
        <div className="featured-text-card">
          <span>Satayu sawangphongpheaw</span>
        </div>
        <div className="featured-name">
          I'm <span className="typedText"></span>
        </div>
        <div className="featured-text-info">
          <p>
            Hello! My name is Satayu sawangphongpheaw, and I am a software
            Engineering. I am passionate about Javascript and have experience in
            mySQL and UX/UI . I enjoy collaborating with others and am always
            eager to learn and grow.
          </p>
        </div>
        <div className="featured-text-btn">
          <button className="btn">
            Download CV <i className="uil uil-import"></i>
          </button>
        </div>
        <div className="social_icons">
          <div className="icon">
            <a href="https://www.instagram.com/o_obo70l?igsh=Ymk0Y3h5dHptcTc2">
              <i className="uil uil-instagram-alt"></i>
            </a>
          </div>
          <div className="icon">
            <a href="https://www.facebook.com/boonruksa.winanon.5?mibextid=LQQJ4d">
              <i className="uil uil-facebook"></i>
            </a>
          </div>
          <div className="icon">
            <a href="https://github.com/FAYRESU">
              <i className="uil uil-github"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="featured-image">
        <div className="image">
          <img src={avatar} alt="avatar" />
        </div>
      </div>
      <div className="scroll-icon-box">
        <a href="#about" className="scroll-btn">
          <i className="uil uil-mouse-alt"></i>
          <p>Scroll Down</p>
        </a>
      </div>
    </section>
  );
};

export default FeaturedBox;
