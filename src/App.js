import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./NavigationBars/footer";
import Navbar from "./NavigationBars/navbar";
import { Forget, LogIn, SignUp } from "./authpages/index";
import Home from "./home";

const App=()=>
{
    return(
        <Router>
           <Routes>
           <Route path="navbar" element={<Navbar/>}/>
           <Route path="footer" element={<Footer/>}/>
           <Route path="/" element={<Home/>}/>
           <Route path="login" element={<LogIn/>}/> 
           <Route path="register" element={<SignUp/>}/> 
           <Route path="forget" element={<Forget/>}/>
           </Routes>
        </Router>
    )
}

export default App;