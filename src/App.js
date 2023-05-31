import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Chat from "./ChatFolder/chat";

const App=()=>
{
    return(
        <Router>
            <Routes>
                <Route path="/chat" element={<Chat/>}/>
            </Routes>
        </Router>
    )
}

export default App;