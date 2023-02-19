import React, { Component } from 'react';
import Slider from 'react-slick'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography, { typographyClasses } from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import { borderColor } from '@mui/system';
import img1 from './images/img-1.jpg'
import img2 from './images/img-2.jpg'
import img3 from './images/img-3.jpg'
import data from './data.json'
import './bestSelling.css'

import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks, getBestSellingCategories, testerApi, dataTester } from './Redux/bookSlice';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", alignItems: 'center', justifyContent: "center", background: "#c5cae9", color: 'black', height: 50, width: 45, fontSize: 120, padding: 10 }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", alignItems: 'center', justifyContent: "center", background: "#c5cae9", color: 'black', height: 50, width: 45, fontSize: 120, padding: 10 }}
            onClick={onClick}
        />
    );
}


export default function Bestselling() {
    const dispatch = useDispatch()
    const typeOfCategories = useSelector(state => state.books.generalCategories)
    const dataBooks = useSelector(state => state.books.dataTester)
    const bookName = "FAIRY TALE"

    var settings = {
        dots: false,
        infinite: false,
        slidesToShow: 6,
        slidesToScroll: 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <Stack padding={7}>
            <Typography variant='h4' sx={{ paddingBottom: 5 }}>Best Selling Books</Typography>
            {/* <Button onClick={()=>dispatch(fetchBooks())}>Test</Button> */}
            <Slider  {...settings} style={{ padding: '20px' }}>

                {data.bestSelling.map((item, index) => (
                    <Stack key={index} p={3} >

                        <Stack display='flex' flexDirection='column' alignItems='center' justifyContent="center">
                            <Card sx={{ width: 170 }}>
                                <CardMedia
                                    component="img"
                                    alt="null"
                                    height="170"
                                    image={item.book_image}
                                />
                                <CardContent onClick={() => dispatch(fetchBooks(`${typeOfCategories}`))}>

                                    <Link to={`/${item.id}`} style={{ textDecoration: 'none' }} onClick={() => {
                                        const title = item.title
                                        const author = item.author
                                        const type = item.type
                                        dispatch(getBestSellingCategories(title))

                                    }}>
                                        <Typography gutterBottom variant="h6" component="div" style={{ color: 'red', height: 25, marginBottom: '5px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                                            {item.title}
                                        </Typography>

                                        <Typography variant="body2" color="text.secondary" style={{ marginTop: '20px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }} >
                                            {item.author}
                                        </Typography>
                                    </Link>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Add To Cart</Button>
                                </CardActions>
                            </Card>
                        </Stack>

                    </Stack>
                ))}
            </Slider>
        </Stack>
    );
}
