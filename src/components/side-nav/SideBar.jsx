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


const drawerWidth = 240;

const DrawerWrapper = styled(Box)(({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    display: "flex",
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    height: "100vh",
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
        bottom: "0"

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

    return (
        <DrawerWrapper>
            <Box>
                <DrawerLists>

                    <ListItem disablePadding>
                        <NavLink to={`/`}>
                            <ListItemButton>
                                <ResponsiveIcon>
                                    < Icon />
                                </ResponsiveIcon>
                                <ResponsiveHideText primary={"Home"} />
                            </ListItemButton>
                        </NavLink>
                    </ListItem>

                    <ListItem disablePadding >
                        <NavLink to={`/explore`}>
                            <ListItemButton>
                                <ResponsiveIcon>
                                    < Icon />
                                </ResponsiveIcon>
                                <ResponsiveHideText primary={"Explore"} />
                            </ListItemButton>
                        </NavLink>
                    </ListItem>

                    <ListItem disablePadding >
                        <NavLink to={`/bookmarks`}>
                            <ListItemButton>
                                <ResponsiveIcon>
                                    < Icon />
                                </ResponsiveIcon>
                                <ResponsiveHideText primary={"Bookmarks"} />
                            </ListItemButton>
                        </NavLink>
                    </ListItem>

                    <ListItem disablePadding>
                        <NavLink to={`/profile/${authUser.username}`}>
                            <ListItemButton>
                                <ResponsiveIcon>
                                    < Icon />
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
