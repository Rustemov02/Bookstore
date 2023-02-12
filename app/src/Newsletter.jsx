import React from 'react'
import { Stack, Typography, TextField, Button, Box, createTheme, ThemeProvider, Link } from '@mui/material'
import { grey, brown } from '@mui/material/colors'
import { Instagram, Facebook, YouTube, Twitter, Pinterest, Face } from '@mui/icons-material';


import svgElement from './svgElement.svg'

export default function Newsletter() {
    const theme = createTheme({
        palette: {
            customGreyColor: {
                main: grey[600],
                superDark: grey[300],
                superLight: grey[100]
            },
            customBrownColor: {
                main: brown[600],
                superDark: brown[100]

            }
        }
    })



    // const boxSX = {
    //     boxShadow: 3,
    //     width: 'fit-content',
    //     color: "blue",
    //     "&:hover": {
    //         border: '1px solid red',
    //         color: 'red',
    //         backgroundColor: 'lightblue',
    //         cursor: 'pointer'
    //     }
    // }
    const typographySx = {
        color: 'grey',
        cursor: 'pointer',
        "&:hover": {
            color: 'red',
            position: 'relative',
            left: 10,
        }
    }
    const contactSx = {
        cursor: 'pointer',
        "&:hover": {
            color: 'red',
        }
    }


    return (
        <Stack sx={{ padding: '100px 0' }}>
            <ThemeProvider theme={theme}>

                <Stack direction='column' alignItems='center'>
                    <Typography variant="h4" paragraph={true}>
                        Join Our Newsletter
                    </Typography>
                    <Typography color="customGreyColor.main" paragraph={true}>Signup to be the first to hear about exclusive deals, special offers and upcoming collections</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 1, width: 850, marginTop: 2 }}>
                        <TextField margin='dense' fullWidth={true} id="outlined-basic" label="Your Mail" variant="outlined" placeholder='Input the your Email' />
                        <Button size='large' fullWidth={false} variant="contained" sx={{ background: 'black', color: 'white', padding: '15px 40px' }} >Subscribe</Button>
                    </Box>
                </Stack>

                <Stack direction='row' padding={10} justifyContent="space-around" >

                    <Stack spacing={4} >
                        <img src={svgElement} style={{ width: 210 }} />
                        <Typography>
                            1418 River Drive, Suite 35 Cottonhall, CA 9622
                            United States
                        </Typography>

                        <Box>
                            <Typography sx={contactSx}>sale@bookworm.com</Typography>
                            <Typography sx={contactSx}> +994 (55) 778 33 24</Typography>
                        </Box>

                        <Box sx={{ width: "fit-content", display: "flex", flexDirection: "row", gap: 4 }}>
                            <Instagram sx={contactSx} />
                            <Facebook sx={contactSx} />
                            <YouTube sx={contactSx} />
                            <Twitter sx={contactSx} />
                            <Pinterest sx={contactSx} />
                        </Box>
                    </Stack>

                    <Stack spacing={4}>
                        <Typography variant="h5">
                            Explore
                        </Typography>

                        <Box sx={{ display: 'flex', flexDirection: "column", gap: 2 }}>
                            <Typography sx={typographySx}>About Us</Typography>
                            <Typography sx={typographySx}>Sitemap</Typography>
                            <Typography sx={typographySx}>Bookmarks</Typography>
                            <Typography sx={typographySx}>Sign in/Join</Typography>
                        </Box>

                    </Stack>

                    <Stack spacing={4}>
                        <Typography variant="h5">
                            Customer Services
                        </Typography>

                        <Box sx={{ display: 'flex', flexDirection: "column", gap: 2 }}>
                            <Typography sx={typographySx}>Help Center</Typography>
                            <Typography sx={typographySx}>Returns</Typography>
                            <Typography sx={typographySx}>Product Recalls</Typography>
                            <Typography sx={typographySx}>Accessibility</Typography>
                            <Typography sx={typographySx}>Contact Us</Typography>
                            <Typography sx={typographySx}>Store Pickup</Typography>
                        </Box>

                    </Stack>

                    <Stack spacing={4}>
                        <Typography variant="h5">
                            Policy
                        </Typography>

                        <Box sx={{ display: 'flex', flexDirection: "column", gap: 2 }}>
                            <Typography sx={typographySx}>Return Policy</Typography>
                            <Typography sx={typographySx}>Terms of Use </Typography>
                            <Typography sx={typographySx}>Security</Typography>
                            <Typography sx={typographySx}>Privacy</Typography>
                        </Box>

                    </Stack>

                    <Stack spacing={4}>
                        <Typography variant="h5">
                            Categories
                        </Typography>

                        <Box sx={{ display: 'flex', flexDirection: "column", gap: 2 }}>
                            <Typography sx={typographySx}>Action</Typography>
                            <Typography sx={typographySx}>Comedy </Typography>
                            <Typography sx={typographySx}>Drama</Typography>
                            <Typography sx={typographySx}>Horror</Typography   >
                            <Typography sx={typographySx}>Kids</Typography   >
                            <Typography sx={typographySx}>Romantic Comedy</Typography   >
                        </Box>

                    </Stack>

                </Stack>




            </ThemeProvider>
        </Stack >
    )
}