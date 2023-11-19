import axios, { AxiosResponse } from "axios";
import { ActionType } from "../action-types";
import { AccountAction, MessageAction } from "./index";
import { User } from "../../../../shared/types/commonTypes";
import { Dispatch } from "redux";

const setCurrentUser = (user: User): AccountAction => ({
    type: ActionType.SET_USER,
    user,
});

const handleAuthResponse = (res: AxiosResponse<User>, dispatch: Dispatch<AccountAction | MessageAction>): void => {
    const user: User = {
        accessToken: res.data.accessToken,
        name: res.data.name,
        mail: res.data.mail,
    };

    localStorage.setItem("access_token", res.data.accessToken);

    dispatch(setCurrentUser(user));
};

export function loginAction(data: { mail: string; password: string; }) {
    return (dispatch: Dispatch<AccountAction | MessageAction>) => {
        return axios({
            method: "post",
            withCredentials: true,
            url: "http://localhost:3001/login",
            data,
        }).then(
            (res: AxiosResponse<unknown, any>) => {
                const typedRes = res as AxiosResponse<User>;

                const { accessToken } = typedRes.data;

                if (accessToken && typedRes.status === 200) {
                    handleAuthResponse(typedRes, dispatch);
                }
            },
            (error) => {
                dispatch({
                    type: ActionType.SET_LOG_INFO,
                    message: error.response?.data?.message || "An error occurred",
                });
                return Promise.reject(error.response?.status || 500);
            }
        );
    };
}
