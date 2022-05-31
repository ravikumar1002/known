import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ExploreIcon from '@mui/icons-material/Explore';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { Icon } from "@mui/material";


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


    return (
        <DrawerWrapper>
            <Box>
                <DrawerLists>
                    {['Home', 'Explore', 'Bookmarks', 'Liked'].map((text) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ResponsiveIcon>
                                    < Icon/>
                                </ResponsiveIcon>
                                <ResponsiveHideText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </DrawerLists>
            </Box>
        </DrawerWrapper>
    );
};
