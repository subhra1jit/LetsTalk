import { useState } from "react";
import logo1 from "../images/logo1.png";

export default function Navbar() {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="w-full bg-white shadow fixed z-50">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl lg:items-center lg:flex lg:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 lg:block">
                        <a href="/">
                            <img src={logo1} alt="logo of the website" className="w-10 h-10 cursor-pointer" />
                        </a>
                        <div className="lg:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-black"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-black"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0  ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
                            <li className="text-black hover:text-indigo-400">
                                <a href="/">Home</a>
                            </li>
                            <li className="text-black hover:text-indigo-400">
                                <a href="/chat">Chat Room</a>
                            </li>
                            <li className="text-black hover:text-indigo-400">
                                <a href="/about">About US</a>
                            </li>
                            <li className="text-black hover:text-indigo-700">
                                <a href="contact">Contact US</a>
                            </li>
                        </ul>

                        <div className="mt-3 py-2 lg:hidden flex justify-between items-center gap-3">
                    <a
                        href="/login"
                        className="inline-block w-full px-4 py-2 text-center text-white bg-indigo-300 rounded-md shadow hover:bg-gray-800"
                    >
                        Sign in
                    </a>
                    <a
                        href="/register"
                        className="inline-block w-full px-4 py-2 text-center text-white bg-pink-300 rounded-md shadow hover:bg-gray-800"
                    >
                        Sign up
                    </a>
                </div>
                    </div>
                </div>
                <div className="hidden space-x-2 lg:inline-block">
                    <a
                        href="/login"
                        className="px-4 py-2 text-white bg-indigo-400 rounded-md shadow hover:bg-gray-800"
                    >
                        Sign in
                    </a>
                    <a
                        href="/register"
                        className="px-4 py-2 text-white bg-pink-400 rounded-md shadow hover:bg-gray-800"
                    >
                        Sign up
                    </a>
                </div>
            </div>
        </nav>
    );
}