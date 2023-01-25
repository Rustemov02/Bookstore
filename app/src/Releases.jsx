import React from "react";
import { useState } from "react";
import data from './data.json'
// import Advice from "./Advice";
// import Business from "./Business";
// import Fiction from './Fiction'
// import Romance from "./Romance";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


import './Release.css'

function Release() {
    const [typeName, setName] = useState('fiction')

    const getTypeName = (event) => {
        setName(event.target.innerText.toLowerCase())
    }
    return (
        <div className="mt-5 p-4">
            <div className="border border-warning d-flex flex-row justify-content-between p-2 align-items-center ">
                <h2>New Releases</h2>
                <div className="mt-2 border border-success d-flex flex-row align-items-center justify-content-center">
                    <p onClick={getTypeName}>Business</p>
                    <p onClick={getTypeName}>Romance</p>
                    <p onClick={getTypeName}>Most-viewed</p>
                </div>
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





            {/* <div className="p-2 m-1 border d-flex flex-row justify-content-between align-items-center">
                <h2 >New Releases</h2>
                {data.myData.filter(item => item.type === `${typeName}`).map((item, index) => (
                    <div key={index}>
                        {item.author}
                    </div>
                ))}
            </div> */}




        </div>
    )
}

export default Release