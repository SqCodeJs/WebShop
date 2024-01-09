import { ActionType } from "../action-types";
import { BasketItem } from "../../../../shared/types/commonTypes";

const addToBasket = (item: BasketItem) => ({
    type: ActionType.ADD_TO_BASKET,
    item,
});

const removeFromBasket = (id: number) => ({
    type: ActionType.ADD_TO_BASKET,
    id,
});

const updateBasket = (items: BasketItem[]) => ({
    type: ActionType.UPDATE_BASKET,
    items
})

export { addToBasket, removeFromBasket, updateBasket };
