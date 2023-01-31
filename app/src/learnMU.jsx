import * as React from 'react'
import { Button, createTheme, Paper, ThemeProvider, Typography, CssBaseline, IconButton, Tooltip, Backdrop } from '@mui/material'
import { red } from '@mui/material/colors'
import { Stack } from '@mui/system'
import TrashIcon from '@mui/icons-material/Delete'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import Badge from '@mui/material/Badge'
import MailIcon from '@mui/icons-material/Mail'
import Skeleton from '@mui/material/Skeleton'

export default function learnMU() {

    const theme = createTheme({
        palette: {
            mode: 'light',
            customRibRed: {
                main: red[400],
                superDark: red[800],
                superLight: red[100]
            }
        },
        // typography: {
        //     myVariant: {
        //         fontSize: 30,
        //         align: 'center',
        //         border: 'solid red 1px',
        //         textAlign: 'center'
        //     }
        // }
    })
    const loading = true
    // const [open , setOpen] = React.useState(false)
    // const handleClose = () =>{
    //     setOpen(false)
    // }
    // const handleToggle = () => {
    //     setOpen(!open)
    // }
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {/* <Stack direction='column'> */}
                <Box sx={{
                    display: 'flex',
                    flexWrap: "wrap",
                    // '& > :not(style)': {
                    //     m: 1,
                    //     width: 128,
                    //     height: 128,
                    //   },
                }}>
                    <Paper sx={{ backgroundColor: 'blue', width: 128, height: 128, m: 1 }} elevation={15} >Elevation 1</Paper>
                    <Paper sx={{ backgroundColor: 'red', width: 128, height: 128, m: 1 }} square />
                    <Paper elevation={12} sx={{ backgroundColor: 'green', width: 128, height: 128, m: 1 }} />
                </Box>

                <Tooltip title='you can send message'>
                    <IconButton sx={{ width: 60 }}>
                        <Badge sx={{ m: 4 }} badgeContent={10} color='primary'>
                            <MailIcon sx={{ fontSize: 30 }} color='action' />
                        </Badge>
                    </IconButton>
                </Tooltip>
                <Button align='start' variant='contained'>Show Backdrop</Button>
                <Backdrop open={false}>
                    {/* <CircularProgress color='inherit'/> */}
                    <Typography variant='h3' color='customRibRed.main'>This is the test component</Typography>
                </Backdrop>

                <Typography variant='h3' color='customRibRed.main'>I' learning !</Typography>
            {/* </Stack> */}
        </ThemeProvider>    
    )
}