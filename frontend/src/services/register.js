import axios from "axios";

const API_URL = "http://localhost:8000/students/";

class RegisterService {
  register(
    firstName,
    lastName,
    username,
    email,
    postalAddress,
    phoneNumber,
    age,
    gender,
    code,
    password
  ) {
    return axios
      .post(API_URL, {
        firstName,
        lastName,
        username,
        email,
        postalAddress,
        password,
        phoneNumber,
        age,
        gender,
        code,
      })
      .then((response) => {
        localStorage.setItem("student", JSON.stringify(response.data));
        // console.log("data", JSON.stringify(response.data));
        return response.data;
      })
      .catch((error) => {
        // console.log("error", JSON.stringify(error.response.data));
        return error.response.data;
      });
  }
}

export default new RegisterService();
