import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

const Users = () => {
  const API = "https://jsonplaceholder.typicode.com/users";

  const [dataUser, setDataUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await Axios(API);
      setDataUser(result.data);
    };
    fetchData();
  }, []);

  const Users = dataUser.map((user) => (
    <h2 key={user.id}>
      <Link to={`/${user.id}`}>{user.name}</Link>
    </h2>
  ));

  return (
    <div>
      <h1>Users</h1>
      {Users}
    </div>
  );
};

export default Users;
