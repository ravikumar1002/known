
import { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import Divider from '@mui/material/Divider';


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
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', borderRadius: "10px" , height: "60%", overflow: "auto", position: "fixed",}}>
            <ListItem>
                <Typography
                    // sx={{ display: 'inline' }}
                    component="h6"
                    variant="h6"
                    color="text.primary"
                    sx={{ fontWeight: "600" }}
                >
                    Who to follow
                </Typography>
            </ListItem>
            <Divider />
            {allSuggestion.length > 0 && allSuggestion.map((user) => {
                return (
                    <ListItem key={user._id}sx={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap", }}>
                        <ListItemAvatar>
                            <Avatar alt={user?.firstName} src={user?.profileImg} />
                        </ListItemAvatar>
                        <ListItemText
                            primary={`${user.firstName} ${user.lastName}`}
                            secondary={
                                <>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        {user.username}
                                    </Typography>
                                </>
                            }
                        />
                        <Button variant="outlined" size="small" sx={{ alignSelf: "auto", marginLeft: "1rem", }}>
                            Follow
                        </Button>
                    </ListItem>
                )
            })}

        </List >
    );
}
