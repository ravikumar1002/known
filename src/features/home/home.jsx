import { PostCard, Filter } from "../../components"
import { InputPostCard } from "./components/input-post-card/InputPostCard"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { useDocumentTitle } from "../../hooks/useDocumentTitile";

export const Home = () => {
    const { posts } = useSelector((state) => state.posts);
    const { authUser, authToken } = useSelector((state) => state.auth);
    const [followingPosts, setFollowingPosts] = useState([]);
    const dispatch = useDispatch()
    const [activeFilter, setActiveFilter] = useState("default")

    useEffect(() => {
        const filteredPosts = posts.filter(
            (currPost) =>
                authUser.following.find(
                    (user) => user.username === currPost.username
                ) || authUser.username === currPost.username
        );
        switch (activeFilter) {
            case "TRENDING":
                setFollowingPosts(
                    filteredPosts
                        .sort((a, b) => b.likes.likeCount - a.likes.likeCount)
                );
                break;
            case "LATEST POST":
                setFollowingPosts(
                    filteredPosts.sort(
                        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                    )
                );
                break;
            default:
                setFollowingPosts(filteredPosts);
        }
    }, [authUser, posts, activeFilter]);

    useEffect(() => {
        useDocumentTitle("Home")
    }, [])

    return (
        <div>
            <InputPostCard />
            <Filter setActiveFilter={setActiveFilter} />
            {followingPosts.length > 0 ? followingPosts.map(post => {
                return (
                    <PostCard key={post._id} postData={post} authToken={authToken} />
                )
            }) : <Typography
                component="h6"
                variant="h6"
                color="text.primary"
                sx={{ fontWeight: "600", textAlign: "center", marginTop: "1rem" }}
            >
                Follow some users to see feed
            </Typography>}
        </div>
    )
}