import { Stack, Typography, Box, FormControl, Select, MenuItem } from '@mui/material'
import React from 'react'

export default function Footer() {

    const [currency, setCurrency] = React.useState('');

    const handleCurrency = (event) => {
        setCurrency(event.target.value);
    };

    const [age, setAge] = React.useState('');

    const handleAge = (event) => {
        setAge(event.target.value);
    };

    return (
        <Stack direction='row' justifyContent='space-around' alignItems='center'>
            <Typography>©2023 Book Worm. All rights reserved</Typography>
           
           
            <Stack direction='row' alignItems='center' spacing={2}>
                <img src="https://bookworm.madrasthemes.com/wp-content/themes/bookworm/assets/img/credit-cards.png" alt="presentation" />

                <Box>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <Select
                            value={age}
                            onChange={handleAge}
                            displayEmpty
                        >
                            <MenuItem value="">
                                EN-US
                            </MenuItem>
                            <MenuItem value={10}>AZ-EN</MenuItem>
                            <MenuItem value={20}>RUB-AZ</MenuItem>
                            <MenuItem value={30}>TRY-US</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <Select
                            value={currency}
                            onChange={handleCurrency}
                            displayEmpty
                        >
                            <MenuItem value=''>
                                $USD
                            </MenuItem>

                        </Select>
                    </FormControl>
                </Box>
            </Stack>
        </Stack>
    )
}