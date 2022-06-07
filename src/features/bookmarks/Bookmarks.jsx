import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PostCard } from "../../components";


export const Bookmarks = () => {
    const { authUser, authToken } = useSelector((state) => state.auth);
    const { posts } = useSelector((state) => state.posts);
    const getPost = (postId) => posts.find((currPost) => currPost._id === postId);
    return (
        <div>
            {authUser.bookmarks.length === 0 ? <div>
                <p>Bookmarks</p>
            </div> : authUser.bookmarks.map(postId => {
                return (
                    <PostCard key={postId} postData={getPost(postId)} authToken={authToken} />
                )
            })
            }

        </div>
    )
}