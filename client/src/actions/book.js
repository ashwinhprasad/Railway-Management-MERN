import * as api from "../api";
export const getBooks = () => async (dispatch) => {
  try {
    const { data } = await api.getBooks();
    dispatch({
      type: "GET_BOOKS",
      payload: data.books,
    });
  } catch (error) {
    console.log(error);
  }
};
