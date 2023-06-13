import axios from "axios";
import { Component } from "react";
import "./Signup.css";
import Login from "./Login";
class Signup extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      pass: "",
      isLog: false,
    };
  }
  handleChange = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  fun = () => {
    const name = this.state.name;
    const email = this.state.email;
    const pass = this.state.pass;

    const sendData = {
      name,
      email,
      pass,
    };
    console.log(sendData);

    axios
      .get("http://localhost/cbi/login_data.php", { params: sendData })
      .then((result) => {
        if (result.data.Status === "Invalid") {
          alert("Invalid User");
        }
      });
    this.setState({ isLog: true });
  };

  render() {
    return (
      <div>
        {this.state.isLog ? (
          <Login />
        ) : (
          <div className="Body2">
            <div className="register-card">
              <h1>Register</h1>
              <form onSubmit={this.fun}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  onChange={this.handleChange}
                  value={this.state.name}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={this.handleChange}
                  value={this.state.email}
                />
                <input
                  type="password"
                  name="pass"
                  placeholder="Password"
                  onChange={this.handleChange}
                  value={this.state.pass}
                />
                <input
                  type="submit"
                  name="register"
                  className="register register-submit"
                  value="Register"
                  id="Submit"
                  onClick={this.fun}
                />
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default Signup;
