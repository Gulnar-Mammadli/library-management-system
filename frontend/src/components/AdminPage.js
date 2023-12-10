import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import RegisterService from "../services/register";

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

class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePostalAddress = this.onChangePostalAddress.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeCode = this.onChangeCode.bind(this);
    this.onChangeType = this.onChangeType.bind(this);

    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      postalAddress: "",
      password: "",
      phoneNumber: "",
      age: "",
      gender: "",
      code: "",
      type: "",
      loading: false,
      message: "",
    };
  }

  onChangeFirstName(e) {
    this.setState({
      firstName: e.target.value,
    });
  }

  onChangeLastName(e) {
    this.setState({
      lastName: e.target.value,
    });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePostalAddress(e) {
    this.setState({
      postalAddress: e.target.value,
    });
  }

  onChangePhoneNumber(e) {
    this.setState({
      phoneNumber: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onChangeAge(e) {
    this.setState({
      age: e.target.value,
    });
  }

  onChangeGender(e) {
    this.setState({
      gender: e.target.value,
    });
  }

  onChangeCode(e) {
    this.setState({
      code: e.target.value,
    });
  }

  onChangeType(e) {
    this.setState({
      type: e.target.value,
    });
  }

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true,
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      RegisterService.register(
        this.state.firstName,
        this.state.lastName,
        this.state.username,
        this.state.email,
        this.state.postalAddress,
        this.state.phoneNumber,
        this.state.age,
        this.state.gender,
        this.state.code,
        this.state.password,
        this.state.type
      ).then(
        (response) => {
          console.log("HERE", response);
          let data = "";
          let msg = "";
          if (response.data) {
            data = response.data.data;
          } else {
            msg = response.msg;
          }
          if (!msg) {
            this.props.router.navigate("/");
            // window.location.reload();
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
            onSubmit={this.handleRegister}
            ref={(c) => {
              this.form = c;
            }}
          >
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="firstName">FirstName</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.onChangeFirstName}
                    validations={[required]}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">LastName</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.onChangeLastName}
                    validations={[required]}
                  />
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <Input
                      type="text"
                      className="form-control"
                      name="username"
                      value={this.state.username}
                      onChange={this.onChangeUsername}
                      validations={[required]}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <Input
                      type="text"
                      className="form-control"
                      name="email"
                      value={this.state.email}
                      onChange={this.onChangeEmail}
                      validations={[required]}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="postalAddress">Postal Address</label>
                    <Input
                      type="text"
                      className="form-control"
                      name="postalAddress"
                      value={this.state.postalAddress}
                      onChange={this.onChangePostalAddress}
                      validations={[required]}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="phoneNumber"
                    value={this.state.phoneNumber}
                    onChange={this.onChangePhoneNumber}
                    validations={[required]}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="age">Age</label>
                  <Input
                    type="number"
                    min="6"
                    className="form-control"
                    name="age"
                    value={this.state.age}
                    onChange={this.onChangeAge}
                    // validations={[required]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="gender">Gender</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="gender"
                    value={this.state.gender}
                    onChange={this.onChangeGender}
                    // validations={[required]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="code">Student Code</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="code"
                    value={this.state.code}
                    onChange={this.onChangeCode}
                    validations={[required]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    validations={[required]}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="text">Choose card</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="type"
                    value={this.state.type}
                    onChange={this.onChangeType}
                    validations={[required]}
                  />
                </div>
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
                <span>Register a new student</span>
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

export default withRouter(AdminPage);
