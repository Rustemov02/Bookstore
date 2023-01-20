import React from "react"

import data from './data.json'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Advice(){
    return(
        <>
            <h1>Advice Page</h1>

            {data.advice.map((item, index) => (
                        <div className='hoverest'>


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
        </>
    )
}
export default Advice