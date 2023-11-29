import axios from "axios";

const API_URL = "http://localhost:8000/users/login";

class LoginService {
  login(username, password, role) {
    return axios
      .post(API_URL, {
        username,
        password,
        role,
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

  logout() {
    localStorage.removeItem("user");
  }
}

export default new LoginService();
