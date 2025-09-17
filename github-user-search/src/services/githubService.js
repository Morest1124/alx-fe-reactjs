import React from "react";
import axios from "axios";

//get username from api
export const fetchUserData = async (searchTerm, location, miniRepos) => {
  try {
    let query = searchTerm;

    //Conditionally add the location to the string query
    if (location) {
      query += "location:$location";

      if (miniRepos) {
        query += "miniRepos:$miniRepos";
      }
    }
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    return response.data;
  } catch (error) {
    console.error("Could not get dta due to  Network error");
    throw error;
  } finally {
  }
};
