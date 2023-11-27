import { ActionType } from "../action-types";
import { ProductsAction } from "./index";
import { Item } from "../../../../shared/types/commonTypes";

export const fetchProducts = (items: Item[]): ProductsAction => ({ type: ActionType.MOUNT, items });
