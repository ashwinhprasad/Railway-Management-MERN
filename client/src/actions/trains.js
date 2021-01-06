import * as api from "../api";

export const getTrains = () => async (dispatch) => {
  try {
    const { data } = await api.getTrains();
    dispatch({
      type: "FETCH_ALL",
      payload: data.trains,
    });
  } catch (error) {
    console.log(error.message);
  }
};
