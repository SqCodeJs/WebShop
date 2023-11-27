import "typeface-roboto";
import React from "react";
import {
    laptop,
    electronics,
    phone,
    game,
    audio,
    watch,
    camera,
} from "../../../../utils/icon";
import { Item } from "../../../../../../shared/types/commonTypes";

interface NavigationList {
    name: string;
    path: string;
    category: string;
    description: string;
    icon: React.JSX.Element;
    exact?: boolean;
}

interface Props {
    render: (props: { nav: NavigationList[], DB: Item[]; }) => React.ReactNode;
}

const Navigation: React.FC<Props> = (props) => {
    const navList: NavigationList[] = [
        {
            name: "Laptopy i Akcesoria",
            path: "/laptops",
            category: "laptops",
            description: "Dell, HP, Macbook, Samsung...",
            icon: laptop,
            exact: true,
        },
        {
            name: "Elektronika",
            path: "/electronic",
            category: "electronic",
            description: "Telewizory, Agd, Odkurzacze...",
            icon: electronics,
        },
        {
            name: "Audio",
            path: "/audio",
            category: "audio",
            description: "Sluchawki, Odtwarzacze, Glosniki...",
            icon: audio,
        },
        {
            name: "Telefony",
            path: "/phones",
            category: "phones",
            description: "Telefony, Ladowarki, Gadżety...",
            icon: phone,
        },
        {
            name: "Konsole i Gry",
            path: "/console",
            category: "console",
            description: "Playstation, Xbox...",
            icon: game,
        },
        {
            name: "Zegarki",
            path: "/watches",
            category: "watches",
            description: "Koperty, Paski...",
            icon: watch,
        },
        {
            name: "Aparaty",
            path: "/cameras",
            category: "cameras",
            description: "Kamery, Obiektywy, Akcesoria...",
            icon: camera,
        },
    ];

    return <>{props.render({ nav: navList })}</>;
};

export default Navigation;
