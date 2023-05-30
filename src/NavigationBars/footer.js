import { FaceBook, Github, LinkedIn, Twitter } from "../svgs";

const ListItems = [
  { name: "Home", href: "/" },
  { name: "Chat Room", href: "/chat" },
  { name: "About us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
  { name: "SignIn", href: "/login" },
  { name: "SignOut", href: "/register" },
];

const Footer = () => {
  return (
    <div>
      <div className="w-full flex md:flex-col flex-row justify-center items-center bg-white gap-5 py-10">
        <div className="flex w-1/2 md:w-full md:justify-center md:flex-row flex-col gap-2 md:gap-5 justify-start px-5">
          {ListItems.map((data) => {
            return (
              <a
                className="no-underline text-gray-400 text-sm hover:text-purple-500"
                href={data.href}
              >
                {data.name}
              </a>
            );
          })}
        </div>
        <div className="flex justify-center items-center gap-3">
          <FaceBook classname="w-5 h-5 fill-current text-gray-400 hover:text-purple-600 cursor-pointer" />
          <Github classname="w-5 h-5 fill-current text-gray-400 hover:text-purple-600 cursor-pointer" />
          <LinkedIn classname="w-5 h-5 fill-current text-gray-400 hover:text-purple-600 cursor-pointer" />
          <Twitter classname="w-5 h-5 fill-current text-gray-400 hover:text-purple-600 cursor-pointer" />
        </div>
      </div>
      <div>
        <h1 className="text-gray-700 text-sm font-bold text-center">
          {" "}
          all rights are reserved @LET'S TALK
        </h1>
      </div>
    </div>
  );
};

export default Footer;
