import { useState } from 'react';
import Box from '@mui/material/Box';
import { Avatar, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from "react-redux";
import { addPostThunk, editPostThunk } from "../../../../thunk";

const Item = (props) => {
    const { sx, ...other } = props;
    return (
        <Box xs={{ width: "90%" }}
            sx={{
                p: 1,
                m: 1,
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

export const InputPostCard = ({ updatePost, updateData, setEditPost }) => {
    const { authToken, authUser } = useSelector((state) => state.auth);
    const { profileDetails} = useSelector((state) => state.profile);
    const [inputValue, setInputValue] = useState(updatePost ? { ...updateData } : { content: "" });
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setInputValue(prev => {
            return {
                ...prev,
                content: event.target.value
            }
        });
    };

    const createNewPost = (postData) => {
        if (updatePost) {
            dispatch(editPostThunk({
                postData,
                authToken,
            }))
            setInputValue({
                content: ""
            })
            setEditPost(false)
        } else {
            dispatch(addPostThunk({
                postData,
                authToken,
            }))
            setInputValue({
                content: ""
            })
        }

    }


    return (
        <div style={{ width: '100%' }}>
            <Box
                sx={{ p: 1, bgcolor: 'background.paper', borderRadius: 1 }}
            >
                <div style={{ display: "flex", width: "100%" }}>
                    <Item>
                        <Avatar alt={authUser?.firstName} src={authUser?.profileImg} />
                    </Item>
                    <Item sx={{ flexGrow: 1 }}>
                        <TextField
                            id="outlined-multiline-flexible"
                            placeholder='Write something'
                            multiline
                            fullWidth
                            value={inputValue.content}
                            onChange={handleChange}
                        />
                    </Item>
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "end",
                    padding: "0 1rem"
                }}>
                    <Button variant="contained" onClick={() => createNewPost(inputValue)}>Post</Button>
                </div>
            </Box>
        </div>
    )
}