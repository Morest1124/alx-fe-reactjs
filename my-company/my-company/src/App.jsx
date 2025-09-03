import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";

function App() {
  return (
    <>
      <home />
      <About />
      <Services />
      <Contact />
    </>
  );
}

export default App;
