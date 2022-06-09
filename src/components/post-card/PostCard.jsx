import { Avatar, Button } from "@mui/material"
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import { useState } from "react";
import { InputPostCard } from "../../features/home/components/input-post-card/InputPostCard";
import { PostMenu, Footer } from "./components"
import { deletePostThunk } from '../../thunk';
import { useDispatch, useSelector } from "react-redux";
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-router-dom";

const Item = (props) => {
    const { sx, ...other } = props;
    return (
        <Box xs={{ width: "90%" }}
            sx={{
                padding: "0.5rem",
                color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
                borderRadius: 2,
                fontSize: '0.875rem',
                fontWeight: '700',
                ...sx,
            }}
            {...other}
        />
    );
}


export const PostCard = ({ postData, authToken }) => {

    const [editPost, setEditPost] = useState(false)
    const dateFormat = new Date(postData.updatedAt).toLocaleDateString('en-GB')
    const { users } = useSelector((state) => state.users);
    const { authUser } = useSelector((state) => state.auth);

    const dispatch = useDispatch();

    const getUser = (username) => users.find(user => user.username === username)

    return (
        <div style={{ margin: "1rem 0" }}>
            {editPost
                ?
                <InputPostCard updatePost={true} updateData={postData} setEditPost={setEditPost} />
                :
                <Box
                    sx={{ p: 1, bgcolor: 'background.paper', borderRadius: 1 }}
                >
                    <div style={{ display: "flex", width: "100%", alignItems: "center", }}>
                        <Item>
                            <Link to={`/profile/${postData.username}`} >
                                <Avatar alt={postData.username} src={getUser(postData.username)?.profileImg} />
                            </Link>
                        </Item>
                        <Item sx={{ flexGrow: 1 }} >
                            <Link to={`/profile/${postData.username}`} variant="h5" gutterBottom component="span" style={{ color: "black", display: "block", textDecoration: "none" }}>
                                <Typography variant="h6" gutterBottom component="span" sx={{ fontWeight: "600" }}>
                                    {`${getUser(postData.username)?.firstName} ${getUser(postData.username)?.lastName}`}
                                </Typography>
                                <Typography variant="subtitle2" gutterBottom component="span" sx={{ marginLeft: "0.5rem" }}>
                                    @{postData.username}
                                </Typography>
                            </Link>
                            <Typography variant="overline" gutterBottom component="span" sx={{ lineHeight: "0" }}>
                                {dateFormat}
                            </Typography>
                        </Item>
                        {
                            authUser.username === postData.username && <PostMenu>
                                <MenuItem onClick={() => {
                                    setEditPost(true)
                                }}>Edit</MenuItem>
                                <MenuItem onClick={() => {
                                    dispatch(deletePostThunk({
                                        postId: postData._id,
                                        authToken: authToken,
                                    }))
                                }}>Delete</MenuItem>
                            </PostMenu>
                        }

                    </div>
                    <div>
                        <Typography variant="subtitle1" gutterBottom component="p" sx={{ marginLeft: "1rem" }}>
                            {postData.content}
                        </Typography>
                    </div>
                    <div>
                        <Footer post={postData} />
                    </div>
                </Box>
            }

        </div>
    )
}

