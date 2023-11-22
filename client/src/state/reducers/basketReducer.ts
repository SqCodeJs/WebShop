import { ActionType } from '../action-types';
import { BasketAction } from '../actions';
import { Item } from "../../../../shared/types/commonTypes";
import { Reducer } from 'redux';

interface State {
    items: Item[];
}

const initialState: State = {
    items: [],
};

export const basketReducer: Reducer<State, BasketAction> = (state = initialState, action: BasketAction) => {
    switch (action.type) {
        case ActionType.ADD_TO_BASKET:
            return {...state.items, items: [...state.items, action.item]};
        default:
            return state;
    }
};
