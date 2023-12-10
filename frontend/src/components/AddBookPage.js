import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import AddBookService from "../services/addBook";

import { withRouter } from "../common/with-router";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

class AddBookPage extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddBook = this.handleAddBook.bind(this);

    this.state = {
      ISBN: "",
      title: "",
      language: "",
      numPages: "",
      productionYear: "",
      totalCopies: "",
      loading: false,
      message: "",
    };
  }

  handleInputChange(event) {
    event.preventDefault();
    const target = event.target;
    this.setState({
      [target.name]: target.value,
    });
  }

  handleAddBook(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true,
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AddBookService.addNewBook(
        this.state.ISBN,
        this.state.title,
        this.state.language,
        this.state.numPages,
        this.state.productionYear,
        this.state.totalCopies
      ).then(
        (response) => {
          let data = "";
          let msg = "";
          if (response.data) {
            data = response.data.data;
          } else {
            msg = response.msg;
          }
          if (!msg) {
            const { username } = this.props.router.params;
            this.props.router.navigate(
              `/admin/${encodeURIComponent(username)}`
            );
          } else {
            this.setState({
              loading: false,
              message: "error",
            });
          }
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage,
          });
        }
      );
    } else {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    return (
      <div className="col-md-12">
        <div className="card card-container">
          <Form
            onSubmit={this.handleAddBook}
            ref={(c) => {
              this.form = c;
            }}
          >
            <div className="form-group">
              <label htmlFor="ISBN">ISBN</label>
              <Input
                type="text"
                className="form-control"
                name="ISBN"
                value={this.state.ISBN}
                onChange={this.handleInputChange}
                validations={[required]}
              />
            </div>
            <div className="form-group">
              <label htmlFor="title">Book Title</label>
              <Input
                type="text"
                className="form-control"
                name="title"
                value={this.state.title}
                onChange={this.handleInputChange}
                validations={[required]}
              />
              <div className="form-group">
                <label htmlFor="language">Language</label>
                <Input
                  type="text"
                  className="form-control"
                  name="language"
                  value={this.state.language}
                  onChange={this.handleInputChange}
                  validations={[required]}
                />
              </div>
              <div className="form-group">
                <label htmlFor="numPages">Number of Pages</label>
                <Input
                  type="text"
                  className="form-control"
                  name="numPages"
                  value={this.state.numPages}
                  onChange={this.handleInputChange}
                  validations={[required]}
                />
              </div>
              <div className="form-group">
                <label htmlFor="productionYear">Production Year</label>
                <Input
                  type="text"
                  className="form-control"
                  name="productionYear"
                  value={this.state.productionYear}
                  onChange={this.handleInputChange}
                  validations={[required]}
                />
              </div>
              <div className="form-group">
                <label htmlFor="totalCopies">Total totalCopies</label>
                <Input
                  type="text"
                  className="form-control"
                  name="totalCopies"
                  value={this.state.totalCopies}
                  onChange={this.handleInputChange}
                  validations={[required]}
                />
              </div>
            </div>

            <div className="form-group">
              <button
                className="btn btn-primary btn-block"
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Add Book</span>
              </button>
            </div>

            {this.state.message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {this.state.message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={(c) => {
                this.checkBtn = c;
              }}
            />
          </Form>
        </div>
      </div>
    );
  }
}

export default withRouter(AddBookPage);
