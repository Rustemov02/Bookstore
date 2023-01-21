import React from "react";

import { Route, Routes, NavLink } from 'react-router-dom'
import Sale from "./Sale";
import Featured from "./Featured";
import MostViewed from "./MostViewed";

import './Feature.css'

function Feature() {

    return (
        <div className=""  >

            <div className="feature-container" style={{ backgroundColor: '#fdffcd' }}>
                <h2 className="">Featured Books</h2>
                <div className="link">
                    <NavLink className='link_item' to='/' > On Sale</NavLink>
                    <NavLink className='link_item' to='/featured ' > Featured</NavLink>
                    <NavLink className='link_item' to='/most_viewed' > Most Viewed</NavLink>
                </div>
            </div>





            <Routes>
                <Route index path='/' element={<Sale />} />
                <Route path='/featured' element={<Featured />} />
                <Route path='/most_viewed' element={<MostViewed />} />
            </Routes>
        </div >
    )
}


export default Feature