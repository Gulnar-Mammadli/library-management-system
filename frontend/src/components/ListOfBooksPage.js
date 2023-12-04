import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "../common/with-router";

const ListOfBooksPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await axios.get("http://localhost:8000/books/");
        setBooks(response.data.allBooks);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    getBooks();
  }, []);

  return (
    <div>
      <h1>List of Books</h1>
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>#</th>
            <th> ISBN</th>
            <th> Title</th>
            <th> Language</th>
            <th> Pages</th>
            <th> Year</th>
            <th>Total Copies</th>
            <th>Available Copies</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, rowId) => (
            <tr key={rowId}>
              <td>{rowId + 1}</td>
              <td>{book.ISBN}</td>
              <td>{book.title}</td>
              <td>{book.language}</td>
              <td>{book.numPages}</td>
              <td>{book.productionYear}</td>
              <td>{book.totalCopies}</td>
              <td>{book.numAvailableCopies}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default withRouter(ListOfBooksPage);
