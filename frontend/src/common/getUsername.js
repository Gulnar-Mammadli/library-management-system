import React from "react";
// import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const GetUsername = () => {
  const { username } = useParams();
  console.log(username);
};

export default GetUsername;
