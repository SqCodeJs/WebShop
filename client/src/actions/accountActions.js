import axios from "axios";
import { SET_USER } from "./duck/types";
const SetCurrentUser = (user) => ({ type: SET_USER, user });
const handleAuthResponse = (res) => {
  return (dispatch) => {
    const accountState = {
      accessToken: res.data.access_token,
      name: res.data.name,
      mail: res.data.mail,
    };
    localStorage.setItem("access_token", res.data.access_token);

    dispatch(SetCurrentUser(accountState));
  };
};
export function loginAction(data) {
  return (dispatch) => {
    return axios({
      method: "post",
      withCredentials: true,
      url: "http://localhost:3001/login",
      data,
    }).then(
      (res) => {
        const { access_token } = res.data;
        const responseStatus = parseInt(res.status, 10);

        if (access_token && responseStatus < 400) {
          dispatch(handleAuthResponse(res));
        }
      },
      (error) => {
        dispatch({
          type: "SET_LOG_INFO",
          message: error.response.data.message,
        });
        return Promise.reject(error.response.status);
      }
    );
  };
}
