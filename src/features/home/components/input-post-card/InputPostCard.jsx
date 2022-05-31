import * as React from 'react';
import Box from '@mui/material/Box';
import { Avatar } from '@mui/material';
import TextField from '@mui/material/TextField';
function Item(props) {
    const { sx, ...other } = props;
    return (
        <Box xs={{width: "90%"}}
            sx={{
                p: 1,
                m: 1,
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

export const InputPostCard = () => {

    return (

        <div style={{ width: '100%' }}>
            <Box
                sx={{ display: 'flex', p: 1, bgcolor: 'background.paper', borderRadius: 1 }}
            >
                <Item>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </Item>
                <Item sx={{ flexGrow: 1 }}><TextField fullWidth id="fullWidth" /></Item>

            </Box>
        </div>



    )
}