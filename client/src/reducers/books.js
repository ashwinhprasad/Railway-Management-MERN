export default (books = [], action) => {
  switch (action.type) {
    case "GET_BOOKS":
      return action.payload;
    default:
      return books;
  }
};
