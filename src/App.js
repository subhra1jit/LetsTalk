import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./NavigationBars/footer";
import Navbar from "./NavigationBars/navbar";
import Home from "./home";

const App=()=>
{
    return(
        <Router>
           <Routes>
           <Route path="navbar" element={<Navbar/>}/>
           <Route path="footer" element={<Footer/>}/>
           <Route path="/" element={<Home/>}/>
           </Routes>
        </Router>
    )
}

export default App;