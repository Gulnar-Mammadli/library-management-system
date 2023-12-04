import React, { Component } from "react";
import { withRouter } from "../common/with-router";
import ChangePasswordService from "../services/changePassword";

class PasswordResetForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      passwordVerify: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    event.preventDefault();
    const target = event.target;
    this.setState({
      [target.name]: target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.password !== this.state.passwordVerify) {
      return;
    }

    const { username } = this.props.router.params;

    ChangePasswordService.changePassword(this.state.password, username);
    this.props.router.navigate(`/profile/${encodeURIComponent(username)}`);
  }

  render() {
    const { username } = this.props.router.params;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>
            <strong>{`Hello, ${username}`}</strong>
          </h3>
          <label>
            Password
            <input
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Re-type password
            <input
              name="passwordVerify"
              type="password"
              value={this.state.passwordVerify}
              onChange={this.handleInputChange}
            />
          </label>
          <button type="submit">Reset password</button>
        </form>
      </div>
    );
  }
}

export default withRouter(PasswordResetForm);
