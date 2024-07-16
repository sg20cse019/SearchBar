import React, { useEffect, useState } from "react";
import axios from "axios";

function AxiosFetch() {
  const [Data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.github.com/users")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })

      .catch((err) => {
        throw err;
      });
  }, []);
  return (
    <>
      {Data.map((user) => {
        return (
          <div>
            <h1>{user.login}</h1>
            <img src={user.avatar_url} alt="" />
          </div>
        );
      })}
    </>
  );
}

export default AxiosFetch;
