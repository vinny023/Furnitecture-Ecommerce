import React from "react";

import { setToken } from "../../../utils/index";
import { Redirect } from "react-router-dom";
import Strapi from "strapi-sdk-javascript/build/main";
const apiUrl = process.env.API_URL || "http://localhost:1337";
const strapi = new Strapi(apiUrl);

class Signin extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
    toast: false,
    toastMessage: "",
    loading: false,
    redirect: false,
  };

  handleChange = (event) => {
    console.log(event.target.name);
    event.persist();
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { username, password } = this.state;

    if (this.isFormEmpty(this.state)) {
      this.showToast("Fill in all fields");
      return;
    }

    // Sign up user
    try {
      this.setState({ loading: true });
      const response = await strapi.login(username, password);
      this.setState({ loading: false });
      setToken(response.jwt);
      this.redirectUser("/products");
      console.log("loggedin");
    } catch (err) {
      this.setState({ loading: false });
      this.showToast(err.message);
    }
  };

  setRedirect = () => {
    this.setState({ redirect: true });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/kind" />;
    }
  };
  // redirectUser = (path) => this.props.history.push(path);

  isFormEmpty = ({ username, password }) => {
    return !username || !password;
  };

  showToast = (toastMessage) => {
    this.setState({ toast: true, toastMessage });
    setTimeout(() => this.setState({ toast: false, toastMessage: "" }), 5000);
  };

  render() {
    // const { toastMessage, toast, loading } = this.state;

    return (
      <div>
        <h1>Welcome back!</h1>
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <br></br>
          <input
            id="signin-username"
            type="text"
            name="username"
            placeholder="Username"
            onChange={this.handleChange}
          ></input>
          <br></br>
          <br></br>
          <input
            onChange={this.handleChange}
            id="signin-password"
            name="password"
            type="password"
            label="password"
            placeholder="password"
            value={this.state.password}
          />
          <br></br>
          <div>
            {this.renderRedirect()}
            <button text="Submit" type="submit" onClick={this.setRedirect}>
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Signin;
