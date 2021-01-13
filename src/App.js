import React from 'react';
import {ThemeProvider} from 'styled-components';

import {useDarkMode} from './components/style/useDarkMode';
import {lightTheme, darkTheme} from './components/style/theme';
import {GlobalStyles} from './components/style/global';

// Components
import Toggle from './components/features/Toggle';
import Navbar from "./components/features/Navbar";
import Contact from "./components/sections/Contact";
import About from "./components/sections/About";
import Routes from "./components/Route";
import MediaCard from "./components/sections/Project";
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
