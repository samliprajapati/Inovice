import { combineReducers } from "redux";
import { authReducer } from "../Components/Auth/AuthReducer";
import { homeReducer } from "../Components/HomeReducer";

/**
 *  All of application reducers import goes here...
 */

const appReducer = combineReducers({
  auth: authReducer,
  home: homeReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT") {
    sessionStorage.clear();
    state = undefined;
  }
  return appReducer(state, action);
};
export default rootReducer;
