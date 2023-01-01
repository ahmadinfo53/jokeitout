import React from "react";
import "../styles.css";
import heroimg from "../imgs/rightimage.png";
import Logo from "../imgs/logo.png";
const LandingSection = () => {
  return (
    <>
      <section className="landingsection">
        <img className="logo" src={Logo} alt="logo" />
        <div className="landingsecmaindiv">
          <div className="landingsecleftdiv">
            <h1>Your Script Writer</h1>
            <p>
              Jokeitout is a website that gives you jokes that you can use
              anywhere. It will show you jokes that you can add to your script
              and than You can download the jokes in a pdf
            </p>
            <a href="#scriptsec">
              <button className="btn">Start writing</button>
            </a>
          </div>
          <div className="landingsecrightdiv">
            <img className="heroimg" src={heroimg} alt="hero" />
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingSection;
