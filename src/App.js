import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Forget, LogIn, SignUp } from "./authpages/index";

const App=()=>
{
  return(
    <>
       <Router>
        <Routes>
           <Route path="login" element={<LogIn/>}/> 
        </Routes>
        <Routes>
           <Route path="register" element={<SignUp/>}/> 
        </Routes>
        <Routes>
           <Route path="forget" element={<Forget/>}/> 
        </Routes>
       </Router>  
    </>
  )
}

export default App;