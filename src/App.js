import "./styles.css";
import React from "react";
import LandingSection from "./components/LandingSection";
import HowWorksSection from "./components/HowWorksSection";
import ScriptSection from "./components/ScriptSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <LandingSection />
      <HowWorksSection />
      <ScriptSection />
      <Footer />
    </>
  );
}

export default App;
