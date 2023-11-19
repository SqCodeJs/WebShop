export interface NavigationList {
    name: string;
    path: string;
    category: string;
    description: string;
    icon: React.JSX.Element;
    exact?: boolean;
  }