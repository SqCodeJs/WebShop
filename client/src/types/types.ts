export interface NavigationList {
    name: string;
    path: string;
    category: string;
    description: string;
    icon: React.JSX.Element;
    exact?: boolean;
}

export interface UserValiadationData {
    name: string,
    lastName: string,
    mail: string,
    password: string,
    confirmPassword: string,
}