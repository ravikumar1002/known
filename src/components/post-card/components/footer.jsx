
import IconButton from '@mui/material/IconButton';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import BookmarkIcon from '@mui/icons-material/Bookmark';

export const Footer = () => {
    return (
        <div style={{ display: "flex", width: "100%", alignItems: "center", padding: "0.5rem" }}>
            <IconButton aria-label="like">
                <ThumbUpIcon />
            </IconButton>
            <IconButton aria-label="comment">
                <CommentIcon />
            </IconButton>
            <IconButton aria-label="Bookmark">
                <BookmarkIcon />
            </IconButton>
        </div>
    )
}