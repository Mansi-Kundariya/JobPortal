import React from 'react'
import { Box, styled } from '@mui/material'
import HeaderImage from '../Images/job1.jpg'

const Header = () => {

  const StyleHeader = styled(Box)(({ theme }) => (
    {
      display: "flex",
      justifyContent: 'center',
      minHeight: 400,
      backgroundImage: `url(${HeaderImage})`,
      backgroundPosition: 'center',
      backgroundColor: theme.palette.secondary.main
    }
  ))

  return (
    <>
    <StyleHeader >

    </StyleHeader>
    </>
  )
}

export default Header
