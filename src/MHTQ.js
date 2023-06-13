import React, { Component } from "react";
import "./MHTQ.css";
import axios from "axios";
import Result from "./Result";
class MHTQ extends Component {
  constructor(props) {
    super();
    this.state = {
      data: [],
      isLog: false,
      sum: 0,
    };
  }

  componentDidMount() {
    const data = this.state.data;
    const sendData = {
      data,
    };
    axios
      .get("http://localhost/cbi/MHTQ.php", { params: sendData })
      .then((res) => {
        this.setState({ data: res.data });
        console.log(res);
      });
  }

  fun = (e) => {
    let ss = 0;
    const formData = new FormData(e.currentTarget);
    e.preventDefault();
    for (let [key, value] of formData.entries()) {
      ss = ss + parseInt(value);
      console.log(key, value);
    }
    this.setState({ isLog: true });
    this.setState({ sum: ss });
  };

  show = () => {
    this.setState({ isLog: true });
    console.log(this.state.sum);
  };

  render() {
    return (
      <div className="container">
        {this.state.isLog ? (
          <Result res={this.state.sum} />
        ) : (
          <div className="Body3">
            <form className="MHTest" id="MHTest" onSubmit={this.fun}>
              {this.state.data.map((item) => (
                <div>
                  <div className="header-Div">
                    <h1>Mental Health Test</h1>
                    <p>
                      Welcome, {this.props.kalu} Easily access your
                      Psychological Health by choosing the most appropiate
                      option.
                    </p>
                  </div>
                  <div className="space"></div>
                  <div className="Question">
                    <div key={item.id}>
                      {item.id}.{item.que}
                    </div>
                    <div className="Choice">
                      <input
                        type="radio"
                        name={"choice" + item.id}
                        className="question1"
                        value="4"
                      />
                      Very Unlikely
                    </div>
                    <div className="Choice">
                      <input
                        type="radio"
                        name={"choice" + item.id}
                        className="question1"
                        value="3"
                      />
                      Unlikely
                    </div>
                    <div className="Choice">
                      <input
                        type="radio"
                        name={"choice" + item.id}
                        className="question1"
                        value="2"
                      />
                      Likely
                    </div>
                    <div className="Choice">
                      <input
                        type="radio"
                        name={"choice" + item.id}
                        className="question1"
                        value="1"
                      />
                      Very Likely
                    </div>
                  </div>
                  <div className="space"></div>
                </div>
              ))}

              <div>
                <input
                  type="submit"
                  className="Submit_Response"
                  value="Submit Response"
                  id="Submit"
                  // onClick={this.show}
                />
              </div>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default MHTQ;
