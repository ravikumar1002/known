
import { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';


export const SuggestionBox = () => {
    const { authUser } = useSelector((state) => state.auth);
    const { users } = useSelector((state) => state.users);
    const [allSuggestion, setAllSeggestion] = useState([])

    useEffect(() => {
        const getUnfollowProfile = users.filter(
            (user) =>
                !authUser.following.find(
                    (innerCurrUser) => innerCurrUser._id === user._id
                ) && user.username !== authUser.username
        )

        setAllSeggestion(getUnfollowProfile)
    }, [authUser, users]);

    console.log(allSuggestion)

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem sx={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap", }}>
                <ListItemAvatar>
                    <Avatar alt={authUser?.firstName } src={authUser?.profileImg } />
                </ListItemAvatar>
                <ListItemText
                    primary="Oui Oui"
                    secondary={
                        <>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Sandra Adams
                            </Typography>
                        </>
                    }
                />
                <Button variant="outlined" size="small" sx={{ alignSelf: "auto", marginLeft: "1rem", }}>
                    Follow
                </Button>

            </ListItem>
        </List >
    );
}
