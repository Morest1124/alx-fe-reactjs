import { useState } from "react";
import "./App.css";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Services from "./component/Services";

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
