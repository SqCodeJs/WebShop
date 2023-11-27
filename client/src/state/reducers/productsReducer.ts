import { ActionType } from '../action-types';
import { ProductsAction } from '../actions';
import { Item } from "../../../../shared/types/commonTypes";

interface State {
    items: Item[];
}

const initialState: State = {
    items: []
};

export const productsReducer = (state = initialState, action: ProductsAction) => {
    switch (action.type) {
        case ActionType.MOUNT:
            return { ...state, items: action.items };
        default:
            return state;
    }
};
