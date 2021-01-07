import * as api from "../api";

export const login = (email, password) => async (dispatch) => {
  try {
    const { data } = await api.loginUser(email, password);
    dispatch({
      type: "LOGIN_USER",
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const check = () => async (dispatch) => {
  try {
    const { data } = await api.checkUser();
    dispatch({
      type: "CHECK",
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
