import React from "react";
import { Switch, Route } from "react-router-dom";
import "antd/dist/antd.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

function MainApp() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/home" component={Home} />
      </Switch>
    </div>
  );
}

export default MainApp;
