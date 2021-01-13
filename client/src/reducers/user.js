export default (user = {}, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return action.payload;
    case "CHECK":
      return action.payload;
    case "LOGOUT":
      return action.payload;
    default:
      return user;
  }
};
