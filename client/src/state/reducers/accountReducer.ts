import { ActionType } from '../action-types';
import { AccountAction } from '../actions';
import { Account } from "../../../../shared/types/commonTypes";

const initialState: Account = {
    isAuthenticated: false,
    user: null,
};

export const accountReducer = (
    state = initialState,
    action: AccountAction,
) => {
    switch (action.type) {
        case ActionType.SET_USER:
            return { user: action.user, isAuthenticated: true };
        default:
            return state;
    }
};
