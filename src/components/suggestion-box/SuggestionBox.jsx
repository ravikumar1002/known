
import { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Divider from '@mui/material/Divider';
import { followUserThunk, editUserProfileThunk } from "../../thunk"
import { Link } from 'react-router-dom';


export const SuggestionBox = () => {
    const { authUser, authToken } = useSelector((state) => state.auth);
    const { users } = useSelector((state) => state.users);
    const [allSuggestion, setAllSeggestion] = useState([])
    const dispatch = useDispatch();

    useEffect(() => {
        const getUnfollowProfile = users.filter(
            (user) =>
                !authUser.following.find(
                    (innerCurrUser) => innerCurrUser._id === user._id
                ) && user.username !== authUser.username
        )
        setAllSeggestion(getUnfollowProfile)
    }, [authUser, users]);

    const followHandler = (followUserId) => {
        dispatch(followUserThunk({ followUserId: followUserId, authToken: authToken }))
    }


    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', borderRadius: "10px", height: "60%", overflow: "auto", position: "fixed", }}>
            <ListItem>
                <Typography
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
                    <ListItem key={user._id} sx={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap", justifyContent: "space-between" }}>
                        <div style={{display: "flex",alignItems: "center",}}>
                        <Link to={`/profile/${user.username}`}>
                            <ListItemAvatar>
                                <Avatar alt={user?.firstName} src={user?.profileImg} />
                            </ListItemAvatar>
                        </Link>
                        <Link to={`/profile/${user.username}`}>
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
                                            @{user.username}
                                        </Typography>
                                    </>
                                }
                            />
                        </Link>
                        </div>
                        <Button variant="outlined" size="small" sx={{ alignSelf: "auto", marginLeft: "1rem", }} onClick={() => {
                            followHandler(user._id)
                        }}>
                            Follow
                        </Button>
                    </ListItem>
                )
            })}

        </List >
    );
}
