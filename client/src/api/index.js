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
