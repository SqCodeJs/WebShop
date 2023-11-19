import { ActionType } from "../action-types/index";
import { User, Item } from "../../../../shared/types/commonTypes";

interface SetUser {
    type: ActionType.SET_USER;
    user: User;
}

interface SetLogInfo {
    type: ActionType.SET_LOG_INFO;
    message: string;
}

interface AddToBasket {
    type: ActionType.ADD_TO_BASKET;
    item: Item;
}

interface GetAllProducts {
    type: ActionType.MOUNT;
    products: Item[];
}

interface ToggleFlag {
    type: ActionType.TOGGLE;
    flag: string;
}

export type AccountAction = SetUser;
export type MessageAction = SetLogInfo;
export type BasketAction = AddToBasket;
export type ProductsAction = GetAllProducts;
export type FlagsAction = ToggleFlag;