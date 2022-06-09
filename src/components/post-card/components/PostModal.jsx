import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { SingleComments } from './SingleComments';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import { Divider } from '@mui/material';
import React from 'react';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "60%",
    height: "70%",
    overflow: "auto",
    bgcolor: 'background.paper',
    boxShadow: 24,
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
};


export const AllCommentsModal = ({ commentData, open, setOpen, handleOpen, post }) => {

    const handleClose = () => setOpen(false);

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <Box sx={style} >
                    {post?.comments?.length > 0 ?
                        post.comments.map((comment) => {
                            return (
                                <React.Fragment key={comment._id}>
                                    <SingleComments comment={comment} post={post} key={comment._id} handleClose={handleClose} />
                                    <Divider />
                                </React.Fragment>
                            )
                        })
                        :
                        <p>No Comments</p>
                    }
                </Box>
            </Fade>
        </Modal>
    );
} 