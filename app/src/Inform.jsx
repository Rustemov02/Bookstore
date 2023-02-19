import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import AddTaskIcon from '@mui/icons-material/AddTask';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

export default function Inform() {

    // const header = ['Free Delivery', 'Secure Payment', "Money Back Guarantee", "24/7 Support"]
    const customIcon = {
        color : 'red' ,
        fontSize : 40,
        marginLeft : '10px' 
    }
    const details = [
        {
            "head": "Free Delivery",
            "info": "Orders over $100",
            "logo": <LocalShippingIcon sx={ customIcon } />
        },
        {
            "head": "Secure Payment",
            "info": "100% Secure Payment",
            "logo": <AssuredWorkloadIcon sx={ customIcon } />
        }, 
        {
            "head": "Money Back Guarantee",
            "info": "Within 30 Days",
            "logo": <AddTaskIcon sx={ customIcon } />
        }, 
        {
            "head": "24/7 Support",
            "info": "Within 1 Business Day",
            "logo": <ContactSupportIcon sx={ customIcon }/>
        },

    ]

    return (
        <Stack  borderColor='grey' width='fit-content'>
            {details.map((item, index) => (
                <Box key={index} sx={{   borderBottom: "solid grey 0.5px" ,display: 'flex', flexDirection: 'row' , justifyContent : 'center' , alignItems : 'center    ' }}>
                    {item.logo} 
                    <Box sx={{ width : "80%" , padding : 3 }}>
                        <Typography variant="h6">{item.head}</Typography>
                        <Typography variant="subtitle1">{item.info}</Typography>
                    </Box>
                </Box>
            ))}


        </Stack>
    )
}