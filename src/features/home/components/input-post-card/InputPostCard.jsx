import { useState } from 'react';
import Box from '@mui/material/Box';
import { Avatar, Button } from '@mui/material';
import TextField from '@mui/material/TextField';


const Item = (props) => {
    const { sx, ...other } = props;
    return (
        <Box xs={{ width: "90%" }}
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
    const [value, setValue] = useState('');
    

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div style={{ width: '100%' }}>
            <Box
                sx={{ p: 1, bgcolor: 'background.paper', borderRadius: 1 }}
            >
                <div style={{ display: "flex", width: "100%" }}>
                    <Item>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </Item>
                    <Item sx={{ flexGrow: 1 }}>
                        <TextField
                            id="outlined-multiline-flexible"
                            placeholder='Write something'
                            multiline
                            fullWidth
                            value={value}
                            onChange={handleChange}
                        />
                    </Item>
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "end",
                    padding: "0 1rem"
                }}>
                    <Button variant="contained" >Post</Button>
                </div>
            </Box>
        </div>
    )
}