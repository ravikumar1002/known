import Box from '@mui/material/Box'
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Input from '@mui/material/Input';
import { TextField, Typography } from '@mui/material';
import { styled, useTheme } from "@mui/material/styles";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCommentThunk } from '../../../thunk';



const TextFieldWithoutUnderLine = styled(TextField)(() => ({
    "&&&:before": {
        borderBottom: "none"
    },
    "&&:after": {
        borderBottom: "none"
    }

}));

export const CommentsSection = ({ postID }) => {

    const [commentPara, setCommentPara] = useState({ comment: "" })
    const { authToken } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const CommentEvent = (targetValue) => {
        setCommentPara((prev) => {
            return {
                ...prev,
                comment: targetValue
            }
        })
    }

    const postFn = (commentData) => {
        dispatch(addCommentThunk({
            postId : postID,
            commentData,
            authToken,
        }))
        setCommentPara({
            comment: ""
        })
    }

    return (

        <Box>
            <Divider />
            <div style={{
                display: "flex", alignItems: "center",
                gap: "0.5rem",
                padding: "0 0.5rem"
            }} >
                <Typography variant="h6" gutterBottom component="span">
                    😂
                </Typography>
                <TextFieldWithoutUnderLine placeholder="Add a Comment..." fullWidth value={commentPara.comment}
                    multiline variant="standard" onChange={(e) => {
                        CommentEvent(e.target.value)
                    }} />
                <Button variant="text" onClick={() => {
                    postFn(commentPara)
                }}>Post</Button>
            </div>

        </Box>

    )
}