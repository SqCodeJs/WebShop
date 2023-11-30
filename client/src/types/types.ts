import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export type Mode = 'light' | 'dark';

export interface NavigationList {
    name: string;
    path: string;
    category: string;
    description: string;
    icon: IconDefinition;
    exact?: boolean;
}

export interface UserValiadationData {
    name: string,
    lastName: string,
    mail: string,
    password: string,
    confirmPassword: string,
}