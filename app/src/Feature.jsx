import React from "react";

import { Route, Routes, NavLink } from 'react-router-dom'
import Sale from "./Sale";
import Featured from "./Featured";
import MostViewed from "./MostViewed";
import { useState } from "react";
import data from './data.json'
import './Feature.css'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function Feature() {
    const [typeName, setName] = useState('fiction')

    const getTypeName = (event) => {
        setName(event.target.innerText.toLowerCase())
    }
    return (
        <div className="">

            <div className="feature-container" style={{ backgroundColor: '#fdffcd' }}>
                <h2 className="">Featured Books</h2>
                <div className="link mt-2 d-flex flex-row align-items-center justify-content-center">
                    <p className='link_item' onClick={getTypeName}> On-Sale</p>
                    <p className='link_item' onClick={getTypeName}> Featured</p>
                    <p className='link_item' onClick={getTypeName}> Most-Viewed</p>
                </div>

                <div className="p-2 m-1 border d-flex flex-row justify-content-between align-items-center">

                    {data.myData.filter(item => item.type === `${typeName}`).map((item, index) => (
                        <div key={index} className='hoverest'>


                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Card sx={{ maxWidth: 270 }}>
                                <CardMedia
                                    component="img"
                                    alt="null"
                                    height="170" 
                                    image={item.book_image}
                                />
                                <CardContent style={{}}>
                                    <Typography gutterBottom variant="h6" component="div" style={{ color: 'red', height: '50px', marginBottom: '5px' }}>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" style={{ marginTop: '20px' }} >
                                        {item.author}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Add To Cart</Button>
                                </CardActions>
                            </Card>
                        </div>

                    </div>
                    ))}

                </div>
            </div>






        </div >
    )
}


export default Feature