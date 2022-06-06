import { useDispatch, useSelector } from "react-redux";
import { editUserProfileThunk } from "../../thunk"

import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar, TextField } from '@mui/material';
import Badge from '@mui/material/Badge';
import axios from "axios";
import { Image } from "@mui/icons-material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    borderRadius: "10px",
};

const shapeStyles = { bgcolor: 'primary.main', width: 40, height: 40 };
const shapeCircleStyles = { borderRadius: '50%' }



export const ProfileEditModal = ({ open, setOpen, userData }) => {

    const [profileImg, setProfileImg] = useState(userData?.profileImg ? userData.profileImg : "https://www.w3schools.com/howto/img_avatar.png")
    const [bio, setBio] = useState(userData?.bio ? userData.bio : "")
    const [link, setLink] = useState(userData?.link ? userData.link : "")
    const dispatch = useDispatch()
    const { authUser, authToken } = useSelector((state) => state.auth);


    const handleClose = () => setOpen(false);

    const editProfile = () => {
        dispatch(editUserProfileThunk({
            userDetails: {
                profileImg: profileImg,
                bio: bio,
                link: link,
            },
            authToken: authToken,
        }))
        handleClose()
    }

    const uploadImage = async (image) => {
        console.log(image[0])
        const data = new FormData();
        data.append("file", image[0]);
        data.append("upload_preset", "avullsqo");
        console.log(data.get("file"))

        const requestOptions = {
            method: "POST",
            body: data,
        };
        await fetch(
            "https://api.cloudinary.com/v1_1/kumarravi/image/upload",
            requestOptions
        )
            .then((response) => response.json())
            .then((data) => {
                setProfileImg(data.url);
            })
            .catch((error) => {
                console.error(error);
            });;
    };

    console.log(profileImg)

    return (
        <div>
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                    <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
                        <Typography variant="body1" sx={{ fontWeight: "600" }} gutterBottom component="span">
                            Avatar
                        </Typography>

                        <Badge color="secondary" overlap="circular" badgeContent=" " anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
                            {userData?.profileImg ?
                                <Avatar
                                    alt={`${userData.username}`}
                                    src={`${profileImg}`}
                                    sx={{ width: 56, height: 56 }}
                                /> :
                                <Avatar
                                    alt="Remy Sharp"
                                    src={`${profileImg}`}
                                    sx={{ width: 56, height: 56 }}
                                />}
                            <input
                                type="file"
                                visibility="hidden"
                                accept="image/*"
                                onChange={(e) => uploadImage(e.target.files)}
                            />
                        </Badge>
                    </div>
                    <Image />
                    <div>
                        <Typography variant="body1" sx={{ fontWeight: "600" }} gutterBottom component="span">
                            Bio
                        </Typography>
                        <TextField
                            id="outlined-multiline-static"
                            multiline
                            rows={4}
                            fullWidth
                            value={`${bio}`}
                            onChange={(e) => {
                                setBio(e.target.value)
                            }}
                        />
                    </div>
                    <div>
                        <Typography variant="body1" sx={{ fontWeight: "600" }} gutterBottom component="span">
                            Link
                        </Typography>
                        <TextField
                            id="outlined-multiline-static"
                            multiline
                            fullWidth
                            value={`${link}`}
                            onChange={(e) => {
                                setLink(e.target.value)
                            }}
                        />
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <Button variant="contained" color="error" onClick={handleClose}>Cancel</Button>
                        <Button variant="contained" onClick={editProfile}>Save</Button>
                    </div>
                </Box>

            </Modal>
        </div >
    )
}