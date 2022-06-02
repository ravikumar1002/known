
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { Typography } from '@mui/material';
import { CommentsSection } from "./CommentsSection"
import Box from '@mui/material/Box'
import { useState } from 'react';
import { TransitionsModal } from './PostModal';

export const Footer = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    return (
        <Box>
            <div style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", padding: "0.5rem" }}>
                <div>
                    <IconButton aria-label="like">
                        <FavoriteBorderIcon />
                    </IconButton>
                    <Typography variant="body-2" gutterBottom component="span">
                        1
                    </Typography>
                    <IconButton aria-label="comment" onClick={handleOpen} >
                        <CommentIcon />
                    </IconButton>
                </div>
                <div>
                    <IconButton aria-label="Bookmark">
                        <BookmarkIcon />
                    </IconButton>
                </div>
            </div>
            <CommentsSection />
            <TransitionsModal open={open} setOpen={setOpen} handleOpen={handleOpen} />
        </Box>
    )
}