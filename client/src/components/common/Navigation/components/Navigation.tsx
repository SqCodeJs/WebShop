import "typeface-roboto";
import React from "react";
import {
    faLaptop, faBlender, faHeadphones, faMobileAlt, faGamepad, faClock, faCamera, IconDefinition

} from "@fortawesome/free-solid-svg-icons";
interface NavigationList {
    name: string;
    path: string;
    category: string;
    description: string;
    icon: IconDefinition;
    exact?: boolean;
}

interface Props {
    render: (props: { nav: NavigationList[]; }) => React.ReactNode;
}

const Navigation: React.FC<Props> = (props) => {
    const navList: NavigationList[] = [
        {
            name: "Laptopy i Akcesoria",
            path: "/laptops",
            category: "laptops",
            description: "Dell, HP, Macbook, Samsung...",
            icon: faLaptop,
            exact: true,
        },
        {
            name: "Elektronika",
            path: "/electronic",
            category: "electronic",
            description: "Telewizory, Agd, Odkurzacze...",
            icon: faBlender,
        },
        {
            name: "Audio",
            path: "/audio",
            category: "audio",
            description: "Sluchawki, Odtwarzacze, Glosniki...",
            icon: faHeadphones,
        },
        {
            name: "Telefony",
            path: "/phones",
            category: "phones",
            description: "Telefony, Ladowarki, Gadżety...",
            icon: faMobileAlt,
        },
        {
            name: "Konsole i Gry",
            path: "/console",
            category: "console",
            description: "Playstation, Xbox...",
            icon: faGamepad,
        },
        {
            name: "Zegarki",
            path: "/watches",
            category: "watches",
            description: "Koperty, Paski...",
            icon: faClock,
        },
        {
            name: "Aparaty",
            path: "/cameras",
            category: "cameras",
            description: "Kamery, Obiektywy, Akcesoria...",
            icon: faCamera,
        },
    ];

    return <>{props.render({ nav: navList })}</>;
};

export default Navigation;
