import React from "react";
import { Stack, Avatar, Typography, IconButton } from '@mui/material'
import { Box, style } from "@mui/system";
import { grey, red } from "@mui/material/colors";
import Slider from 'react-slick'
import KeyboardArrowRightSharpIcon from '@mui/icons-material/KeyboardArrowRightSharp';
import data from './data.json'

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

export default function Authors() {


    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        // #ffebee
        <Stack p={8} borderBottom={1} borderColor='gray'>
            <Stack direction="row" justifyContent='space-between' alignItems='center' sx={{ p: 2 }}>
                <h2>Favorites Authors</h2>
            </Stack>

            <Stack direction='column'>
                <Slider {...settings} >
                    {data.authors.map((item, index) => (
                        <Box key={index} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 4 }}>
                            <Avatar
                                variant='circular'
                                alt="author"
                                src={item.img}
                                sx={{ width: 130, height: 130, margin: 'auto', marginBottom: 5 }}
                            />
                            <Typography sx={{ fontSize: 25 }} textAlign='center'>{item.name}</Typography>
                            <Typography color={grey[700]} textAlign='center'>{item.published} Published Books</Typography>
                        </Box>
                    ))}
                </Slider>
            </Stack>
        </Stack>
    )

}

