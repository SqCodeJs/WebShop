import { ActionType } from "../action-types/index";
import { User, Item } from "../../../../shared/types/commonTypes";
import { BasketItem } from "../../types/types";

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
    item: BasketItem;
}

interface RemoveFromBasket {
    type: ActionType.REMOVE_FROM_BASKET;
    id: number;
}

interface updateBasket {
    type: ActionType.UPDATE_BASKET;
    items: BasketItem[];
}

interface GetAllProducts {
    type: ActionType.MOUNT;
    items: Item[];
}

interface ToggleFlag {
    type: ActionType.TOGGLE;
    flag: string;
}

export type AccountAction = SetUser;
export type MessageAction = SetLogInfo;
export type BasketAction = AddToBasket | RemoveFromBasket | updateBasket;
export type ProductsAction = GetAllProducts;
export type FlagsAction = ToggleFlag;