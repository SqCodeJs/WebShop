import { ActionType } from "../action-types";
import { ProductsAction } from "./index";
import { Item } from "../../../../shared/types/commonTypes";

export const fetchProducts = (products: Item[]): ProductsAction => ({ type: ActionType.MOUNT, products });
