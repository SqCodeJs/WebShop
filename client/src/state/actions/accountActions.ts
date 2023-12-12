import axios, { AxiosError, AxiosResponse } from "axios";
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

    dispatch(setCurrentUser(user));
};

export function loginAction(data: { mail: string; password: string; }) {
    return async (dispatch: Dispatch<AccountAction | MessageAction>): Promise<void> => {
        try {
            const response = await axios.post("http://localhost:3001/login", data, { withCredentials: true });
            const typedRes = response as AxiosResponse<User>;
            const { accessToken } = typedRes.data;

            if (accessToken && typedRes.status === 200) {
                handleAuthResponse(typedRes, dispatch);
            } else {
                throw new Error("Login failed");
            }
        } catch (error: any) {
            const axiosError = error as AxiosError;
            const responseError = axiosError.response?.data;

            if (responseError && typeof responseError === 'object' && 'message' in responseError) {
                dispatch({
                    type: ActionType.SET_LOG_INFO,
                    message: responseError.message as string,
                });
            }
        }
    };
}

