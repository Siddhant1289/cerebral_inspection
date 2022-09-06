import React, { Component } from "react";
import "./Result.css";
class Result extends Component {
  constructor(props) {
    super(props);

    this.state = {
      a: props.res,
    };
  }

  render() {
    return (
      <body>
        <div className="container">
          <div className="title">
            <h1 className="header">
              Results
              {(this.props.res / 112) * 100}%
            </h1>
          </div>
          <div className="slider">{/* <h1></h1> */}</div>
        </div>
        <div className="precautions">
          <h1> Precautions:</h1>
        </div>
      </body>
    );
  }
}
export default Result;
