import React from "react";
import { Item } from "../../../shared/types/commonTypes";

interface Props {
    basket: Item[];
}
const BasketList: React.FC<Props> = ({ basket }) => {
    const list = basket.map((e) => (<div key={e.id}>{e.price}</div>));

    return <>{list}</>;
};

export default BasketList;
