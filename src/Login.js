import React, { Component } from "react";
import axios from "axios";
import Signup from "./Signup";
import MHTQ from "./MHTQ";
import "./Login.css";
class Login extends Component {
  constructor(props) {
    super();
    this.state = {
      name: "",
      email: "",
      pass: "",
      msg: "Content",
      isLoggedIn: false,
      isLog: false,
    };
    this.handleChangeFields = this.handleChangeFields.bind(this);
  }
  handleLogin = () => {
    const email = this.state.email;
    const pass = this.state.pass;

    const data = {
      email,
      pass,
    };
    axios
      .get("http://localhost/cbi/login.php", { params: data })
      .then((kalu) => {
        console.log(kalu, "tatata");
        console.log(kalu.data[0].answer);
        console.log(kalu.data[0].name);
        if (kalu.data[0].answer === "valid") {
          this.setState({
            isLoggedIn: true,

            name: kalu.data[0].name,
          });
        } else {
          alert("not Valid");
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  handleChangeFields = (e1) => {
    this.setState({
      ...this.state,
      [e1.target.name]: e1.target.value,
    });
    console.log(this.state, "formField");
  };

  handleClick = () => {
    this.setState({ isLog: true });
    console.log(this.state.isLog);
  };

  render() {
    return (
      <div>
        {this.state.isLog ? (
          <Signup />
        ) : (
          <div>
            {this.state.isLoggedIn ? (
              <MHTQ kalu={this.state.name} />
            ) : (
              <div className="Body1">
                <div className="login-body">
                  <div className="login-graphic">
                    <p className="login-graphic-text">BLAHAHAHAH</p>
                  </div>
                </div>
                <div className="login-card">
                  <h1>Log In</h1>
                  <form>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      label="Email Address"
                      placeholder="Email Address"
                      onChange={this.handleChangeFields}
                      required
                    />
                    <input
                      type="password"
                      id="pass"
                      name="pass"
                      label="Password"
                      placeholder="Password"
                      onChange={this.handleChangeFields}
                      required
                    />
                    <input
                      type="button"
                      name="login"
                      value="submit"
                      className="login login-submit"
                      onClick={this.handleLogin}
                    />
                  </form>
                  <div className="login-help">
                    Don't have an Account Yet?{" "}
                    <button
                      className="signup-button"
                      onClick={this.handleClick}
                    >
                      Register here.
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Login;
