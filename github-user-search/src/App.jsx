import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./components/Search";
// import { Link } from "react-router-dom";
import fetchUserData from "./services/githubService";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

function App() {
  return (
    <>
      <h1> Username</h1>
      <fetchUserData />
      {/* <Router>
        <nav>
          <Link to="/Search">Search</Link>
        </nav>
        <Routes>
          <Route path="/Search" element={Search}></Route>
          <Route path="/Search" element={github}></Route>
        </Routes>
      </Router> */}
    </>
  );
}

user_data = Response.json();
UserName = user_data("UserName");
avarter_url = user_data("avarter_url");
Image = user_data("img");

// export default defineConfig({
//   plugins: [tailwindcss()],
// });

export default App;
