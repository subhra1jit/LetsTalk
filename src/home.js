import { Footer, Navbar } from "./NavigationBars";

const Home=()=>
{
    return(
        <>
          <Navbar/>
          <div className="w-full py-5 flex justify-center items-center">
          <div className="bg-[url('./images/mainbg2.jpg')] w-11/12 h-screen relative top-20 left-0  bg-cover  bg-no-repeat bg-center rounded-2xl flex items-center md:justify-start z-0 ">
            <div className="flex flex-col gap-2 absolute bottom-32 md:bottom-40 left-5 md:left-8  ">
              <h1 className="md:text-7xl font-medium text-white text-4xl  ">Welcome to <br/> Let's Talk</h1>
              <p className="md:text-base text-white font-semibold text-sm">A user friendly,free way to connect with your close friends</p>
              <p className="text-sm text-white">Now sign In to start your jouney</p>
              <button className="bg-gradient-to-r from-pink-500 to-indigo-500 font-bold text-center text-base py-2 px-3 w-36 rounded-md hover:text-white">Sign In</button>
            </div>
          </div>
          </div>
          <div className="py-14">
             hello
          </div>
          <div className="py-14">
          <Footer/>
          </div>
        </>
    )
}

export default Home;