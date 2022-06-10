import { Link } from "react-router-dom"
import "./error.css"
import Button from '@mui/material/Button';

export const ErrorPage = () => {

    return (
        <div className="center">
            <div className="center-item">
                <img src="https://webdeasy.de/wp-content/uploads/2020/06/404-pages.jpg" alt="404 page not found" className="error-img" />
                <Link to="/" className="error-link_btn">Go to Feed</Link>

            </div>
        </div>
    )
}