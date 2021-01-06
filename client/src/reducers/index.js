import { combineReducers } from "redux";
import trains from "./trains";
import user from "./user";

export default combineReducers({
  trains,
  user,
});
