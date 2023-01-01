import React from "react";
import writeicon from "../imgs/writeicon.png";
import addicon from "../imgs/addicon.png";
import downloadicon from "../imgs/downloadicon.png";

const HowWorksSection = () => {
  return (
    <section className="howworkssection">
      <div className="howworkssectionmaindiv">
        <h2>How it works</h2>
        <div className="worksdivs">
          <div className="inddiv">
            <img src={writeicon} alt="write icon" />
            <h3>Start writing a script</h3>
            <p>Click on start button and you will get a random joke</p>
          </div>
          <div className="inddiv">
            <img src={addicon} alt="add icon" />
            <h3>Add it to the script</h3>
            <p>Read the joke. If you like it, add it to the script</p>
          </div>
          <div className="inddiv">
            <img src={downloadicon} alt="download icon" />
            <h3>Download the script</h3>
            <p>Click on download to get a pdf of the script</p>
          </div>
        </div>
        <a href="#scriptsec">
          <button className="btn secbtn">Start writing</button>
        </a>
      </div>
    </section>
  );
};

export default HowWorksSection;
