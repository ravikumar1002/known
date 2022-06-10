import { useDispatch, useSelector } from "react-redux";
import Box from '@mui/material/Box';
import { logoutUser } from "../auth/authSlice"
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import { loadUserDetailsThunk, loadUserPostsThunk } from "../../thunk"
import { useEffect, useState } from "react";
import { PostCard, ProfileEditModal } from "../../components";
import { ModalBox } from "../../components"
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { unfollowUserThunk, followUserThunk } from "../../thunk"
import { FollowerLayout } from "./follower";

export const Profile = () => {
    const dispatch = useDispatch()
    const [openEdit, setOpenEdit] = useState(false);
    const [openFollowingModal, setOpenFollowingModal] = useState(false);
    const [openFollowersModal, setOpenFollowersModal] = useState(false);



    const { authUser, authToken } = useSelector((state) => state.auth);
    const { postsDetails, profileDetails, profileLoading, postLoading } = useSelector((state) => state.profile);
    const { users } = useSelector((state) => state.users);
    const { username } = useParams();
    const { posts } = useSelector((state) => state.posts);
    const handleOpenEdit = () => setOpenEdit(true);
    const handleOpenFollowersModal = () => {
        setOpenFollowersModal(true)
    };

    const handleOpenFollowingModal = () => {
        setOpenFollowingModal(true)
    };

    useEffect(() => {
        if (username) {
            dispatch(loadUserDetailsThunk(username));
            dispatch(loadUserPostsThunk(username));
        }
    }, [username, posts, users, authUser, authToken]);


    const unfollowHandler = (followUserId) => {
        dispatch(unfollowUserThunk({ followUserId: followUserId, authToken: authToken }))
    }

    const followHandler = (followUserId) => {
        dispatch(followUserThunk({ followUserId: followUserId, authToken: authToken }))
    }

    const isFollowed = (username) => authUser.following.find(user => user.username === username)

    console.log(profileLoading, postLoading)
    console.log(isFollowed(username))

    return (
        <> {profileLoading === "loading" ? <p>Loading</p> :
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
                                @{profileDetails?.username}
                            </Typography>
                        </div>
                        <div>
                            {authUser.username === username ?
                                <Button onClick={handleOpenEdit} variant="contained">Edit</Button> :
                                isFollowed(username) ?
                                    <Button onClick={() => {
                                        unfollowHandler(profileDetails._id)
                                    }} variant="contained">unfollow</Button>
                                    :
                                    <Button onClick={() => {
                                        followHandler(profileDetails._id)
                                    }} variant="contained">follow</Button>
                            }
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
                        <div onClick={handleOpenFollowingModal} style={{ cursor: "pointer" }}>
                            {profileDetails?.following.length} following
                        </div>
                        <div onClick={handleOpenFollowersModal} style={{ cursor: "pointer" }}>
                            {profileDetails?.followers.length} followers
                        </div>
                    </div>
                    <div>
                        <Typography variant="body1" gutterBottom component="span">
                            <a href={`${profileDetails?.link}`}>{profileDetails?.link}</a>
                        </Typography>
                    </div>
                </div>
            </Box>}
            {postLoading === "loading" ? <p>Post Loading</p> : <>
                {postsDetails.length > 0 ? postsDetails.map((post) => {
                    return (
                        <PostCard key={post._id} postData={post} authToken={authToken} />
                    )
                }) : <Typography
                    component="h6"
                    variant="h6"
                    color="text.primary"
                    sx={{ fontWeight: "600", textAlign: "center", marginTop: "1rem" }}
                >
                    No Posts
                </Typography>}
            </>
            }

            <ProfileEditModal open={openEdit} setOpen={setOpenEdit} userdata={authUser} />
            {authUser.username === username && <ModalBox open={openFollowingModal} setOpen={setOpenFollowingModal} userdata={authUser}>
                {
                    authUser.following.length > 0 ?
                        authUser.following.map((followingUser) => {
                            return (
                                <FollowerLayout key={followingUser._id} user={followingUser} unfollowHandler={unfollowHandler} type={"following"} />
                            )
                        })
                        : <div>
                            <Typography
                                component="h6"
                                variant="h6"
                                color="text.primary"
                                sx={{ fontWeight: "600", textAlign: "center", marginTop: "1rem" }}
                            >
                                Start Following
                            </Typography>
                        </div>
                }
            </ModalBox>}
            {authUser.username === username && <ModalBox open={openFollowersModal} setOpen={setOpenFollowersModal} userdata={authUser} >
                {
                    authUser.followers.length > 0 ?
                        authUser.followers.map((followersUser) => {
                            return (
                                <FollowerLayout key={followersUser._id} user={followersUser} unfollowHandler={unfollowHandler} followHandler={followHandler} type={"followers"} />
                            )
                        })
                        : <div>
                            : <Typography
                                component="h6"
                                variant="h6"
                                color="text.primary"
                                sx={{ fontWeight: "600", textAlign: "center", marginTop: "1rem" }}
                            >
                                share you thought to make follower
                            </Typography>
                        </div>
                }
            </ModalBox>}
        </>

    )
}