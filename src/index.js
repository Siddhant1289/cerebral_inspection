import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
// import App from "./App";
// import MHTQ from "./MHTQ";
import Login from "./Login.css";
// import Dashboard from "./Dashboard";
// import Loginpage from "./Loginpage";
import reportWebVitals from "./reportWebVitals";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Login />
    {/* <Loginpage /> */}
    {/* <Dashboard /> */}
    {/* <MHTQ /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
