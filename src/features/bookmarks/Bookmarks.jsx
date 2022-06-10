import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { PostCard } from "../../components";
import { useDocumentTitle } from "../../hooks/useDocumentTitile";


export const Bookmarks = () => {
    const { authUser, authToken } = useSelector((state) => state.auth);
    const { posts } = useSelector((state) => state.posts);
    const getPost = (postId) => posts.find((currPost) => currPost._id === postId);

    useEffect(() => {
        useDocumentTitle("Bookmarks")
    }, [])

    return (
        <div>
            {authUser.bookmarks.length === 0 ? <div>
                <Typography variant="h6" align='center'  sx={{ fontWeight: "600", textAlign: "center", marginTop: "1rem" }}  gutterBottom component="div">
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