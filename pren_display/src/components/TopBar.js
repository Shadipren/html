import { AppBar, Box, Toolbar, Typography } from "@mui/material";

const TopBar = (props) => {
    return (
        <AppBar position="fixed">
            <Toolbar id="toolbar">
                <Typography
                    id='smallTitle'
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="left"
                    noWrap
                    sx={{ flex: 1 }}
                >OwO</Typography>
                <span className="largeTitle">
                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="left"
                    noWrap
                    sx={{ flex: 1 }}
                    fontWeight="light"
                >Team 28 PREN</Typography>
                </span>
            </Toolbar>
        </AppBar>
    );
}

export default TopBar;