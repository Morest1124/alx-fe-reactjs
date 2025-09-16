import React, { useEffect, useState } from "react";
import axios from "axios";
// Using API

function FetchUserName() {
  const [UserName, setUserName] = useState(""); //Updates the state
  const [Loading, setLoading] = useState("");
  const [error, setError] = useState;
}

useEffect(
  () =>
    fetch(" https://api.github.com/users/{username}", {
      method: "GET",
    })
      .then((Response) => {
        if (!Response.ok) {
          throw new error("Network error");
        }
        return Response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      }),
  []
);
if (Loading) return <p>Loading...</p>;
if (error) return <p>Error: {error.message} </p>;

return (
  <>
    <h1>Username:</h1>
    <pre> {JSON.stringify(data, null, 2)} </pre>
  </>
);

export default FetchUserName;
