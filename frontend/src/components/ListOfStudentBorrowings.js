import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "../common/with-router";

const ListOfStudentBorrowings = () => {
  const [borrowings, setBorrowings] = useState([]);

  useEffect(() => {
    const getBorrowings = async () => {
      try {
        const response = await axios.get("http://localhost:8000/borrowings/borrowed");
        setBorrowings(response.data.allBorrowings);
      } catch (error) {
        console.error("Error fetching borrowings:", error);
      }
    };

    getBorrowings();
  }, []);

  return (
    <div>
      <h1>List of borrowings</h1>
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>#</th>
            <th> Borrow Date</th>
            <th> Return Date</th>
            <th> Due Date</th>
            <th> Status</th>
            <th> Total Fine</th>
            <th>Copy ID</th>
            <th>Student ID</th>
          </tr>
        </thead>
        <tbody>
          {borrowings.map((borrowing, rowId) => (
            <tr key={rowId}>
              <td>{rowId + 1}</td>
              <td>{borrowing.borrowDate}</td>
              <td>{borrowing.returnDate}</td>
              <td>{borrowing.dueDate}</td>
              <td>{borrowing.status}</td>
              <td>{borrowing.totalFine}</td>
              <td>{borrowing.copyId}</td>
              <td>{borrowing.studentId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default withRouter(ListOfStudentBorrowings);