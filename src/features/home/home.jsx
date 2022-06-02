import { PostCard } from "../../components"
import { InputPostCard } from "./components/input-post-card/InputPostCard"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getPostsThunk } from "../../thunk";

export const Home = () => {
    const { posts } = useSelector((state) => state.posts);
    const { authUser, authToken } = useSelector((state) => state.auth);
    const [followingPosts, setFollowingPosts] = useState([]);
    const dispatch = useDispatch()

    useEffect(() => {
        setFollowingPosts(posts)
    }, [authUser, posts]);


    console.log(followingPosts)

    return (
        <div>
            <InputPostCard />
            {followingPosts.length > 0 ? followingPosts.map(post => {
                return (
                    <PostCard key={post._id} postData={post} authToken={authToken} />
                )
            }) : <p>No post</p>}
        </div>
    )
}