import React, { useState } from "react";
import data from './data.json'
import './Feature.css'

import { CardMedia, Button, Typography, Card, CardContent, CardActions, Stack, Chip, CardActionArea, Box } from '@mui/material'
import { red } from '@mui/material/colors'
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux'
import { getCategories } from "./Redux/bookSlice";


function Feature() {

    const dispatch = useDispatch()
    const typeCategories = useSelector(state => state.books.categories)
    const categories = ["On-Sale", "Featured", "Most-Viewed"]
    const [active, setActive] = useState('On-Sale')

    const boxStyle = {
        border: 1,
        borderColor: 'gray',
        boxShadow : '5px 5px 10px #e57373',
        backgroundColor : 'white',
        margin: 1,
        padding: 0.5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 200
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

        <Stack padding={10} bgcolor="white">

            <Typography variant="h4" align="center">Featured Books</Typography>
            <Stack direction="row" spacing={5} sx={{ pb: 3, pt: 2, justifyContent: 'center' }}>
                {categories.map((item, index) => (
                    <Link className={`${active == item && "active"}`} key={index} style={{ textDecoration: 'none', color: 'black', paddingBottom: 10 }} onClick={(event) => {
                        setActive(item)
                        dispatch(getCategories(event.target.innerText.toLowerCase()))
                    }} >{item}</Link>
                ))}
            </Stack>

            <Stack display='flex' flexDirection="row" flexWrap="wrap" justifyContent='center'>
                {data.myData.filter(item => item.type === `${typeCategories}`).map((item, index) => (
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
    )
}


export default Feature