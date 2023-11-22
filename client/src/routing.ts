import React, { lazy } from "react";
const Home = lazy(() => import('./components/pages/home/Home'));
const Listing = lazy(() => import('./components/pages/listing/Listing'));
const Product = lazy(() => import('./components/pages/product/Product'));

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/listing',
        component: Listing,
    },
    {
        path: '/:path/:slug',
        component: Product,
    },
];

export default routes;