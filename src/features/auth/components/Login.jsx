import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from '../../../thunk';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useEffect } from 'react';



export const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const { authToken } = useSelector((state) => state.auth);


    const loginHandler = (e) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        const dataFormat = {
            password: data.get('password'),
            username: data.get('username'),
        }
        dispatch(loginThunk(dataFormat));
    }

    const loginAsGuest = (e) => {
        e.preventDefault()
        const dataFormat = {
            password: "earth",
            username: "earth",
        }
        dispatch(loginThunk(dataFormat));
    }


    useEffect(() => {
        authToken &&
            navigate(location?.state?.from?.pathname || "/", { replace: true });
    }, [authToken]);


    return (

        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Log in
                </Typography>
                <Box component="form" onSubmit={loginHandler} Validate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="username"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        log In
                    </Button>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 1, mb: 2 }}
                        onClick={loginAsGuest}
                    >
                        log As Guest
                    </Button>

                    <Grid container>
                        <Grid item>
                            <Link to="/signup" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}
