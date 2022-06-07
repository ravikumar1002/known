import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { PostCard } from "../../components";


export const Bookmarks = () => {
    const { authUser, authToken } = useSelector((state) => state.auth);
    const { posts } = useSelector((state) => state.posts);
    const getPost = (postId) => posts.find((currPost) => currPost._id === postId);
    return (
        <div>
            {authUser.bookmarks.length === 0 ? <div>
                <Typography variant="h6" align='center'  gutterBottom component="div">
                    No Bookmarks Yet
                </Typography>
            </div> : authUser.bookmarks.map(postId => {
                return (
                    <PostCard key={postId} postData={getPost(postId)} authToken={authToken} />
                )
            })
            }

        </div>
    )
}