import React, { Suspense, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../state/actions/productsActions";
import { fetchGet } from "../helpers/functions";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "../routing";
import Header from "./common/header/Header";
import Footer from "./common/Footer/Footer";
const GlobalStyle = createGlobalStyle`
 * {
    margin:0;
    padding:0;
    box-sizing:border-box;
 
   }	
`;

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        fetchGet("dataBase.json").then((response) => {
            dispatch(fetchProducts(response));
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Router>
            <GlobalStyle />
            <Suspense fallback={<div>Loading..</div>}>
                <Header />
                <Routes>
                    {routes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            element={<route.component/>}
                        />
                    ))}
                </Routes>
                <Footer />
            </Suspense>
        </Router>
    );
};

export default App;
