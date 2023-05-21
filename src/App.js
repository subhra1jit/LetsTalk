import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { LogIn } from "./authpages/index.jsx";

const App=()=>
{
  return(
    <>
       <Router>
        <Routes>
           <Route path="login" element={<LogIn/>}/> 
        </Routes>
       </Router>  
    </>
  )
}

export default App;