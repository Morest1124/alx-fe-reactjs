import { useState } from "react";
import React from "react";

function Search() {
  const [username, setUsername] = useState("");

  const handleUserNameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitted Username:", username);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <lebel htmlfor="username">Username:</lebel>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUserNameChange}
          placeholder="Enter your username"
        />
        <p>current input: {username}</p>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
export default Search;
