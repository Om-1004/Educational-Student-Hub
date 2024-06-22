import React, { useContext, createContext, useState, useEffect } from "react";
import profileLogo from "../assets/images/profile.jpeg";
import Logo from "../assets/images/logo.png";
import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react";

export const NavBarContext = createContext();

export default function Navbar({ username, email, children }) {
  const [expanded, setExpanded] = useState(window.innerWidth > 768);
  

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setExpanded(false);
      } else {
        setExpanded(true);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src={Logo}
            className={`overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            }`}
          />
          <button
            onClick={() => {
              setExpanded((current) => !current);
            }}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <NavBarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </NavBarContext.Provider>

        <div className="border-t flex items-center pt-3 px-5">
          <img
            src={profileLogo}
            className="w-10 h-10 rounded-full border border-transparent hover:border-blue-500"
            alt="Profile"
          />
          <div
            className={`flex justify-between items-center overflow-hidden transition-all ${
              expanded ? "w-52 ml-3" : "w-0"
            } `}
          >
            <div className="leading-4 text-sm flex-grow">
              <h4 className="font-semibold">{username}</h4>
              <span className="text-xs text-gray-600">
                {email}
              </span>
            </div>
            <button className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 ml-2">
              <MoreVertical size={20} />
            </button>
          </div>
        </div>
      </nav>
    </aside>
  );
}
