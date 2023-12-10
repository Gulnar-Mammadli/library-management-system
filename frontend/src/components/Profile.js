import React from "react";
// import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Profile = (props) => {
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
          <a href={`/resetPassword/${encodeURIComponent(username)}`}>
            Reset Passord
          </a>
        </p>
      </div>
      <div>
        <p>
          <a href="http://localhost:3000/books"> See List of Books</a>
        </p>
      </div>
      <div>
        <p>
          <a href={`/borrowings/${encodeURIComponent(username)}`}>
            See List of Borrowings
          </a>
        </p>
      </div>
    </div>
  );
};

export default Profile;
