import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/system';
import Content from './content/Content';
import Navigation from './navigation/Navigation';
import SideBar from './sidebar/SideBar';

const Layout = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        // overflow: 'hidden',
      }}
    >
      <Navigation />
      <Content>
        <Outlet />
      </Content>
      <SideBar />
    </Box>
  );
};

export default Layout;
