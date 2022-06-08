
import { PostMenu } from "./PostMenu"
import { deleteCommentThunk, editCommentThunk } from "../../../thunk"
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import Box from '@mui/material/Box';

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

export const SingleComments = ({ comment, post }) => {

    const [editComment, setEditComment] = useState(false)
    const [editCommentPara, setEditCommentPara] = useState({ comment: "" })
    const { authToken, authUser } = useSelector((state) => state.auth);
    const { users } = useSelector((state) => state.users);

    const dispatch = useDispatch();

    const CommentEvent = (targetValue) => {
        setEditCommentPara((prev) => {
            return {
                ...prev,
                comment: targetValue
            }
        })
    }

    const getUserDetail = (username) => users.find((user) => user.username === username)

    return (
        <div>
            <div style={{ display: "flex", width: "100%", alignItems: "center", }}>
                <Item>
                    <Avatar alt={comment.username} src={getUserDetail(comment.username).profileImg} />
                </Item>
                <Item sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" gutterBottom component="span">
                        {comment.username}
                    </Typography>
                </Item>
                {authUser.username === comment.username &&
                    <PostMenu>
                        <MenuItem onClick={() => {
                            setEditCommentPara((prev) => {
                                return {
                                    ...prev,
                                    comment: comment?.text?.comment
                                }
                            })
                            setEditComment(true)
                            handleClose(e);
                        }}>Edit</MenuItem>
                        <MenuItem onClick={() => {
                            dispatch(deleteCommentThunk({
                                postId: post._id,
                                commentId: comment._id,
                                authToken: authToken,
                            }))
                        }}>Delete</MenuItem>
                    </PostMenu>}
            </div>
            <div>
                {editComment ? <div> <input type="text" value={editCommentPara?.comment} onChange={(e) => {
                    CommentEvent(e.target.value)
                }} />  <button onClick={() => {
                    dispatch(editCommentThunk({
                        postId: post._id,
                        commentId: comment._id,
                        commentData: editCommentPara,
                        authToken: authToken,
                    }))
                    setEditCommentPara({
                        comment: ""
                    })
                    setEditComment(false)

                }}>Edit</button></div> :
                    <p>{comment?.text?.comment}</p>
                }
            </div>
        </div>
    )
} 