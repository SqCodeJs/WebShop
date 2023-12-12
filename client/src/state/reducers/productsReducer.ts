import { ActionType } from '../action-types';
import { ProductsAction } from '../actions';
import { Item } from '../../../../shared/types/commonTypes';

interface State {
    items: Item[];
    isLoading: boolean;
}

const initialState: State = {
    items: [],
    isLoading: true,
};

export const productsReducer = (
    state = initialState,
    action: ProductsAction,
) => {
    switch (action.type) {
        case ActionType.MOUNT:
            return { ...state, items: action.items };
        case ActionType.TOGGLE_LOADING:
            return { ...state, isLoading: action.isLoading };
        default:
            return state;
    }
};
