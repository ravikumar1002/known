
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { Typography } from '@mui/material';
import { CommentsSection } from "./CommentsSection"
import Box from '@mui/material/Box'
import { useState } from 'react';
import { AllCommentsModal } from './PostModal';
import { useDispatch, useSelector } from 'react-redux';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { likePostThunk, dislikePostThunk, addBookmarkThunk, removeBookmarkThunk } from "../../../thunk"


export const Footer = ({ post }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);

    const { authToken, authUser } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const checkLiked = () => post.likes.likedBy.find((likedUser) => likedUser.username === authUser.username)
    const checkedBookmark = () => authUser?.bookmarks.find((bookmarkId) => bookmarkId === post._id)
    const likeHandler = () => {
        if (checkLiked()) {
            dispatch(dislikePostThunk({
                postId: post._id,
                authToken: authToken
            }))
        } else {
            dispatch(likePostThunk({
                postId: post._id,
                authToken: authToken
            }))
        }
    }

    const bookmarkHandler = () => {
        if (checkedBookmark()) {
            dispatch(removeBookmarkThunk({
                postId: post._id,
                authToken: authToken
            }))
        } else {

            dispatch(addBookmarkThunk({
                postId: post._id,
                authToken: authToken
            }))
        }
    }

    return (
        <Box>
            <div style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", padding: "0.5rem" }}>
                <div>
                    <IconButton aria-label="like" color={`${checkLiked() ? "error" : "default"}`} onClick={() => {
                        likeHandler()
                    }}>
                        <FavoriteIcon />
                    </IconButton>
                    <Typography variant="body-2" gutterBottom component="span">
                        {post?.likes?.likeCount}
                    </Typography>
                    <IconButton aria-label="comment" onClick={handleOpen} >
                        <CommentIcon />
                    </IconButton>
                    <Typography variant="body-2" gutterBottom component="span">
                        {post?.comments?.length}
                    </Typography>
                </div>
                <div>
                    <IconButton aria-label="Bookmark" color={`${checkedBookmark() ? "error" : "default"}`} onClick={() => {
                        bookmarkHandler()
                    }}>
                        <BookmarkIcon />
                    </IconButton>
                </div>
            </div>
            <CommentsSection postID={post._id} />
            <AllCommentsModal open={open} setOpen={setOpen} handleOpen={handleOpen} post={post} />
        </Box>
    )
}