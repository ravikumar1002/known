import { Grid } from "@mui/material"
import { Header } from "../header/Header"
import { SideBar } from "../side-nav/SideBar"
import { SuggestionBar } from "../suggestion-box/SuggestionBar"

export const PageLayout = ({ children }) => {
    console.log(children)
    return (
        <>
            <div>
                <Header />
            </div>
            <Grid container
                sx={{ width: "100vw", padding: "1rem" }}
            >
                <Grid item  md={2} sm={0}>
                    <SideBar />
                </Grid>
                <Grid item sm={6} md={8}>
                    {children}
                </Grid>
                <Grid item display={{ xs: "none", md: "block" }} md={2}>
                    <SuggestionBar />
                </Grid>
            </Grid>
        </>
    )
}