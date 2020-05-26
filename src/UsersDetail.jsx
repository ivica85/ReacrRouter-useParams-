import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

const UsersDetail = () => {
  const { id } = useParams();
  
  const API = `https://jsonplaceholder.typicode.com/users/${id}`;

 

  const [dataUserDetail, setDataUserDetail] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const result = await Axios(API);
      console.log(result.data);
      
      setDataUserDetail(result.data);
    };
    fetchData();
  }, [id]);

  return (
    <div>
      <h1>User Detail</h1>
      {dataUserDetail.name}
      <br/>
      {dataUserDetail.email}
    </div>
  );
};

export default UsersDetail;
