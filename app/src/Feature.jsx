import React from "react";

import { Route, Routes, NavLink } from 'react-router-dom'
import Advice from "./Advice";
import Business from "./Business";
import Fiction from './Fiction'

import './Feature.css'

function Feature() {
 
    return (
        <div className=""  >

            <div className="feature-container" style={{backgroundColor : '#fdffcd'}}>
                <h2 className="">Featured Books</h2>
                <div className="link">
                <NavLink className='link_item'  to='/ ' > Business page</NavLink>
                <NavLink className='link_item'  to='/advice' > Advice page</NavLink>
                <NavLink className='link_item'  to='/fiction' > Fiction page</NavLink>
                </div>
            </div>





            <Routes>
                <Route path='/advice' element={<Advice />} />
                <Route path='/' element={<Business />} />
                <Route path='/fiction' element={<Fiction />} />
            </Routes>
        </div >
    )
}


export default Feature