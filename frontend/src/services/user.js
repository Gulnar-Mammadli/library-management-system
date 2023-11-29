import axios from "axios";

const API_URL = "http://localhost:8000/api/test/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const UserService = {
  getPublicContent,
};
