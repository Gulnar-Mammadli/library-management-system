import axios from "axios";

const API_URL = "http://localhost:8080/users/login";

class LoginService {
  login(username, password, role) {
    console.log("here");

    return axios
      .get(API_URL, {
        username,
        password,
        role,
      })
      .then((response) => {
        // localStorage.setItem("user", JSON.stringify(response.data));
        console.log("data", JSON.stringify(response.data));
        return JSON.stringify(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

  logout() {
    localStorage.removeItem("user");
  }
}

export default new LoginService();
