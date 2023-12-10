import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "../common/with-router";
import { useParams } from "react-router-dom";

const ListOfStudentBorrowingsPage = () => {
  const [studentBorrowings, setStudentBorrowings] = useState([]);
  const { username } = useParams();

  useEffect(() => {
    const getStudentBorrowings = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/borrowings/borrowed",
          {
            params: {
              username: username,
            },
          }
        );
        setStudentBorrowings(response.data.borrowedData);
      } catch (error) {
        console.error("Error fetching borrowings:", error);
      }
    };

    getStudentBorrowings();
  }, []);

  return (
    <div>
      <h1>List of Loans</h1>
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>#</th>
            <th> Book Title</th>
            <th> Borrow Date</th>
            <th> Due Date</th>
            <th> Return Date</th>
            <th> Status</th>
            <th> Fine</th>
          </tr>
        </thead>
        <tbody>
          {studentBorrowings.map((borrowing, rowId) => (
            <tr key={rowId}>
              <td>{rowId + 1}</td>
              <td>{borrowing.title}</td>
              <td>{borrowing.borrowDate}</td>
              <td>{borrowing.dueDate}</td>
              <td>{borrowing.returnDate}</td>
              <td>{borrowing.status}</td>
              <td>{borrowing.totalFine}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default withRouter(ListOfStudentBorrowingsPage);
