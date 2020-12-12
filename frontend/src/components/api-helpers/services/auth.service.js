import { DB_URL as API_Url } from "../api-constants";
import axios from "axios";

class AuthService {
  signin(email, password) {
    return axios
      .post(API_Url + "/user/singin", { email, password })
      .then(({ data }) => {
        if (data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return data;
      });
  }
  signout() {
    localStorage.removeItem("user");
  }
  signup(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password,
    });
  }
}

export default new AuthService();