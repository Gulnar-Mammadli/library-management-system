import axios from "axios";

const CARD_ACTIVATE_URL = "http://localhost:8000/cards/activate";

class activateCardService {
  changeStatus(username, type) {
    return axios
      .put(CARD_ACTIVATE_URL, {
        username,
        type,
      })
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data));
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
  }
}

export default new activateCardService();
