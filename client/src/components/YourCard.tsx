import React from "react";
import { Item } from "../../../shared/types/commonTypes";

interface Props {
    basket: Item[];
    setBasket: (basket: Item[]) => void;
    render: ({ removeItem, props }: { removeItem: (id: number) => void; props: any; }) => JSX.Element;
}

const YourCard: React.FC<Props> = ({ basket, setBasket, render, ...props }) => {
    const removeItem = (id: number) => {
        setBasket(basket.filter((e) => e.id !== id));
    };

    return render({ removeItem, ...props });
};

export default YourCard;

