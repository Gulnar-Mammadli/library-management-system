import axios from "axios";

const CARD_DEACTIVATE_URL = "http://localhost:8000/cards/deactivate";

class deactivateCardService {
  changeStatus(username, type) {
    return axios
      .put(CARD_DEACTIVATE_URL, {
        username,
        type,
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
  }
}

export default new deactivateCardService();
