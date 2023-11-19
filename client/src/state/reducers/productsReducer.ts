import { ActionType } from '../action-types';
import { ProductsAction } from '../actions';
import { Item } from "../../../../shared/types/commonTypes";

interface State {
    products: Item[];
}

const initialState: State = {
    products: []
};

export const productsReducer = (state = initialState, action: ProductsAction) => {
    switch (action.type) {
        case ActionType.MOUNT:
            return { ...state, products: action.products };
        default:
            return state;
    }
};
