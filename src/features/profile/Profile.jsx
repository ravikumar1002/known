import { useDispatch, useSelector } from "react-redux";
import Box from '@mui/material/Box';
import { logoutUser } from "../auth/authSlice"
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import { loadUserDetailsThunk, loadUserPostsThunk } from "../../thunk"
import { useEffect, useState } from "react";
import { PostCard, ProfileEditModal } from "../../components";


export const Profile = () => {
    const dispatch = useDispatch()
    const { authUser, authToken } = useSelector((state) => state.auth);
    const { postsDetails, profileDetails } = useSelector((state) => state.profile);
    const { username } = useParams();
    const { posts } = useSelector((state) => state.posts);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);


    useEffect(() => {
        if (username) {
            dispatch(loadUserDetailsThunk(username));
            dispatch(loadUserPostsThunk(username));
        }
    }, [username, posts, authUser, authToken]);
    console.log(profileDetails, authUser)


    return (
        <>
            <Box sx={{ display: "flex", bgcolor: 'background.paper', padding: "1rem", borderRadius: "10px" }}>
                <div style={{ padding: "1rem" }}>
                    {profileDetails?.profileImg ?
                        <Avatar alt={`${profileDetails?.username}`} src={profileDetails?.profileImg} sx={{ width: "5rem", height: "5rem" }} />
                        :
                        <Avatar alt={`${profileDetails?.username}`} src="https://www.w3schools.com/howto/img_avatar.png" sx={{ width: "5rem", height: "5rem" }} />
                    }
                </div>
                <div style={{ flexGrow: "2", padding: "1rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <Typography variant="h5" sx={{
                                fontWeight: "800",
                                marginBottom: "0",
                            }} gutterBottom component="span">
                                {`${profileDetails?.firstName} ${profileDetails?.lastName}`}
                            </Typography>
                            <Typography variant="subtitle2" gutterBottom component="span">
                                {profileDetails?.username}
                            </Typography>
                        </div>
                        <div>
                            <Button onClick={handleOpen} variant="contained">Edit</Button>
                        </div>
                    </div>
                    <div>
                        <Typography variant="subtitle1" gutterBottom component="span">
                            { profileDetails?.bio}
                        </Typography>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                        <div>
                            {postsDetails.length} posts
                        </div>
                        <div>
                            {profileDetails?.following.length} following
                        </div>
                        <div>
                            {profileDetails?.followers.length} followers
                        </div>
                    </div>
                    <div>
                        <Typography variant="body1" gutterBottom component="span">
                             <a href={`${profileDetails?.link}`}>{profileDetails?.link}</a>
                        </Typography>
                    </div>
                </div>
            </Box>
            {postsDetails.length > 0 ? postsDetails.map((post) => {
                return (
                    <PostCard key={post._id} postData={post} authToken={authToken} />
                )
            }) : <p>No posts</p>}

            <ProfileEditModal open={open} setOpen={setOpen} userdata={authUser} />
        </>

    )
}