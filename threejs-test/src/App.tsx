import './App.css';
import * as React from 'react';

import Routes from "./routes/index";
import {CacheProvider} from "@emotion/react";
import {cacheRtl} from "datami-ui-kit/dist/esm/theme/Theme";
import {ThemeProvider} from "@mui/material/styles";
import {createTheme} from "datami-ui-kit";
import {CssBaseline} from "@mui/material";

function App() {

    return (
        <CacheProvider value={cacheRtl}>
            <ThemeProvider
                theme={createTheme(
                    ['samim', 'vazir', 'tahoma', 'Arial', 'sans-serif'],
                    '',
                    'rtl'
                )}
            >
                <CssBaseline/>
                <Routes/>
            </ThemeProvider>
        </CacheProvider>
    );
}

export default App;
