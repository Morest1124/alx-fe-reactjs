import React, { useEffect, useState } from "react";
import axios from "axios";
// Using API

function fetchUserData() {
  const [UserName, setUserName] = useState("null"); //Updates the state
  const [Loading, setLoading] = useState("true");
  const [error, setError] = useState(null);
}

useEffect(
  () =>
    fetch(" https://api.github.com/users/{username}", {
      method: "get",
    })
      .then((Response) => {
        if (!Response.ok) {
          throw new error("Looks like we cant find the user");
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
api_key = ".env";
headers = "Authorization" : f"Bearer { api_key }",
response = requests.get((headers = headers));
response.raise_for_status();
user_data = Response.json();
UserName = user_data("UserName");
avarter_url = user_data("avarter_url");
Image = user_data("img");

if (Loading) return <p>Loading...</p>;
if (error) return <p>Error: {error.message} </p>;

return (
  <>
    <h1>Username:</h1>
    <pre> {JSON.stringify(data, null, 2)} </pre>
  </>
);

export default fetchUserData;
