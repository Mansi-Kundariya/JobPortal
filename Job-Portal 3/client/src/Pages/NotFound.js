import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Box } from '@mui/material'
const NotFound = () => {
  return (
    <>
      <Navbar />
      <Box sx={{ height : '81vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1> Page Not Found! </h1>
      </Box>
      <Footer />
    </>
  )
}

export default NotFound
