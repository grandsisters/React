import axios from "axios";

export const signup = (params) => {
  axios.post("http://localhost:8080/user", params);
};
