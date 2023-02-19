import React, { useState } from "react";
import { useParams } from "react-router";
import data from './data.json'
import { Stack, Button, Card, Typography, Rating, Paper, Menu, MenuItem, Link } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getBookDetailsCategories } from "./Redux/bookSlice";
import { Box } from "@mui/system";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import Inform from "./Inform";
import { red } from "@mui/material/colors";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

export default function BookDetails() {
    const typeOfCategories = useSelector(state => state.books.generalCategories)
    const { bookId } = useParams()
    const thisBook = data.myData.filter(item => item.type === `${typeOfCategories}`).find(item => item.id == bookId)
    const [value, setValue] = useState(3);
    const [number, setNumber] = useState(1)
    const [active, setActive] = useState('Description')
    const dispatch = useDispatch()
    const list = [
        {
            title: "Description",
            text: 'Lorem lorm loe rr f k fvdv'
        },
        {
            title: "Product Details",
            text: 'Lorem lorm loe rr f k fvdv'
        },
        {
            title: "Reviews",
            text: 'Lorem lorm loe rr f k fvdv'
        }
    ]

    const customTypography = {
        color: 'black',
        "&:hover": {
            color: 'red',
            cursor: 'pointer',
            transition: '0.4s'
        }
    }


    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const typeCategories = useSelector(state => state.books.bookDetailsCategories)


    return (
        <Stack direction='column'>
            <Stack padding={10} direction='column' alignItems='center' justifyContent="center" py={3} paddingLeft={10} bgcolor={red[50]}>


                <Box sx={{ width: '80%', height: '80vh', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', gap: 10 }}>

                    <img src={thisBook.book_image} alt='sdfs' />

                    <Card sx={{ px: 5, py: 2 }}>
                        <Typography variant="h4" sx={{ width: 'fit-content' }}>{thisBook.title}</Typography>

                        <Box sx={{ paddingTop: 1, display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: 2 }}>
                            <Rating
                                sx={{ display: 'flex', flexDirection: 'row', padding: 0, margin: 0, alignItems: 'center' }}
                                size="medium"
                                name="simple-controlled"
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                            />
                            <Typography variant="subtitle2" >By(author)<Typography component='span' sx={{ px: 1 }} color='grey'>{thisBook.author}</Typography> </Typography>
                        </Box>


                        <Typography variant="inherit" sx={{ width: 650 }} paragraph={true} >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat.
                        </Typography>

                        <Stack direction='row' py={4} justifyContent='flex-start' alignItems='center' gap={2}>

                            <Card sx={{ border: 'solid grey 1px', width: 'fit-content', height: 50, display: 'flex', flexDirection: "row", alignItems: 'center' }}>
                                <Button onClick={() => {
                                    number > 0 ? setNumber(number - 1) : setNumber(0)
                                }} sx={{ fontSize: 30 }}>-</Button>
                                <Typography sx={{ fontSize: 30 }}>{number}</Typography>
                                <Button onClick={() => setNumber(number + 1)} sx={{ fontSize: 30 }}>+</Button>
                            </Card>

                            <Button variant="contained" sx={{ width: 420, height: 50 }}>Add to cart</Button>
                        </Stack>

                        <Box sx={{ display: 'flex', flexDirection: "row", alignItems: "center", justifyContent: 'center', gap: 4 }}>
                            <Typography sx={customTypography}><FavoriteBorderIcon /> Add to wishlist</Typography>
                            <Typography sx={customTypography}>
                                <ShareIcon />
                                <Button
                                    sx={{ color: "black" }}
                                    id="basic-button"
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onMouseDown={handleClick}
                                >
                                    Share
                                </Button>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem onClick={handleClose}>Facebook</MenuItem>
                                    <MenuItem onClick={handleClose}>Instagram</MenuItem>
                                    <MenuItem onClick={handleClose}>Pinterest</MenuItem>
                                </Menu>
                            </Typography>

                        </Box>

                    </Card>

                </Box>


            </Stack>

            <Stack direction="column" >
                <Stack direction='row' spacing={5} fontSize={20} sx={{ py: 10, justifyContent: 'center' }}>
                    {list.map((item, index) => (

                        <Typography variant="h6" className={`${active == item.title && "active"}`} key={index} style={{ textDecoration: 'none', color: 'black', paddingBottom: 10, cursor: 'pointer', fontWeight: 500 }} onClick={(event) => {
                            setActive(`${item.title}`)
                            dispatch(getBookDetailsCategories(item.title))
                        }} >{item.title}</Typography>
                    ))}
                </Stack>
                {/* <Box>
                    {bookCategories.filter(item => item.type === `${typeCategories}`).map((item, index) => (
                        <Stack key={index}>
                            <Typography>{item.text}</Typography>
                        </Stack>
                    ))}
                </Box>  */}
            </Stack>

            <Newsletter />
            <Footer />
        </Stack >

    )
}