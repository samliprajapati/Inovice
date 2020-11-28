import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { logout } from "./Auth/AuthAction";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();
class Navbar extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          padding: 10,

          backgroundColor: "black",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",

            width: "50%",
            color: "white",
          }}
        >
          <Link to="/home" style={{ color: "white" }}>
            {" "}
            <div style={{ marginLeft: "30px" }}>Home</div>
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",

            width: "50%",
            color: "white",
          }}
        >
          <div
            style={{ marginRight: "30px", cursor: "pointer" }}
            onClick={() => this.props.logout(history)}
          >
            Logout
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ auth }) => ({ loggedIn: auth.loggedIn });
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ logout }, dispatch);
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
