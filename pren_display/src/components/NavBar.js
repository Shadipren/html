import * as React from 'react';
import {
  AppBar, Box, Toolbar, IconButton, Typography, Container, Button, Menu,
  MenuItem, Grid
} from '@mui/material';
import MenuIcon from '@material-ui/icons/Menu';

import './NavBar.css';


const pages = ['Home', 'Live Stream Parcour', 'Galerie', 'Team'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const styles = {
    // these buttons will be aligned to right side of abbBar
    toolbarButtons: {
      marginLeft: "auto",
      marginRight: -12
    },
    menuButton: {
      marginRight: 20,
      marginLeft: -12
    }
  };

  return (
    <AppBar class="appBar"  position= "absolute">
      <Container maxWidth="xl" spacing={1}>
        <Toolbar disableGutters>
          <Grid container direction="row" alignItems="center" alignIcon="right">
            <Grid item>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: 'flex', md: 'flex' }, padding: 4}}
              >
                Team 18
              </Typography>
            </Grid>

            <Grid item>
              <Box sx={{display: { xs: 'flex', md: 'none'}}}> 
                <IconButton
                  size="large"
                  aria-label="Menu"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon container
                  aria-label="Menu"
                  fontSize='large'
                  className="menuIcon" spacing-xs-5
                  />
                </IconButton>

                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                    }} 
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
             </Box>
            </Grid>
          </Grid>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }} class='button-text'
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;