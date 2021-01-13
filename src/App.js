import React from 'react';
import {ThemeProvider} from 'styled-components';

import {useDarkMode} from './useDarkMode';
import {lightTheme, darkTheme} from './theme';
import {GlobalStyles} from './global';

// Components
import Toggle from './components/Toggle';
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import About from "./components/About";
import Routes from "./components/Route";
import MediaCard from "./components/Project";
import {BrowserRouter} from "react-router-dom";
import {Button} from "react-bootstrap";


function App() {
    const [theme, toggleTheme, componentMounted] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    if (!componentMounted) {
        return <div/>
    }
    ;

    return (
        <div>
            <BrowserRouter>
                <ThemeProvider theme={themeMode}>
                    <>
                        <GlobalStyles/>
                        <Navbar/>
                        <About/>
                        <Contact/>
                        <MediaCard />

                    </>
                </ThemeProvider>
            </BrowserRouter>
        </div>

    );
};

export default App;
