import React, { Suspense, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../state/actions/productsActions";
import { fetchGet } from "../helpers/functions";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { getDesignTokens } from '../setup/theme';
import routes from "../routing";
import Header from "./common/header/Header";
import Footer from "./common/Footer/Footer";
import { Mode } from "../types/types";

const GlobalStyle = createGlobalStyle`
 * {
    margin:0;
    padding:0;
    box-sizing:border-box;
 
   }	
`;

const App = () => {
    const [mode, setMode] = React.useState<Mode>('light');
    const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [
        mode,
    ]);
    const onThemeChange = (nextMode: Mode) => {
        setMode(nextMode);
    };
    const dispatch = useDispatch();
    const getPreferredTheme = () => {
        // Sprawdź preferencje trybu kolorów na poziomie systemu lub przeglądarki
        return window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light';
      };
    useEffect(() => {
        fetchGet("dataBase.json").then((response) => {
            dispatch(fetchProducts(response));
        });
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const handleChange = () => {
          setMode(getPreferredTheme());
        };
    
        mediaQuery.addEventListener('change', handleChange);
    
        return () => {
          mediaQuery.removeEventListener('change', handleChange);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
    <ThemeProvider theme={theme}>
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
        </ThemeProvider>

    );
};

export default App;
