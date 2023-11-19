import { ActionType } from "../action-types";
import { FlagsAction } from "./index";

export const toggleFlag = (flag: string): FlagsAction => ({
    type: ActionType.TOGGLE,
    flag,
});
