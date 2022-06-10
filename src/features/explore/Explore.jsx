import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PostCard } from "../../components";
import { useDocumentTitle } from "../../hooks/useDocumentTitile";


export const Explore = () => {
    const [allposts, setAllPosts] = useState([])
    const { posts } = useSelector((state) => state.posts);
    const { authUser, authToken } = useSelector((state) => state.auth);

    const getUnfollowPost = () => posts.filter((post) => post.username !== authUser.username && !authUser.following.find((user) => user.username === post.username))

    useEffect(() => {
        const unfollowPostData = getUnfollowPost()
        setAllPosts(unfollowPostData)
    }, [posts, authUser])

    useEffect(() => {
        useDocumentTitle("Explore")
    }, [])

    return (
        <div>
            {allposts.length > 0 && allposts.map(post => {
                return (
                    <PostCard key={post._id} postData={post} authToken={authToken} />
                )
            })}

            <div>
            </div>
        </div>
    )
}