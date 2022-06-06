import { useDispatch, useSelector } from "react-redux";
import Box from '@mui/material/Box';
import { logoutUser } from "../auth/authSlice"
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import { loadUserDetailsThunk, loadUserPostsThunk } from "../../thunk"
import { useEffect, useState } from "react";
import { PostCard } from "../../components";


export const Profile = () => {
    const dispatch = useDispatch()
    const { authUser, authToken } = useSelector((state) => state.auth);
    const { postsDetails, profileDetails } = useSelector((state) => state.profile);
    const { username } = useParams();
    const { posts } = useSelector((state) => state.posts);


    useEffect(() => {
        console.log(username)
        if (username) {
            dispatch(loadUserDetailsThunk(username));
            dispatch(loadUserPostsThunk(username));
        }
    }, [username, posts, authUser]);



    return (
        <>
            <Box sx={{ display: "flex", bgcolor: 'background.paper', padding: "1rem", borderRadius: "10px" }}>
                <div style={{ padding: "1rem" }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: "5rem", height: "5rem" }} />
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
                            <Button variant="contained">Edit</Button>
                        </div>
                    </div>
                    <div>
                        <Typography variant="subtitle1" gutterBottom component="span">
                            {profileDetails?.bio}
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
                            <a href={`${profileDetails?.links}`}>{profileDetails?.links}</a>
                        </Typography>
                    </div>
                </div>
            </Box>
            {postsDetails.length > 0 ? postsDetails.map((post) => {
                return (
                    <PostCard key={post._id} postData={post} authToken={authToken} />
                )
            }) : <p>No posts</p>}
        </>

    )
}