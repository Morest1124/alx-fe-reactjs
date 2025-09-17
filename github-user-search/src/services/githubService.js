import React from "react";
import axios from "axios";

//get username from api
export const fetchUserData = async (searchTerm, location, minRepos) => {
  try {
    let query = searchTerm;

    //Conditionally add the location to the string query
    if (location) {
      query += "{location:$location}";

      if (miniRepos) {
        query += "{minRepos:$minRepos}";
      }
    }

    // Use the correct GitHub Search API endpoint with the dynamically built query
    const response = await axios.get(
      `https://api.github.com/search/users?q=${query}`
    );

    return response.data;
  } catch (error) {
    console.error("Could not get dta due to  Network error");
    throw error;
  } finally {
  }
};
