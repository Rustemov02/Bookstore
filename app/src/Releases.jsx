import React from "react";

import { Route, Routes, NavLink } from 'react-router-dom'
import Advice from "./Advice";
import Business from "./Business";
import Fiction from './Fiction'
import Romance from "./Romance";

import './Release.css'

function Release() {
    return (
        <div className="mt-5 p-4">
            <div className="p-2 m-1 border d-flex flex-row justify-content-between align-items-center">
                <h2 >New Releases</h2>
                <div className="link" >
                    <NavLink className='link_item' to='/featured/business' > Business</NavLink>
                    <NavLink className='link_item' to='/featured/advice ' > Advice</NavLink>
                    <NavLink className='link_item' to='/featured/fiction' > Fiction</NavLink> 
                    <NavLink className='link_item' to='/featured/romance' > Romance</NavLink>
                </div>
            </div>


            <Routes>
                <Route index path='/featured/business' element={<Business />} />
                <Route path='/featured/advice' element={<Advice />} />
                <Route path='/featured/fiction' element={<Fiction />} />
                <Route path='/featured/romance' element={<Romance />} />
            </Routes>


        </div>
    )
}

export default Release