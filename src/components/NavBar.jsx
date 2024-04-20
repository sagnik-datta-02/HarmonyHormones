import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Menu } from '@mui/material';
import app from './Firebaseconfig';
import { getAuth } from "firebase/auth";
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
const pages = ['Home', 'About', 'First Periods', 'Nearby Find', 'MenstruPedia', 'Mensa',];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function NavBar() {
    /*const auth = getAuth(app);
    var firebase = require('firebase');
var firebaseui = require('firebaseui');

var ui = new firebaseui.auth.AuthUI(firebase.auth());
var uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        // User successfully signed in.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        return true;
      },
      uiShown: function() {
        // The widget is rendered.
        // Hide the loader.
        document.getElementById('loader').style.display = 'none';
      }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: '<url-to-redirect-to-on-success>',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    // Terms of service url.
    tosUrl: '<your-tos-url>',
    // Privacy policy url.
    privacyPolicyUrl: '<your-privacy-policy-url>'
  };*/

 const navigate= useNavigate()
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = (page) => {
        setAnchorElNav(null);
        if (page === 'Home') {
            navigate('/');
        } else if (page === 'First Periods') {
            navigate('/first-periods')
        } else if (page === 'MenstruPedia') {
            navigate('/menstrupedia')
        } else if (page === 'Mensa') {
            
            window.open('https://mensa-ai.streamlit.app/', '_blank');
        }
    };

    const handleCloseUserMenu = (page) => {
        setAnchorElUser(null);
    };

    return (

        <AppBar position="static" sx={{ backgroundColor: '#FFD8DF' }}>
            <Container maxWidth="lg">
                <Toolbar disableGutters>

                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: "Pacifico, cursive",
                    fontWeight: 400,
                    
                    letterSpacing: '.3rem',
                    color: 'Secendery',
                    textDecoration: 'none',
                    padding:1.5,
            }}
          >
                    Hormone Harmony
                </Typography>

                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="black"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={() => handleCloseNavMenu()}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                            color: 'black',
                        }}
                    >
                        {pages.map((page) => (
                            <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
                                <Typography textAlign="center" color='black' sx={{ color: 'black' }}>{page}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>

                <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        mr: 2,
                        display: { xs: 'flex', md: 'none' },
                        flexGrow: 1,
                        fontFamily: "Pacifico, cursive",
                        
                        
                        letterSpacing: '.2rem',
                        color: 'Secendery',
                        textDecoration: 'none',
                        padding: 1.5,
                    }}
                >
                    Hormone Harmony
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, color: 'black' }}>
                    {pages.map((page) => (
                        <Button
                            key={page}
                            onClick={() => handleCloseNavMenu(page)}
                            sx={{ my: 2, color: 'Secendery', display: 'block' }}
                        >
                            {page}
                        </Button>
                    ))}
                </Box>


            </Toolbar>
        </Container>
    </AppBar >

  );
}
export default NavBar;