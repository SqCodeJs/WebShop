export interface User {
    id: number
    name: string;
    mail: string;
}

export interface AuthenticatedUser extends User {
    accessToken: string;
}

export interface Account {
    user: AuthenticatedUser | null;
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
    stock?: number;
    sold?: number;
}
export interface BasketItem extends Item {
    worth: number;
    quantity: number;
}
export type PartialBasketItem = Pick<BasketItem, 'id' | 'quantity' | 'worth'>