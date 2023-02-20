import React from 'react'

import Slide from './List';
import Bestselling from './Bestselling';
import Categories from './Categories';
import Feature from './Feature';
import Release from './Releases';
import Authors from './Authors';
import Newsletter from './Newsletter';
import Footer from './Footer';
import { createTheme, CssBaseline, Stack, ThemeProvider } from '@mui/material';

export default function Home() {


    const theme = createTheme({
        palette : {
            mode : 'light'
        }
    })
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Stack>
                <Slide />
                <Categories />
                <Bestselling />
                <Feature />
                <Release />
                <Authors />
                <Newsletter />
                <Footer />
            </Stack>
        </ThemeProvider>
    )
}