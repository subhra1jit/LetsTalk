import logo1 from "../images/logo1.png";
import { Footer, Navbar } from "../NavigationBars";

const  Forget =()=>
{
    return(
      <>
      <Navbar/>
       <div className="w-full h-auto flex flex-col justify-center items-center gap-5 px-5 py-36">
        <img src={logo1} className="w-44 h-28 rounded-md" alt="logo are there" />
        <p className="text-sm text-center ">Let's Talk more freeely</p>
        <h1 className="text-2xl text-left py-2">Forget Password</h1>
        <form className="flex flex-col gap-3 px-5 w-full md:w-1/2 lg:w-2/5 rounded-md shadow-md shadow-neutral-400 py-8">
        <div className="email flex flex-col gap-2">
          <label htmlFor="email" className="text-lg font-bold text-slate-950">
            Email
          </label>
          <input
            type="email"
            className="w-full px-3 py-2 bg-slate-100 rounded-md"
            placeholder="Enter Your Email"
          />
        </div>
        <div className="pt-2">
          <button className="bg-gradient-to-r from-pink-500 to-indigo-500 font-bold text-center text-base py-2 px-3 w-full rounded-md hover:text-white">
            Submit
          </button>
        </div>
        </form>
       </div>
       <Footer/>
       </>
    )
}

export default Forget;