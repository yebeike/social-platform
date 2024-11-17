import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Social Platform
        </Typography>
        <Box>
          <Button color="inherit" onClick={() => navigate('/')}>
            首页
          </Button>
          <Button color="inherit" onClick={() => navigate('/profile')}>
            个人资料
          </Button>
          <Button color="inherit" onClick={() => navigate('/login')}>
            登录
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;