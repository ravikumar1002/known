import { Header } from "../header/Header"
import { SideBar } from "../side-nav/SideBar"
import { SuggestionBar } from "../suggestion-box/SuggestionBar"

export const PageLayout = ({ children }) => {
            console.log(children)
    return (
        <div>
            <div>
                <Header />
            </div>
            <div> 
                <div>
                    <SideBar />
                </div>
                <div>
                    {children}
                </div>
                <div>
                    <SuggestionBar />
                </div>
            </div>
        </div>
    )
}