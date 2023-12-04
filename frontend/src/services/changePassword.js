import axios from "axios";

const API_URL = "http://localhost:8000/students/password";
console.log("here1");
class ChangePasswordService {
  changePassword(password, username) {
    console.log("in change password", username);
    return axios
      .put(API_URL, {
        password,
        username,
      })
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data));
        // console.log("data", JSON.stringify(response.data));
        return response.data;
      })
      .catch((error) => {
        // console.log("error", JSON.stringify(error.response.data));
        return error.response.data;
      });
  }
}

export default new ChangePasswordService();
