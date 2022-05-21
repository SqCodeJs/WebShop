import { ADD_TO_BASKET } from "./duck/types.js";

const addToBasket = (item) => ({
  type: ADD_TO_BASKET,
  item,
});
export { addToBasket };
