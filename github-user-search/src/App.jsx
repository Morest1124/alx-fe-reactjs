import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./components/Search";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <nav>
          <Link to="/Search">Search</Link>
        </nav>
        <Routes>
          <Route path="/Search" element={Search}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
