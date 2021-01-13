import { combineReducers } from "redux";
import trains from "./trains";
import user from "./user";
import books from "./books";

export default combineReducers({
  trains,
  user,
  books,
});
