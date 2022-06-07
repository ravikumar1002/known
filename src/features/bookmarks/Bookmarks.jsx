import { useSelector } from "react-redux";


export const Bookmarks = () => {

    const { authUser, authToken } = useSelector((state) => state.auth);
    console.log(authUser)
    return (
        <div>
            Bookmarks
        </div>
    )
}