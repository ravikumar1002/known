import { Avatar, Button } from "@mui/material"
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import { PostMenu, Footer } from "./components"

const Item = (props) => {
    const { sx, ...other } = props;
    return (
        <Box xs={{ width: "90%" }}
            sx={{
                padding: "0.5rem",
                color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
                borderRadius: 2,
                fontSize: '0.875rem',
                fontWeight: '700',
                ...sx,
            }}
            {...other}
        />
    );
}


export const PostCard = () => {

    return (
        <div style={{ margin: "1rem 0" }}>
            <Box
                sx={{ p: 1, bgcolor: 'background.paper', borderRadius: 1 }}
            >
                <div style={{ display: "flex", width: "100%", alignItems: "center", }}>
                    <Item>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </Item>
                    <Item sx={{ flexGrow: 1 }}>
                        <Typography variant="h5" gutterBottom component="span">
                            Heading
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom component="span" sx={{ marginLeft: "1rem" }}>
                            00/00/0000
                        </Typography>
                    </Item>
                    <PostMenu />
                </div>
                <div>
                    <Typography variant="subtitle1" gutterBottom component="p" sx={{ marginLeft: "1rem" }}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa accusantium quia laborum numquam dignissimos qui asperiores eius nemo odit excepturi.
                    </Typography>
                </div>
                <div>
                    <Footer />
                </div>
            </Box>
        </div>
    )
}