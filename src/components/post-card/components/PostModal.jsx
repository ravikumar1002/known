import { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const TransitionsModal = ({ handleOpen, open, setOpen }) => {
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
                <Box sx={style}>
                    <div style={{ display: "flex", width: "100%", alignItems: "center", }}>
                        <Item>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </Item>
                        <Item sx={{ flexGrow: 1 }}>
                            <Typography variant="h5" gutterBottom component="span">
                                {postData.username}
                            </Typography>
                        </Item>
                    </div>
                </Box>
            </Fade>
        </Modal>
    );
}