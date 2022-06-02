import { PostCard } from "../../components"
import { InputPostCard } from "./components/input-post-card/InputPostCard"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

export const Home = () => {
    const { posts } = useSelector((state) => state.posts);
    const { authUser } = useSelector((state) => state.auth);
    const [followingPosts, setFollowingPosts] = useState([]);

    useEffect(() => {
        console.log(posts)
        const filteredPosts = posts.filter(
            (currPost) =>
                authUser.following.find(
                    (user) => user.username === currPost.username
                ) || authUser.username === currPost.username
        );

        setFollowingPosts(filteredPosts);
    }, [authUser, posts]);

    console.log(followingPosts)

    return (
        <div>
            <InputPostCard />
            {followingPosts.length > 0 ? followingPosts.map(post => {
                return (
                    <PostCard key={post._id} postData={post} />
                )
            }) : <p>No post</p>}
        </div>
    )
}