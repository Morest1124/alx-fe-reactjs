import axios from "axios";

const GITHUB_API_URL = "https://api.github.com/search/users";
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

const headers = {
  Authorization: `token ${GITHUB_TOKEN}`,
};

export const fetchUserData = async (searchTerm, location, minRepos) => {
  try {
    const queryParts = [];
    if (searchTerm) {
      queryParts.push(searchTerm);
    }
    if (location) {
      queryParts.push(`location:${location}`);
    }
    if (minRepos) {
      queryParts.push(`repos:>=${minRepos}`);
    }

    const q = queryParts.join("+");

    const response = await axios.get(GITHUB_API_URL, {
      params: { q },
      headers,
    });

    return response.data;
  } catch (error) {
    console.error("Could not get data due to Network error", error);
    throw error;
  }
};