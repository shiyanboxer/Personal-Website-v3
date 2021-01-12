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

import {BrowserRouter} from "react-router-dom";


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
                        <Navbar />
                        {/*<About/>*/}
                        {/*<Toggle theme={theme} toggleTheme={toggleTheme}/>*/}
                        {/*<Contact/>*/}

                    </>
                </ThemeProvider>
            </BrowserRouter>
        </div>

    );
};

export default App;
