import { ActionType } from '../action-types';
import { FlagsAction } from '../actions';

interface State {
    navigation: boolean;
    search: boolean;
    [key: string]: boolean;
}

const initialState: State = {
    navigation: false,
    search: false,
};

export const flagsReducer = (state = initialState, action: FlagsAction) => {
    switch (action.type) {
        case ActionType.TOGGLE:
            return { ...state, [action.flag]: !state[action.flag] };
        default:
            return state;
    }
};
