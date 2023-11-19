import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { createGlobalStyle } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../state/actions/productsActions";
import { fetchGet } from "../helpers/functions";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";
const GlobalStyle = createGlobalStyle`
 * {
    margin:0;
    padding:0;
    box-sizing:border-box;
 
   }	
`;

function App() {


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
            <div>elo</div>
            <Home />
        </Router>
    );
}

App.propTypes = {
    DB: PropTypes.array,
    basket: PropTypes.array,
};
export default App;
