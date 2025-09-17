import React, { useEffect, useState } from "react";
import { Axios } from "axios";
import { fetchUserData } from "../services/githubService";

async function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [UserData, setUserData] = useState("null");
  const [Loading, setLoading] = useState("false");
  const [error, setError] = useState("null");
  const [location, setLocation] = useState("");
  const [miniRepos, setMiniRepos] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setUserData(null);
    setIsLoading(true);
    error(null);

    try {
      const data = await fetchUserData(searchTerm); //awit for the data to load

      //If pass update the data state
      setUserData(data);
    } catch (error) {
      setError("Looks like we cant find the user");
    } finally {
      isLoading(false);
    }
  };
  return (
    <div className="search-container">
      <form onSubmit="handleSubmit"></form>

      {isLoading && <p>Loading...</p>}
      {error && <p>Looks like we can't find user.</p>}

      {userData && (
        <div>
          <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} />
          <h2>{userData.name}</h2>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}

<form action="post">
  <input
    type="text"
    placeholder="Enter a GitHub username"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
  <input
    type="text"
    placeholder="Location"
    value={location}
    onChange={(e) => setLocation(e.target.value)}
  />
  <input
    type="text"
    placeholder="miniRepos"
    value={location}
    onChange={(e) => setMiniRepos(e.target.value)}
  />
  <button type="submit">Search</button>
</form>;

export default Search;
