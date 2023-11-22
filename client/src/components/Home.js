import React from "react";
import { device } from "../utils/device";
import styled from "styled-components";
import PropTypes from "prop-types";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import Register from "./Register";
import Columns from "./Columns";
import Login from "./Login";
import Header from "./common/header/Header";
import SearchBar from "./common/header/SearchBar";
import Main from "./Main";
import Gallery from "./Gallery";
import LastAdd from "./LastAdd";
import Newsletter from "./Newsletter";
import Footer from "./common/Footer/Footer";
import YourCard from "./YourCard";
import ProductsLibrary from "./ProductsLibrary";
import ErrorPage from "./ErrorPage";
import SingleProductPage from "./SingleProductPage";
import MainCard from "./MainCard";

import Hamburger from "./Hamburger";

import UserPanel from "./UserPanel";
const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapp = styled.div`
  width: 80%;
  margin: 0 auto;

  flex: 1;
  @media ${device.mobileS} {
    width: 100%;
  }
  @media ${device.tablet} {
    width: 95%;
  }
  @media ${device.laptop} {
    width: 90%;
  }
  @media ${device.laptopL} {
    width: 100%;
  }
`;
const HeaderWrapp = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;
const Home = () => {
    return (
        <Router>
            <AppWrapper>
                <HeaderWrapp>
                    {/* <Header />
                    <SearchBar /> */}
                </HeaderWrapp>
                <Wrapp>
                    <Switch>
                        <Route
                            path="/"
                            exact
                            render={() => (
                                <>
                                    {/* <Hamburger />
                                    <Main />

                                    <Gallery />
                                    <Columns />
                                    <Newsletter />
                                    <LastAdd /> */}
                                </>
                            )}
                        />
                        {/* <Route
                            path="/userpanel"
                            render={() => (
                                <UserPanel
                                    isAuthenticated={isAuthenticated}
                                    accessToken={accessToken}
                                />
                            )}
                        />
                        <Route
                            path="/login"
                            render={() => <Login isAuthenticated={isAuthenticated} />}
                        />
                        <Route path="/register" exact render={() => <Register />} />

                        <Route
                            path="/card"
                            render={() => <YourCard basket={basket} render={MainCard} />}
                        /> */}

                        <Route path="/:path" exact children={() => <ProductsLibrary />} />
                        <Route path="/:path/:slug" children={<SingleProductPage />} />
                        <Route component={ErrorPage} />
                    </Switch>
                </Wrapp>
                <Footer />
            </AppWrapper>
        </Router>
    );
};

Home.propTypes = {
    DB: PropTypes.array,
    basket: PropTypes.array,
    setBasket: PropTypes.func,
};

export default Home;
