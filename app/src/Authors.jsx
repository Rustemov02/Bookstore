import React from "react";
import { Stack, Avatar, Typography } from '@mui/material'
import { Box } from "@mui/system";
import { grey , red } from "@mui/material/colors";

import data from './data.json'

export default function Authors() {

    console.log(data.authors)

    return (
        <Stack border={2} p={3}>
                <Stack direction="row" justifyContent='space-between' alignItems='center' sx={{ p: 2 }}>
                    <h2>Favorites Authors</h2>
                </Stack>

                <Stack border={2} direction='row'>
                    {data.authors.map( (item , index) => (
                         <Box key={index} border={2} sx={{ width: "fit-content", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                         <Avatar
                             alt="author"
                             src={item.img}
                             sx={{ width: 130, height: 130, marginBottom: 5 }}
                         />
                         <Typography sx={{fontSize : 25 }}>{item.name}</Typography>
                         <Typography color={grey[700]}>{item.published} Published Books</Typography>
                     </Box>
                    ))}
                </Stack>
        </Stack>
    )

}

 