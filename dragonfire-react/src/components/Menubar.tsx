import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import DragonFireLogo from './../assets/DragonFireLogo.svg';
import { useNavigate } from 'react-router-dom';

type IAppBar = {
  routes: string[],
  profileMenuItems: string[],
  totalAchievementPoints: number,
}

const ResponsiveAppBar = (props: IAppBar) => {
  const { routes, profileMenuItems, totalAchievementPoints = 0 } = props;
  const navigate = useNavigate();
  const [ selectedOptionUserMenu, setSelectedOptionUserMenu ] = React.useState<any | undefined>()
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = (selectedOption: string) => {
        setSelectedOptionUserMenu(selectedOption)
        console.log("In handleUSERClose", selectedOptionUserMenu)
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static">
        <Container maxWidth="xl">
            <Toolbar sx={{ height: 128 }} disableGutters>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} >
                <img
                src={DragonFireLogo}
                alt="DragonFire Logo"
                />
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
                {routes.map((page) => (
                    <MenuItem key={page} onClick={e => navigate(page)}>
                        <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                ))}
            </Box>

            <Box sx={{ 
                mr: 4,
                p: 1,
                display: "inline-flex"
                }} >
                <EmojiEventsIcon />
                <Typography sx={{ ml: 1 }}>
                    { totalAchievementPoints } 
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
                {profileMenuItems.map((setting) => (
                    <MenuItem key={setting} onClick={e => handleCloseUserMenu(e?.currentTarget?.textContent ?? "")}>
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
