import { ActionType } from "../action-types";
import { Item } from "../../../../shared/types/commonTypes";

const addToBasket = (item: Item) => ({
    type: ActionType.ADD_TO_BASKET,
    item,
});

export { addToBasket };
