import React from 'react';
import { Box } from '@mui/material';
import HeaderTop from './HeaderTop';
import SidebarAdm from './Sidebar';

// HOC - Higher order component
const Layout = (Component) => ({ ...props }) => { 
  return (
    <>
      <div style={{ display: 'flex', minHeight: "100vh" }}>
        <SidebarAdm />
        <Box sx={{ width: "100%", bgcolor: "#f2f2f2" }}>
            <HeaderTop />
            <Box sx={{ p:3 }}>
                <Component {...props} />
            </Box>
        </Box>
      </div>
    </>
  )
}

export default Layout
