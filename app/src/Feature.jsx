import React from "react";

import { Route, Routes, NavLink } from 'react-router-dom'
import Advice from "./Advice";
import Business from "./Business";
import Fiction from './Fiction'

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Feature() {

    const [value, setValue] = React.useState(0);
    return (
        <div className="border border-warning">
            <h2 className="border border-warning">Featured Books</h2>
            <NavLink to='/' > Advice page</NavLink>
            <NavLink to='/business' > Business page</NavLink>
            <NavLink to='/fiction' > Fiction page</NavLink>

           



            <Routes>
                <Route path='/' element={<Advice />} />
                <Route path='/business' element={<Business />} />
                <Route path='/fiction' element={<Fiction />} />
            </Routes>
        </div >
    )
}


export default Feature