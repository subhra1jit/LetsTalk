import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./NavigationBars/navbar";

const App=()=>
{
    return(
        <Router>
           <Routes>
               <Route path="navbar" element={<Navbar/>}/>
           </Routes>
        </Router>
    )
}

export default App;