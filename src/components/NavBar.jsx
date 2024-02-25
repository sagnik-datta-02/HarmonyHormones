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

const pages = ['Home', 'About', 'First Periods', 'Nearby Find', 'MenstruPedia', 'Mensa',];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function NavBar() {
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
        } else if (page === 'Mensa') {

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