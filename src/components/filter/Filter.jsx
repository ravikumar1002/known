import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SortIcon from '@mui/icons-material/Sort';
import { useEffect, useState } from 'react';
export const Filter = ({ setActiveFilter }) => {

    const [activeButton, setActiveButton] = useState()

    useEffect(() => {
        setActiveFilter(activeButton)
    }, [activeButton])

    return (
        <Stack direction="row" spacing={2} sx={{ padding: "0.5rem 1rem" }}>
            <Button variant={activeButton === "TRENDING" ? "contained" : "outlined"} fullWidth startIcon={<WhatshotIcon />} onClick={(e) => {
                setActiveButton(e.target.innerText)
            }}>
                Trending
            </Button>
            <Button variant={activeButton === "LATEST POST" ? "contained" : "outlined"} fullWidth startIcon={<SortIcon />} onClick={(e) => {
                setActiveButton(e.target.innerText)
            }}>
                Latest Post
            </Button>
        </Stack>
    )
}