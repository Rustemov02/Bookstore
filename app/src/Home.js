import React from 'react'

import Slide from './List';
import Bestselling from './Bestselling';
import Categories from './Categories';
import Feature from './Feature';
import Release from './Releases';
import Authors from './Authors';
import Newsletter from './Newsletter';
import Footer from './Footer';
import { Stack } from '@mui/material';

export default function Home() {


    return (
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
    )
}