import axios, { AxiosError, AxiosResponse } from "axios";
import { ActionType } from "../action-types";
import { AccountAction, MessageAction } from "./index";
import { User } from "../../../../shared/types/commonTypes";
import { Dispatch } from "redux";
import { fetchPost } from "../../helpers/functions";

export const setCurrentUser = (user: User): AccountAction => ({
    type: ActionType.SET_USER,
    user,
});

export const logoutUser = (): AccountAction => ({
    type: ActionType.LOGOUT_USER,
});

const handleAuthResponse = (res: AxiosResponse<User>, dispatch: Dispatch<AccountAction | MessageAction>): void => {
    const user: User = {
        accessToken: res.data.accessToken,
        name: res.data.name,
        mail: res.data.mail,
        id: res.data.id
    };

    dispatch(setCurrentUser(user));
};


export function logoutAction() {
    return (dispatch: Dispatch<AccountAction>) => dispatch(logoutUser())
}

export function loginAction(data: { mail: string; password: string; }) {
    return async (dispatch: Dispatch<AccountAction | MessageAction>): Promise<void> => {
        try {
            const response = await axios.post("http://localhost:3001/user/login", data, { withCredentials: true });
            const typedRes = response as AxiosResponse<User>;
            const { accessToken } = typedRes.data;

            if (typedRes.status === 200) {
                handleAuthResponse(typedRes, dispatch);
            } else {
                throw new Error("Login failed");
            }
        } catch (error: unknown) {
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
export function removeUserAction(data: {id: number} ) {
    return async (dispatch: Dispatch<AccountAction | MessageAction>): Promise<void> => {
        try {
            const response = await fetchPost("http://localhost:3001/user/remove",data);
            if (!response.ok) {
                throw new Error("blad");
            }

            dispatch(logoutUser())
        } catch (error: unknown) {
            const responseError = error.response?.data;

            if (responseError && typeof responseError === 'object' && 'message' in responseError) {
              dispatch({
                type: ActionType.SET_LOG_INFO,
                message: responseError.message as string,
              });
            } 
        }
    }
}