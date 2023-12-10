import React, { Component } from "react";
import { withRouter } from "../common/with-router";
import activateCardService from "../services/activateCard";
import deactivateCardService from "../services/deactivateCard";
import CheckButton from "react-validation/build/button";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

class CardPage extends Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);

    this.state = {
      username: "",
      type: "",
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

  handleOnClick(event, endpoint) {
    event.preventDefault();
    console.log("HERE");

    this.setState({
      message: "",
      loading: true,
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      endpoint
        .changeStatus(this.state.username, this.state.type)
        .then((response) => {
          console.log("HERE", response);

          let msg = "";
          if (response) {
            msg = response.msg;
            console.log("msg", msg);
            this.setState({
              loading: false,
              message: msg,
            });
          } else {
            this.setState({
              loading: false,
            });
          }
        });
    }
  }

  render() {
    return (
      <div className="col-md-12">
        <div className="card card-container">
          <Form
            ref={(c) => {
              this.form = c;
            }}
          >
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <Input
                type="text"
                className="form-control"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChange}
                validations={[required]}
              />
            </div>

            <div className="form-group">
              <label htmlFor="type">Card Type</label>
              <Input
                type="text"
                className="form-control"
                name="type"
                value={this.state.type}
                onChange={this.handleInputChange}
                validations={[required]}
              />
            </div>

            <div className="form-group">
              <button
                className="btn btn-primary btn-block"
                disabled={this.state.loading}
                onClick={(event) =>
                  this.handleOnClick(event, activateCardService)
                }
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Activate</span>
              </button>
            </div>

            <div className="form-group">
              <button
                type="button"
                className="btn btn-primary btn-block"
                disabled={this.state.loading}
                onClick={(event) =>
                  this.handleOnClick(event, deactivateCardService)
                }
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Deactivate</span>
              </button>
            </div>
            {this.state.message && (
              <div className="form-group">
                <div className="alert alert-success" role="alert">
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

export default withRouter(CardPage);
