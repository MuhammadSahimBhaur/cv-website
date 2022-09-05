import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';


const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="fixed" className='navbar' sx={ { bgcolor: "rgba(221, 221, 221, 0)", boxShadow: "0px 0px 0px -1px rgb(0 0 0 / 20%), 0px 0px 0px 0px rgb(0 0 0 / 14%), 0px 0px 0px 0px rgb(0 0 0 / 12%)" } }>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={ {
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        } }
                    >
                        Sahim Bhaur
                    </Typography>

                    <Box sx={ { flexGrow: 1, display: { xs: 'flex', md: 'none' } } }>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={ handleOpenNavMenu }
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={ anchorElNav }
                            anchorOrigin={ {
                                vertical: 'bottom',
                                horizontal: 'left',
                            } }
                            keepMounted
                            transformOrigin={ {
                                vertical: 'top',
                                horizontal: 'left',
                            } }
                            open={ Boolean(anchorElNav) }
                            onClose={ handleCloseNavMenu }
                            sx={ {
                                display: { xs: 'block', md: 'none' },
                            } }
                        >
                            {/* { pages.map((page) => ( */ }
                            <MenuItem onClick={ handleCloseNavMenu }>
                                <Typography textAlign="center" sx={ { color: "#90a4ae" } }>Download CV</Typography>
                            </MenuItem>
                            <MenuItem onClick={ handleCloseNavMenu }>
                                <Typography textAlign="center" sx={ { color: "#90a4ae" } }>Blog</Typography>
                            </MenuItem>


                            {/* )) } */ }
                        </Menu>
                    </Box>
                    <AdbIcon sx={ { display: { xs: 'flex', md: 'none' }, mr: 1 } } />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={ {
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        } }
                    >
                        LOGO
                    </Typography>
                    <Box sx={ { flexGrow: 1, display: { xs: 'none', md: 'flex' } } }>
                        <Button
                            onClick={ handleCloseNavMenu }
                            sx={ { my: 2, color: 'black', display: 'block' } }
                        >
                            Blog
                        </Button>

                        <Button
                            onClick={ handleCloseNavMenu }
                            sx={ { my: 2, color: 'black', display: 'block' } }
                        >
                            Download CV
                        </Button>

                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
};
export default ResponsiveAppBar;
