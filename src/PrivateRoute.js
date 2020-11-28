import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

class PrivateRoute extends React.Component {
  render() {
    const { component: Component, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={(props) =>
          this.props.loggedIn !== null ? (
            <Component {...props} />
          ) : (
            <Redirect to="/signin" />
          )
        }
      />
    );
  }
}

const mapStateToProps = ({ auth }) => ({ loggedIn: auth.loggedIn });
const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
