import React from 'react'
import { Stack, Box, Card, Typography, ThemeProvider, createTheme, SvgIcon } from '@mui/material'
import { Collections, Home, Fastfood, VolunteerActivism, Medication, NoteAlt } from '@mui/icons-material';
import { brown, red } from '@mui/material/colors';
import { bgcolor } from '@mui/system';
import AOS from 'aos'
import { useEffect } from 'react'
export default function Categories() {


    const theme = createTheme({
        paltette: {
            customColor: {
                main: brown[900],
                mainRed: red[400]
            }
        }
    })

    const iconStyle = {
        height: 200,
        width: 280,
        paddingLeft: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        gap: 1
    }

    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, []);

    return (
        <Stack padding={7} >
            <ThemeProvider theme={theme}>
 
                <Typography variant='h4' sx={{ paddingBottom: 5 }}>Featured Categories</Typography>


                {/* BOXES */}
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: 5 }}>

                    <Card raised={true} sx={{ ...iconStyle, bgcolor: '#e8eaf6' }} >
                        <Collections sx={{ color: 'purple', fontSize: 60 }} />
                        <Typography variant='h5' >Arts & Photography</Typography>
                        <Typography variant='inherit' >Shop Now</Typography>
                    </Card>

                    <Card raised={true} sx={{ ...iconStyle, bgcolor: '#fff3e0' }}>
                        <Fastfood sx={{ color: 'orange', fontSize: 60 }} />
                        <Typography variant='h5' >Food & Drink </Typography>
                        <Typography variant='inherit' >Shop Now</Typography>
                    </Card>

                    <Card raised={true} sx={{ ...iconStyle, bgcolor: '#fbe9e7' }}>
                        <VolunteerActivism sx={{ color: 'red', fontSize: 60 }} />
                        <Typography variant='h5' >Romance</Typography>
                        <Typography variant='inherit' >Shop Now</Typography>
                    </Card>

                    <Card raised={true} sx={{ ...iconStyle, bgcolor: '#eceff1' }}>
                        <Medication sx={{ color: 'blue', fontSize: 60 }} />
                        <Typography variant='h5' >Health</Typography>
                        <Typography variant='inherit' >Shop Now</Typography>
                    </Card>

                    <Card raised={true} sx={{ ...iconStyle, bgcolor: '#f9fbe7' }}>
                        <NoteAlt sx={{ color: "#ef5350", fontSize: 60 }} />
                        <Typography variant='h5' >Biography</Typography>
                        <Typography variant='inherit' >Shop Now</Typography>
                    </Card>

                </Box>

            </ThemeProvider>
        </Stack>
    )
} 