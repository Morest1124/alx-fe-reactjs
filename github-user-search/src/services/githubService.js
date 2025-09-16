import axios from "axios";
import { useEffect, useState } from "react";

function fetchUserData() {
  const [UserName, setUserName] = useState("");
  useEffect(() => {
    fetch(" https://api.github.com/users/{username}").then((response) =>
      response.json().then((data) => {
        setUserName(data.slice(0, 4));
      })
    );
    return (
      <div className="fetchUserData">
        <h1>{UserName}</h1>
      </div>
    );
  });
}
