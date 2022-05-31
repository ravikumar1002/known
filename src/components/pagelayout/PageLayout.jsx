import { Grid } from "@mui/material"
import { Header, SideBar, SuggestionBox } from "../../components"

export const PageLayout = ({ children }) => {
    return (
        <>
            <div>
                <Header />
            </div>
            <Grid container spacing={4}
                justifyContent="space-between"
                sx={{ padding: "1rem" }}
            >
                <Grid item xs={0} sm={3} md={2} position={{ xs: "fixed", sm: "static" }}>
                    <SideBar />
                </Grid>
                <Grid item xs={12} sm={9} md={6} >
                    {children}
                </Grid>
                <Grid item display={{ xs: "none", md: "block" }} xs={3}>
                    <SuggestionBox />
                </Grid>
            </Grid>
        </>
    )
}