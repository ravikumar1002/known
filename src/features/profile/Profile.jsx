import { useDispatch } from "react-redux";
import Box from '@mui/material/Box';
import { logoutUser } from "../auth/authSlice"
import { useLocation, useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';

export const Profile = () => {

    return (
        <>
            <Box>
                 <div>
                 <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                 </div>
                 <div>
                     
                 </div>
            </Box>
        </>

    )
}