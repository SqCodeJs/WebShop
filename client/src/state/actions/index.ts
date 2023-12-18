import { ActionType } from '../action-types/index';
import { User, Item } from '../../../../shared/types/commonTypes';
import { BasketItem } from '../../types/types';

interface SetUser {
    type: ActionType.SET_USER;
    user: User;
}

interface LogoutUser {
    type: ActionType.LOGOUT_USER;
}

interface SetLogInfo {
    type: ActionType.SET_LOG_INFO;
    message: string;
}

interface AddToBasket {
    type: ActionType.ADD_TO_BASKET;
    item: BasketItem;
}

interface RemoveFromBasket {
    type: ActionType.REMOVE_FROM_BASKET;
    id: number;
}

interface UpdateBasket {
    type: ActionType.UPDATE_BASKET;
    items: BasketItem[];
}

interface GetAllProducts {
    type: ActionType.MOUNT;
    items: Item[];
}

interface SetLoadingProducts {
    type: ActionType.TOGGLE_LOADING;
    isLoading: boolean;
}

interface ToggleFlag {
    type: ActionType.TOGGLE;
    flag: string;
}

export type AccountAction = SetUser | LogoutUser;
export type MessageAction = SetLogInfo;
export type BasketAction = AddToBasket | RemoveFromBasket | UpdateBasket;
export type ProductsAction = GetAllProducts | SetLoadingProducts;
export type FlagsAction = ToggleFlag;
