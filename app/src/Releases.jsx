import React from "react";
import { useState } from "react";
import data from './data.json'
import './Feature.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea, Paper, Box, createTheme, ThemeProvider, CssBaseline, Chip, IconButton } from "@mui/material";
import releasesImg from '././images/releases-book.jpg'
import { Link } from "react-router-dom";

import './Release.css'
import { red, grey } from '@mui/material/colors'
import { Stack } from "@mui/system";

function Release() {
    const [typeName, setTypeName] = useState('business')
    const categories = ['Business', 'Romance', 'Most-Viewed']
    const [active, setActive] = useState('Business')

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
        }
    })
    const boxStyle = {
        border: 1,
        borderColor: 'gray',
        margin: 1,
        padding: 0.5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 170
    }
    const TextBoxStyle = {
        width: "100%",
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        px: 1, py: 1
    }
    const typography = {
        color: 'red',
        height: 'auto',
        width: 'auto',
        marginBottom: 19,
        textAlign: 'start',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap'
    }

    return (
        <Stack padding={10} >

            <ThemeProvider theme={theme}>
                <CssBaseline />

                <Stack direction="row" justifyContent='space-between' alignItems='center' padding={2}>
                    <Typography variant="h4">New Releases</Typography>

                    <Stack spacing={2} direction="row">
                        {categories.map((item, index) => (
                            <Link className={`${active == item && "active"}`}
                                key={index} style={{ textDecoration: 'none', color: 'black', paddingBottom: 10 }}
                                onClick={(event) => {
                                    setTypeName(event.target.innerText.toLowerCase())
                                    setActive(item)
                                }}
                            >{item}</Link>
                        ))}
                    </Stack>
                </Stack>



                {/* BODY  */}
                <Stack direction='row' alignItems="center" justifyContent='space-around' border={1}>
                    {/* , border: 1, borderColor: 'customGreyColor.main' */}
                    {/* First */}     <Stack direction='row' alignItems='center' justifyContent='center' sx={{ px: 3, py: 2 }}>
                        <Card variant='contained' sx={{ width: 430 }}>
                            <CardActionArea>
                                <Box>
                                    <CardMedia
                                        component="img"
                                        height="330"
                                        image={releasesImg}
                                        alt="relasesImg"
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

                    {/* Second */}    <Stack direction="row" justifyContent='' flexWrap='wrap' sx={{ gap: 2, px: 1 }}  >

                        {data.myData.filter(item => item.type === `${typeName}`).map((item, index) => (
                            <Box component='div' sx={boxStyle} key={index}>
                                <img src={item.book_image} alt='releasesImg' style={{ width: 'auto', height: 170 }} />

                                <Box component='div' sx={TextBoxStyle}>
                                    <Link to={`/${item.id}`} style={{ textDecoration: 'none' }}>   <Typography variant="body2" style={{ textAlign: 'start' }} color='text.secondary'>{item.author}</Typography>
                                        <Typography variant="subtitle1" style={typography}>{item.title}</Typography>
                                    </Link>
                                    <Button size="small" sx={{ width: 110, display: 'flex', textItems: "flex-start" }} >Add To Cart </Button>
                                </Box>


                            </Box>



                        ))}

                    </Stack>

                </Stack>

            </ThemeProvider>
        </Stack>
    )
}

export default Release













//    Customize The Releases Cart