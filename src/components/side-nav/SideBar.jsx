import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ExploreIcon from '@mui/icons-material/Explore';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { Icon } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Home } from "@mui/icons-material";
import PersonIcon from '@mui/icons-material/Person';

const drawerWidth = 240;

const DrawerWrapper = styled(Box)(({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    display: "flex",
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    height: "100vh",
    position: "fixed",
    [theme.breakpoints.down("sm")]: {
        display: "flex",
        width: "100%",
    },
}));

const DrawerLists = styled(List)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        display: 'flex',
        width: '100vw',
        position: 'fixed',
        justifyContent: 'space-around',
        bottom: "0",
        left: "0",
        backgroundColor: "white",
    },
}));

const ResponsiveIcon = styled(ListItemIcon)(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
        minWidth: 0,
        mr: 'auto',
        justifyContent: 'center',
    },
}));


const ResponsiveHideText = styled(ListItemText)(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
        display: "none",
    },
}));

export const SideBar = () => {
    const { authUser } = useSelector((state) => state.auth);

    const activeStyle = {
        color: "black",
        backgroundColor: "white",
        borderRadius: "50%",
        borderRadius: "5px",
        textDecoration: "none",
    };

    const deactiveStyle = {
        color: "black",
        textDecoration: "none",
    };

    const getActiveStyle = ({ isActive }) => isActive ? activeStyle : deactiveStyle;

    return (
        <DrawerWrapper sx={{ height: "auto", }}>
            <Box>
                <DrawerLists>
                    <ListItem disablePadding sx={{ display: "block", width: "100%" }}>
                        <NavLink to="/" style={getActiveStyle}>
                            <ListItemButton >
                                <ResponsiveIcon>
                                    < Home />
                                </ResponsiveIcon>
                                <ResponsiveHideText primary={"Feed"} />
                            </ListItemButton>
                        </NavLink>
                    </ListItem>

                    <ListItem disablePadding sx={{ display: "block", width: "100%" }}>
                        <NavLink to="/explore" style={getActiveStyle}>
                            <ListItemButton>
                                <ResponsiveIcon>
                                    < ExploreIcon />
                                </ResponsiveIcon>
                                <ResponsiveHideText primary={"Explore"} />
                            </ListItemButton>
                        </NavLink>
                    </ListItem>

                    <ListItem disablePadding sx={{ display: "block", width: "100%" }}>
                        <NavLink to="/bookmarks" style={getActiveStyle}>
                            <ListItemButton>
                                <ResponsiveIcon>
                                    < BookmarkIcon />
                                </ResponsiveIcon>
                                <ResponsiveHideText primary={"Bookmarks"} />
                            </ListItemButton>
                        </NavLink>
                    </ListItem>

                    <ListItem disablePadding sx={{ display: "block", width: "100%" }}>
                        <NavLink to={`/profile/${authUser.username}`} style={getActiveStyle}>
                            <ListItemButton>
                                <ResponsiveIcon>
                                    <PersonIcon />
                                </ResponsiveIcon>
                                <ResponsiveHideText primary={"profile"} />
                            </ListItemButton>
                        </NavLink>
                    </ListItem>

                </DrawerLists>
            </Box>
        </DrawerWrapper>
    );
};
