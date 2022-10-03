import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import DragonFireLogo from './../assets/DragonFireLogo.svg';

const pages = ['Dashboard', 'Checklists'];
const settings = ['Profile', 'Achivements', 'Logout'];

const ResponsiveAppBar = () => {


    const [ selectedOptionNavMenu, setSelectedOptionNavMenu ] = React.useState<any| undefined>()
    const [ selectedOptionUserMenu, setSelectedOptionUserMenu ] = React.useState<any | undefined>()
    const [ totalAchivementPoints, setTotalAchivementpoints ] = React.useState<any | undefined>(0)
        
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = (selectedOption: string) => {
        setSelectedOptionNavMenu(selectedOption)
        console.log("In handleCloseNavMenu", selectedOptionNavMenu)
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = (selectedOption: string) => {
        setSelectedOptionUserMenu(selectedOption)
        console.log("In handleUSERClose", selectedOptionUserMenu)
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static">
        <Container maxWidth="xl">
            <Toolbar disableGutters>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} >
                <img
                src={DragonFireLogo}
                alt="DragonFire Logo"
                />
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
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
                onClose={handleCloseNavMenu}
                sx={{
                    display: { xs: 'block', md: 'none' },
                }}
                >
                {pages.map((page) => (
                    <MenuItem key={page} onClick={e => handleCloseNavMenu(e.currentTarget.textContent)}>
                    <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                ))}
                </Menu>
            </Box>
            <Box sx={{
              display: { xs: 'flex', md: 'none' },
              mr: 1,
              flexGrow: 1,
              justifyContent: 'center',
            }}
              >
                <img
                src={DragonFireLogo}
                alt="DragonFire Logo"
                />
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                <Button
                    key={page}
                    onClick={e => handleCloseNavMenu(e.currentTarget.textContent)}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    {page}
                </Button>
                ))}
            </Box>

            <Box sx={{ 
                mr: 4,
                p: 1,
                display: "inline-flex"
                }} >
                <EmojiEventsIcon />
                <Typography sx={{ ml: 1 }}>
                    { totalAchivementPoints } 
                </Typography>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
                </Tooltip>
                <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                >
                {settings.map((setting) => (
                    <MenuItem key={setting} onClick={e => handleCloseUserMenu(e.currentTarget.textContent)}>
                    <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                ))}
                </Menu>
            </Box>
            </Toolbar>
        </Container>
        </AppBar>
  );
};
export default ResponsiveAppBar;
