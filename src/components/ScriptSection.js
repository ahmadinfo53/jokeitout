import React from "react";
import { useState } from "react";

const ScriptSection = () => {
  const [joke, setJoke] = useState("");
  const [punckline, setPunchLine] = useState("");
  const [script, setScript] = useState([]);

  const apicall = () => {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((response) => response.json())
      .then((data) => (setJoke(data.setup), setPunchLine(data.punchline)));
  };

  const startScript = () => {
    document.getElementById("startbtn").style.display = "none";
    document.getElementById("jokesection").style.display = "grid";
    apicall();
  };

  const addToScript = () => {
    setScript((script) => [...script, `${joke} ..... ${punckline}`]);
    startScript();
  };

  const downloadPdf = () => {
    var content = document.getElementById("thescript");
    var printdoc = document.getElementById("ifmcontentstoprint").contentWindow;
    printdoc.document.open();
    printdoc.document.write(content.innerHTML);
    printdoc.document.close();
    printdoc.focus();
    printdoc.print();
  };
  return (
    <section className="scriptsec" id="scriptsec">
      <div className="scriptdiv">
        <button
          className="btn scriptsecbtn"
          id="startbtn"
          onClick={startScript}
        >
          Start writing the script
        </button>
        <iframe id="ifmcontentstoprint"></iframe>
        <div className="jokesection" id="jokesection">
          <div className="jokediv">
            <p>Joke:</p>
            {joke}
            <p>Punckline:</p>
            {punckline}
            <div></div>
            <button
              className="btn add-script-btn"
              id="startbtn"
              onClick={addToScript}
            >
              Add to the script
            </button>
            <button
              className="btn next-btn"
              id="startbtn"
              onClick={startScript}
            >
              next
            </button>
          </div>
          <div className="sriptsection">
            <p id="thescript">
              The script:
              {script.map((item) => (
                <p>{item}</p>
              ))}
            </p>
            <button className="btn" onClick={downloadPdf}>
              Download the script
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScriptSection;
