import axios from "axios";

const url = "http://localhost:5000/api/";

// gets all the trains
export const getTrains = async () => {
  return await axios.get(url + "train");
};

export const loginUser = async (email, password) => {
  return await axios.post(
    url + "auth/login",
    {
      email,
      password,
    },
    {
      withCredentials: true,
    }
  );
};

export const logoutUser = async () => {
  return await axios.get(url + "auth/logout", {
    withCredentials: true,
  });
};

export const checkUser = async () => {
  return await axios.get(url + "user/return/current", {
    withCredentials: true,
  });
};

export const createBook = async (user_id, train_id) => {
  return await axios.post(url + "book", {
    user_id,
    train_id,
  });
};

export const getBooks = async () => {
  return await axios.get(url + "book");
};

export const getTrain = async (id) => {
  const { data } = await axios.get(url + `train/${id}`);
  return data;
};

export const deleteBook = async (id) => {
  const { data } = await axios.delete(url + `book/${id}`);
  return data;
};

export const register = async (name, email, password, phone) => {
  await axios.post(url + `user`, {
    name,
    email,
    password,
    phone,
    is_admin: false,
  });
};

export const createTrain = async (
  name,
  destination,
  startpoint,
  startDate,
  reachDate,
  price
) => {
  await axios.post(url + "train", {
    name,
    destination,
    startpoint,
    startDate,
    reachDate,
    price,
  });
};

export const deleteTrain = async (id) => {
  const { data } = await axios.delete(url + "train", {
    data: { id },
  });
  console.log(data);
};
