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
import { CardActionArea, Paper, Box, createTheme, ThemeProvider ,CssBaseline } from "@mui/material";
import releasesImg from '././images/releases-book.jpg'
// import img1 from '././images/img-1.jpg'

import './Release.css'
import { red , grey } from '@mui/material/colors'  

function Release() {
    const [typeName, setTypeName] = useState('fiction')

    const getTypeName = (event) => {
        setTypeName(event.target.innerText.toLowerCase())
    }
    const theme = createTheme({
        palette: {
            mode: 'light',
            customRedColor: {
                main: red[400],
                superDark: red[800],
                superLight: red[100]
            },
            customGreyColor : {
                main: grey[400],
                superDark: grey[800],
                superLight: grey[100]
            }
        }
    })



    return (
        <ThemeProvider theme={theme} className="mt-5 p-4">
            <CssBaseline/>
            <div className="d-flex flex-row justify-content-between p-2 align-items-center ">
                <h2>New Releases</h2>
                <div className="mt-2 d-flex flex-row align-items-center justify-content-center">
                    <p onClick={getTypeName}>Business</p>
                    <p onClick={getTypeName}>Romance</p>
                    <p onClick={getTypeName}>Most-viewed</p>
                </div>
            </div>


            <div className="d-flex flex-row">

                <div>
                    <Card sx={{ width: 500 }}>
                        <CardActionArea>
                            <Box sx={{ m: 2 }}>
                                <CardMedia
                                    component="img"
                                    height="450"
                                    padding="100"
                                    image={releasesImg}
                                    alt="green iguana"
                                />
                            </Box>
                            <CardContent>
                                <Typography variant="h4" component="div">
                                    Get Extra
                                </Typography>
                                <Typography variant="h4">
                                    Sale -25%
                                </Typography>
                                <Typography variant="h4" color="customGreyColor.main" sx={{ mt: 2 }}>
                                    On Order Over $100
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" variant='contained'>
                                View More
                            </Button>
                        </CardActions>
                    </Card>
                </div>


                <div className="p-2 m-1 border d-flex flex-row justify-content-between align-items-center">

                    {/* {data.myData.filter(item => item.type === `${typeName}`).map((item, index) => (
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
                    ))} */}

                </div>

            </div>





            {/* <div className="p-2 m-1 border d-flex flex-row justify-content-between align-items-center">
                <h2 >New Releases</h2>
                {data.myData.filter(item => item.type === `${typeName}`).map((item, index) => (
                    <div key={index}>
                        {item.author}
                    </div>
                ))}
            </div> */}

        </ThemeProvider>
    )
}

export default Release