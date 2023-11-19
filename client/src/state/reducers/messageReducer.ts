import { ActionType } from '../action-types';
import { MessageAction } from '../actions';

const initialState = {
    loginInfo: ""
};

export const messageReducer = (state = initialState, action: MessageAction) => {
    switch (action.type) {
        case ActionType.SET_LOG_INFO:
            return { ...state, loginInfo: action.message };
        default:
            return state;
    }
};
