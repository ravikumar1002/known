import { useDispatch } from "react-redux";

import { logoutUser } from "../auth/authSlice"
import { useLocation, useNavigate } from 'react-router-dom';

export const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <>
            <p>Profile</p>
            <button
                onClick={() => {
                    dispatch(logoutUser())
                    navigate("/signup", { replace: true })
                }}
            >Logout</button>
        </>
    )
}