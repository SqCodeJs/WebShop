import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { createGlobalStyle } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { dbActions } from "../actions/dbActions";
import { fetchGet } from "../helpers/functions";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
const GlobalStyle = createGlobalStyle`
 * {
    margin:0;
    padding:0;
    box-sizing:border-box;
 
   }	
`;

function App() {
  const DB = useSelector((state) => state.db.products);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchGet("dataBase.json").then((response) => {
      dispatch(dbActions.mount(response));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Router>
      <GlobalStyle />
      {DB && <Home />}
    </Router>
  );
}

App.propTypes = {
  DB: PropTypes.array,
  basket: PropTypes.array,
};
export default App;
