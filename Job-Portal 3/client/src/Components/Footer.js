import { Box } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material/styles';

const Footer = () => {
    const { palette } = useTheme();
    return (
        <>
            <Box sx={{
                height: '70px',
                bgcolor: palette.secondary.midNightBlue,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: "rgb(2,0,36) linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"
            }}>
                <Box component='span' sx={{ color: 'white' }}>All rights reserved! 2023.</Box>

            </Box>
        </>
    )
}

export default Footer