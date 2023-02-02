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
import { CardActionArea, Paper, Box, createTheme, ThemeProvider, CssBaseline, Link, Chip } from "@mui/material";
import releasesImg from '././images/releases-book.jpg'
// import img1 from '././images/img-1.jpg'

import './Release.css'
import { red, grey } from '@mui/material/colors'
import { Stack } from "@mui/system";

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
            customGreyColor: {
                main: grey[400],
                superDark: grey[800],
                superLight: grey[100]
            }
        },
        typography: {
            myVariant: {
                fontSize: '16px',
                paddingTop: '10px'
            }
        }, 

    })



    return (
        <Stack border={2} p={3}>
            <ThemeProvider theme={theme}    >
                <CssBaseline />
                {/* HEADER */}
                {/* className="d-flex flex-row justify-content-between p-2 align-items-center " */}
                <Stack direction="row" justifyContent='space-between' alignItems='center' sx={{ p: 2 }}>
                    <h2>New Releases</h2>
                    {/* className="mt-2 d-flex flex-row align-items-center justify-content-center" */}
                    <Stack spacing={2} direction="row">
                        {/* <p onClick={getTypeName}>Business</p>
                    <p onClick={getTypeName}>Romance</p>
                    <p onClick={getTypeName}>Most-viewed</p> */}
                        <Chip onClick={getTypeName} label="Business" size="medium"  variant="myVariant"/>
                        <Chip onClick={getTypeName} label="Romance" size="medium" variant="" />
                        <Chip onClick={getTypeName} label="Most-Viewed" size="medium" variant="" />
                    </Stack>
                </Stack>

                {/* BODY  */}
                <Stack direction='row'>

                    <Stack direction='row' alignItems='center' sx={{ px: 3, py: 2, border: 1, borderColor: 'customGreyColor.main' }}>
                        <Card raised={true} variant='contained' sx={{ width: 430 }}>
                            <CardActionArea>
                                <Box sx={{}}>
                                    <CardMedia
                                        component="img"
                                        height="330"
                                        image={releasesImg}
                                        alt="green iguana"
                                    />
                                </Box>
                                <CardContent>
                                    <Typography variant="h4" component="div">
                                        Get Extra
                                    </Typography>
                                    <Typography variant="h3" color="customRedColor.main">
                                        Sale -25%
                                    </Typography>
                                    <Typography variant="h4" color="customGreyColor.main" sx={{ mt: 2, textTransform: "uppercase" }}>
                                        On Order Over $100
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" variant='contained' color="customRedColor" >
                                    <Typography color="white" sx={{ px: 4, py: 1 }} >View More</Typography>
                                </Button>
                            </CardActions>
                        </Card>
                    </Stack>

                    {/* className="p-2 m-1 border d-flex flex-row justify-content-between align-items-center" */}
                    <Stack direction="row" justifyContent='space-between' flexWrap='wrap' sx={{ gap: 2, px: 1 }}  >

                        {data.myData.filter(item => item.type === `${typeName}`).map((item, index) => (
                            <Stack key={index} sx={{ width: 220, height: 400 }}>


                                <Stack sx={{ display: 'flex', width: 200, height: 400, }}>
                                    <Card>
                                        <CardMedia
                                            component="img"
                                            alt="null"
                                            height="230"
                                            image={item.book_image}
                                        />
                                        {/* display : 'flex' ,flexDirection : 'column' , justifyContent : 'center' */}
                                        <CardContent >
                                            <Typography variant="body2" color="text.secondary" sx={{ textOverflow: 'ellipsis', whiteSpace: "nowrap", overflow: "hidden" }} >
                                                {item.author}
                                            </Typography>
                                            <Typography gutterBottom variant="myVariant" component="div" sx={{ color: 'red', height: '50px', marginBottom: '30px' }}>
                                                {item.title}
                                            </Typography>
                                        </CardContent>
                                        <CardActions >
                                            <Button variant="contained" sx={{ mt: -1 }} size="small">Add To Cart</Button>
                                        </CardActions>
                                    </Card>
                                </Stack>

                            </Stack>
                        ))}

                    </Stack>

                </Stack>





                {/* <div className="p-2 m-1 border d-flex flex-row justify-content-between align-items-center">
                <h2 >New Releases</h2>
                {data.myData.filter(item => item.type === `${typeName}`).map((item, index) => (
                    <div key={index}>
                        {item.author}
                    </div>
                ))}
            </div> */}

            </ThemeProvider>
        </Stack>
    )
}

export default Release













//    Customize The Releases Cart