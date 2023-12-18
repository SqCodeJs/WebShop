import { lazy } from "react";
import RequireAuth from "./auth/RequireAuth";
const Home = lazy(() => import('./components/pages/home/Home'));
const Listing = lazy(() => import('./components/pages/listing/Listing'));
const Product = lazy(() => import('./components/pages/product/Product'));
const Register = lazy(() => import('./components/Register'));
const Login = lazy(() => import('./components/Login'));
const Card = lazy(() => import('./components/MainCard'));
const Error = lazy(() => import('./components/ErrorPage'));
const UserPanel = lazy(() => import('./components/UserPanel'));

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/:path/:slug',
        component: Product,
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/card',
        component: Card
    }, {
        path: '/:path',
        component: Listing,
    },
    {
        path: '/userpanel',
        component: RequireAuth(UserPanel)
    },
    {
        path: '/temp',
        component: Error
    },
];

export default routes;
