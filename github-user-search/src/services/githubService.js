import React from "react";
import axios from "axios";

//get username from api
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    return response.data;
  } catch (error) {
    console.error("Could not get dta due to  Network error");
  } finally {
  }
};
