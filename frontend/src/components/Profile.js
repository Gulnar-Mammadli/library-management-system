import React from "react";
// import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Profile = (props) => {
  const { username } = useParams();

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{`Hey ${username}`}</strong>
        </h3>
      </header>
    </div>
  );
};

export default Profile;
