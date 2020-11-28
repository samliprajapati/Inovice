import React from "react";
import "./auth.css";
import signinimage from "../../Assets/images/signin-image.webp";
import LoginForm from "./LoginForm";
import { Link, withRouter } from "react-router-dom";

function Login() {
  return (
    <div>
      <div className="main">
        <div className="left">
          <div className="image">
            <img src={signinimage} alt="loginimage" />
            <Link to="/signup">
              {" "}
              <div style={{ marginTop: "10px" }}>Create an account</div>
            </Link>{" "}
          </div>
        </div>
        <div className="right">
          <div className="header">Sign In</div>
          <div className="form_wrapper">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Login);
