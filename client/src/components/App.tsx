import React, { Suspense, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../state/actions/productsActions';
import { fetchGet, getPreferredTheme } from '../helpers/functions';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { getDesignTokens } from '../setup/theme';
import routes from '../routing';
import Header from './common/Header/Header';
import Footer from './common/Footer/Footer';
import { Mode } from '../types/types';
import Newsletter from './Newsletter';
import LastAdd from './LastAdd';
import './App.css'
import { Main } from '../utils/styledComponents';

const GlobalStyle = createGlobalStyle`
 * {
    margin:0;
    padding:0;
    box-sizing:border-box;
   }	
`;

const App = () => {
    const [mode, setMode] = React.useState<Mode>('light');
    const dispatch = useDispatch();
    const theme = React.useMemo(
        () => createTheme(getDesignTokens(mode)),
        [mode],
    );
    
    const onThemeChange = (nextMode: Mode) => {
        setMode(nextMode);
    };

    useEffect(() => {
        const getAllProducts = async () => {
            try {
                const products = await fetchGet(
                    'http://localhost:3001/products/all',
                );

                dispatch(fetchProducts(products));
            } catch (e) {
                console.log(e);
            }
        };

        getAllProducts();
    }, [dispatch]);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = () => {
            setMode(getPreferredTheme());
        };
        mediaQuery.addEventListener('change', handleChange);

        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <GlobalStyle />
                <Suspense fallback={<div>Loading..</div>}>
                    <Header />
                    <Main>
                        <Routes>
                            {routes.map((route, index) => (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={<route.component />}
                                />
                            ))}
                        </Routes>
                    </Main>
                    <Newsletter />
                    <LastAdd />
                    <Footer />
                </Suspense>
            </Router>
        </ThemeProvider>
    );
};

export default App;
