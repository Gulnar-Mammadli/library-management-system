import React from "react";
import { useParams } from "react-router-dom";

const AdminView = (props) => {
  const { username } = useParams();

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{`Welcome, ${username}`}</strong>
        </h3>
      </header>
      <div>
        <p>
          <a href={`/adminPage/${encodeURIComponent(username)}`}>
            Register Student
          </a>
        </p>
      </div>
      <div>
        <p>
          <a href="http://localhost:3000/cards"> Activate or Deactivate Card</a>
        </p>
      </div>
    </div>
  );
};

export default AdminView;
