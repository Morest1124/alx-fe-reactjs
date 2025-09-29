import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";
import axios from "axios";

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;
const headers = {
  Authorization: `token ${GITHUB_TOKEN}`,
};

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setUserData(null);
    setError(null);
    setIsLoading(true);

    try {
      const searchData = await fetchUserData(
        searchTerm,
        location,
        minRepos
      );

      if (searchData.items && searchData.items.length > 0) {
        const detailedUsers = await Promise.all(
          searchData.items.map(user => axios.get(user.url, { headers }))
        );
        const detailedUserData = {
          ...searchData,
          items: detailedUsers.map(response => response.data),
        };
        setUserData(detailedUserData);
      } else {
        setUserData(searchData);
      }
    } catch (err) {
      console.error(err); // Log the actual error
      setError("Looks like we cant find the user");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">
          GitHub User Search
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-6 md:flex-row">
          <input
            type="text"
            placeholder="Enter a username..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 bg-gray-800 rounded-md border border-gray-700 focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            placeholder="Location (e.g., 'South Africa')"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-3 bg-gray-800 rounded-md border border-gray-700 focus:outline-none focus:border-blue-500"
          />
          <input
            type="number"
            placeholder="Min Repositories"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="w-full p-3 bg-gray-800 rounded-md border border-gray-700 focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="w-full md:w-auto p-3 bg-blue-600 rounded-md font-bold hover:bg-blue-700 transition-colors"
          >
            Search
          </button>
        </form>

        {isLoading && <p className="text-center text-gray-400">Loading...</p>}

        {error && <p className="text-center text-red-500">{error}</p>}

        {userData && userData.items && userData.items.length > 0 && (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userData.items.map((user) => (
              <li
                key={user.id}
                className="bg-gray-800 p-4 rounded-md flex flex-col items-center shadow-lg text-center"
              >
                <img
                  src={user.avatar_url}
                  alt={`${user.login}'s avatar`}
                  className="w-24 h-24 rounded-full mb-4 border-2 border-blue-500"
                />
                <h3 className="text-xl font-semibold mb-1">{user.name || user.login}</h3>
                {user.bio && <p className="text-sm text-gray-400 mb-2">{user.bio}</p>}
                <p className="text-sm text-gray-400 mb-2">Followers: {user.followers}</p>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  View Profile
                </a>
              </li>
            ))}
          </ul>
        )}

        {userData && userData.items && userData.items.length === 0 && (
          <p className="text-center text-gray-400">
            No users found for this search.
          </p>
        )}
      </div>
    </div>
  );
}

export default Search;