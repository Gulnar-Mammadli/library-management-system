import axios from "axios";

const BOOK_URL = "http://localhost:8000/books/";
class AddBookService {
  addNewBook(ISBN, title, language, numPages, productionYear, totalCopies) {
    console.log("in add book");
    return axios
      .post(BOOK_URL, {
        ISBN,
        title,
        language,
        numPages,
        productionYear,
        totalCopies,
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
  }
}

export default new AddBookService();
