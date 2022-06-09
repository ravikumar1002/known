import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { useSelector } from 'react-redux';


export const FollowerLayout = ({ user, unfollowHandler, followHandler, type }) => {
    const { authUser, authToken } = useSelector((state) => state.auth);

    const isFollowed = (username) => {
        if (type === "following") {
            return authUser.following.find(user => user.username === username)
        } else if (type === "followers") {
            return authUser.followers.find(user => user.username === username)
        }
    }


    return (
        <Box key={user._id}>
            <Link to={`/profile/${user.username}`} className="suggestion-list__link">
                <div style={{ display: "flex", alignItems: "center" }}>
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
                </div>
                {isFollowed(user.username) ?
                    <Button variant="outlined" size="small" sx={{ alignSelf: "auto", marginLeft: "1rem", }} onClick={(e) => {
                        e.preventDefault()
                        unfollowHandler(user._id)
                    }}>
                        unfollow
                    </Button> :
                    <Button variant="outlined" size="small" sx={{ alignSelf: "auto", marginLeft: "1rem", }} onClick={(e) => {
                        e.preventDefault()
                        followHandler(user._id)
                    }}>
                        follow
                    </Button>
                }

            </Link>
        </Box>
    )
}