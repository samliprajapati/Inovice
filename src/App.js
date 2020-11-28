import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "antd/dist/antd.css";
import Login from "./Components/Auth/Login";
import SignUp from "./Components/Auth/SignUp";
import PrivateRoute from "./PrivateRoute";
import MainApp from "./MainApp";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/signin" component={Login} />
        <Route exact path="/signUp" component={SignUp} />
        <PrivateRoute path="/" component={MainApp} />
      </Switch>
    </div>
  );
}

export default App;
