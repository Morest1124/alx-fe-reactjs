import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";

function App() {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="<About/>">About</a>
        </li>
        <li>
          <a href="<Services/>">Services</a>
        </li>
        <li>
          <a href="<Contact/>">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default App;
