import { ActionType } from '../action-types';
import { BasketAction } from '../actions';
import { Reducer } from 'redux'
import { BasketItem } from '../../types/types';

interface State {
    items: BasketItem[];
}

const initialState: State = {
    items: [],
};

export const basketReducer: Reducer<State, BasketAction> = (state = initialState, action: BasketAction) => {
    switch (action.type) {
        case ActionType.ADD_TO_BASKET:
            return { ...state, items: [...state.items, action.item] };
        case ActionType.REMOVE_FROM_BASKET:
            return { ...state, items: state.items.filter(item => item.id !== action.id) };
            case ActionType.UPDATE_BASKET:
                return { ...state, items: action.items };
        default:
            return state;
    }
};
