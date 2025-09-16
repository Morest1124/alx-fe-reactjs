import { useState } from "react";
import React from "react";
import { searchUsers } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState(""); // 1. Add state for minRepos
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  const handleUserNameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  // 2. Add handler for minRepos
  const handleMinReposChange = (event) => {
    setMinRepos(event.target.value);
  };

  const handleSearch = async (isNewSearch) => {
    setLoading(true);
    setError(null);
    if (isNewSearch) {
      setUsers([]);
      setPage(1);
      // Reset minRepos if it's a new search and you want to clear it
    }

    try {
      let query = username;
      if (location) {
        query += `+location:${location}`;
      }
      if (minRepos) {
        // 4. Include minRepos in the query
        query += `+repos:>=${minRepos}`;
      }
      query += `&page=${isNewSearch ? 1 : page}`;

      const data = await searchUsers(query);
      setUsers((prev) => (isNewSearch ? data.items : [...prev, ...data.items]));
      setHasMore(
        data.items.length > 0 &&
          data.total_count >
            (isNewSearch ? data.items.length : users.length + data.items.length)
      );
    } catch (error) {
      setError("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(true);
  };

  const loadMore = () => {
    setPage((prev) => prev + 1);
    handleSearch(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUserNameChange}
          placeholder="Enter a username"
        />
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={handleLocationChange}
          placeholder="Enter a location"
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {users.length > 0 && (
        <div>
          <h2>Search Results</h2>
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                <img
                  src={user.avatar_url}
                  alt={`${user.login}'s avatar`}
                  width="50"
                />
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {user.login}
                </a>
                <p>Score: {user.score}</p>
              </li>
            ))}
          </ul>
          {hasMore && (
            <button onClick={loadMore} disabled={loading}>
              Load More
            </button>
          )}
        </div>
      )}
    </>
  );
}

export default Search;
