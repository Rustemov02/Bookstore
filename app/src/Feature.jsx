import React from "react"; 
import { useState } from "react";
import data from './data.json'
import './Feature.css'

import { CardMedia, Button, Typography, Card, CardContent, CardActions, Stack, Chip ,CardActionArea } from '@mui/material'
import { red } from '@mui/material/colors'


function Feature() {
    const [typeName, setName] = useState('fiction')

    const getTypeName = (event) => {
        setName(event.target.innerText.toLowerCase())
    }
    return (
        <Stack>

            <div className="feature-container" style={{ backgroundColor: '#fdffcd' }}>

                <h2 className="">Featured Books</h2>
                {/* <div className="link mt-2 d-flex flex-row align-items-center justify-content-center">
                    <p className='link_item' onClick={getTypeName}> On-Sale</p>
                    <p className='link_item' onClick={getTypeName}> Featured</p>
                    <p className='link_item' onClick={getTypeName}> Most-Viewed</p>
                </div> */}
                <Stack direction="row" spacing={2} sx={{ pb: 2, justifyContent: 'center' }}>
                    <Chip
                        onClick={getTypeName}
                        sx={{ width: 80 }}
                        label="On-Sale"
                        variant="outlined"
                        color='success'
                        clickable />
                    <Chip
                        onClick={getTypeName}
                        sx={{ width: 80 }}
                        label="Featured"
                        variant="outlined"
                        color='success'
                        clickable
                    />
                    <Chip
                        onClick={getTypeName}
                        sx={{ width: 'fit-content' }}
                        label="Most-Viewed"
                        variant="outlined"
                        color='success'
                        clickable
                    />
                </Stack>

                <div className="p-2 m-1 border d-flex flex-row flex-wrap justify-content-between align-items-center">

                    {data.myData.filter(item => item.type === `${typeName}`).map((item, index) => (
                        <div key={index}>

                            {/* style={{ display: 'flex', justifyContent: 'center' }} */}

                            <Card sx={{ width : 200 , height : 340 }}>
                                    <CardMedia
                                        component="img"
                                        alt="null"
                                        height="170"
                                        image={item.book_image}
                                    />
                                    <CardContent  >
                                        <Typography variant="body2" color="text.secondary" style={{textAlign : 'start' }} >
                                            {item.author}
                                        </Typography>

                                        <Typography variant="h6" component="div" style={{ color: 'red', height: '50px', marginBottom: 19 , textAlign : 'start'}}>
                                            {item.title}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="medium">Add To Cart</Button>
                                    </CardActions>
                                </Card>
 


                        </div>
                    ))}

                </div>
            </div>

        </Stack>
    )
}


export default Feature