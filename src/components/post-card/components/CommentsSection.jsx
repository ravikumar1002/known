import Box from '@mui/material/Box'
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Input from '@mui/material/Input';
import { TextField, Typography } from '@mui/material';
import { styled, useTheme } from "@mui/material/styles";



const TextFieldWithoutUnderLine = styled(TextField)(() => ({
    "&&&:before": {
        borderBottom: "none"
    },
    "&&:after": {
        borderBottom: "none"
    }

}));

export const CommentsSection = () => {

    return (
        <Box>
            <div>
                <Typography variant="caption" gutterBottom component="span">
                    View all 2 comments
                </Typography>
            </div>
            <Divider />
            <div style={{
                display: "flex", alignItems: "center",
                gap: "0.5rem",
                padding: "0 0.5rem"
            }} >
                <Typography variant="h6" gutterBottom component="span">
                    😂
                </Typography>
                <TextFieldWithoutUnderLine placeholder="Add a Comment..." fullWidth
                    multiline variant="standard" />
                <Button variant="text">Post</Button>
            </div>

        </Box>

    )
}