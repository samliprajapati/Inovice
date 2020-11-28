import * as types from "./AuthActionType";

import { message } from "antd";

export const login = (data, cb) => (dispatch, getState) => {
  debugger;
  const { userDetails } = getState("auth").auth;
  console.log(userDetails);
  console.log(data);
  dispatch({
    type: types.LOGIN_REQUEST,
  });
  let loggedInd = false;

  userDetails.forEach((item) => {
    debugger;
    if (item.emailId === data.emailId && item.password === data.password) {
      loggedInd = true;
    }
  });
  console.log(loggedInd);

  if (loggedInd) {
    dispatch({
      type: types.LOGIN_SUCCESS,
      payload: data,
    });
    cb && cb("success");
  } else {
    dispatch({
      type: types.LOGIN_FAILURE,
    });
    cb && cb("failure");
  }
};

export const register = (data, cb) => (dispatch) => {
  console.log("Register Data...........", data);
  dispatch({
    type: types.REGISTER_REQUEST,
  });
  if (data.emailId && data.password) {
    dispatch({
      type: types.REGISTER_SUCCESS,
      payload: data,
    });
    cb && cb("Success");
  } else {
    dispatch({
      type: types.REGISTER_FAILURE,
      // payload: data,
    });
    cb && cb("Failure");
  }
};

export const logout = (history) => (dispatch) => {
  dispatch({ type: types.LOGOUT });
  history.push("/signin");
  message.success("You have successfully logged out. See you soon.");
};
