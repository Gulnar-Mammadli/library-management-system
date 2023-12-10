import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "../common/with-router";

const ListOfExpiredBorrowingsPage = () => {
  const [expiredBorrowings, setExpiredBorrowings] = useState([]);

  useEffect(() => {
    const getExpiredBorrowings = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/borrowings/expired"
        );
        console.log("data", response.data.booksData);
        setExpiredBorrowings(response.data.booksData);
      } catch (error) {
        console.error("Error fetching expired borrowings:", error);
      }
    };

    getExpiredBorrowings();
  }, []);

  return (
    <div>
      <h1>List of Loans</h1>
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>#</th>
            <th> ISBN</th>
            <th> Book Title</th>
            <th> Barcode</th>
            <th> Borrowed Date</th>
            <th> Due Date</th>
            <th> Purchase Date</th>
            <th> price</th>
          </tr>
        </thead>
        <tbody>
          {expiredBorrowings.map((borrowing, rowId) => (
            <tr key={rowId}>
              <td>{rowId + 1}</td>
              <td>{borrowing.book.ISBN}</td>
              <td>{borrowing.book.title}</td>
              <td>{borrowing.book.barcode}</td>
              <td>{borrowing.book.borrowDate}</td>
              <td>{borrowing.book.dueDate}</td>
              <td>{borrowing.book.purchaseDate}</td>
              <td>{borrowing.book.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default withRouter(ListOfExpiredBorrowingsPage);
