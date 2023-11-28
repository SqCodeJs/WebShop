export interface User {
    accessToken: string;
    name: string;
    mail: string;
}

export interface Account {
    user: User | null;
    isAuthenticated: boolean;
}

export interface Item {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    color: string;
    tag: string;
}
