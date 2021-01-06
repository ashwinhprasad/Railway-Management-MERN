export default (user = {}, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return action.payload;
    case "LOGOUT":
      return user;
    default:
      return user;
  }
};
