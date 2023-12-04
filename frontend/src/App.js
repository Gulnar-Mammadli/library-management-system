import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
import LoginService from "./services/login";
import "./App.css";

import Login from "./components/Login";
import Home from "./components/Home";
import Profile from "./components/Profile";
import AdminPage from "./components/AdminPage";
import PasswordResetForm from "./components/ChangePassword";
import ListOfBooksPage from "./components/ListOfBooksPage";

const App = () => {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
          Library
        </Link>
        <div className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to={"/profile"} className="nav-link"></Link>
          </li>
          <li className="nav-item">
            <Link to={"/adminPage"} className="nav-link"></Link>
          </li>
          <li className="nav-item">
            <Link to={"/resetPassword"} className="nav-link"></Link>
          </li>
        </div>
        {
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
            </li>
          </div>
        }
      </nav>

      <div className="container mt-3">
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/adminPage" element={<AdminPage />} />
          <Route
            path="/resetPassword/:username"
            element={<PasswordResetForm />}
          />
          <Route path="/books" element={<ListOfBooksPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
