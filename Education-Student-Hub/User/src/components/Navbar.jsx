import React, { useContext, createContext, useState, useEffect } from "react";
import profileLogo from "../assets/images/profile.jpeg";
import Logo from "../assets/images/logo.png";
import { ChevronFirst, ChevronLast, MoreVertical, LogOut } from "lucide-react";

export const NavBarContext = createContext();

export default function Navbar({ username, email, children }) {
  const [expanded, setExpanded] = useState(window.innerWidth > 768);
  const [showLogout, setShowLogout] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setExpanded(false);
      } else {
        setExpanded(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleNavbar = () => {
    setExpanded((current) => !current);
    if (!expanded) {
      setShowLogout(false); // Hide logout when collapsing the navbar
    }
  };

  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-gray-100 border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src={Logo}
            className={`overflow-hidden transition-all ${
              expanded ? "w-52" : "w-0"
            }`}
          />
          <button
            onClick={toggleNavbar}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <NavBarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </NavBarContext.Provider>

        {username && email && (
          <div className="border-t flex items-center pt-3 px-5 relative">
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
                <span className="text-xs text-gray-600">{email}</span>
              </div>

              {expanded && (
                <button
                  onClick={() => setShowLogout((current) => !current)}
                  className="p-1.5 rounded-lg hover:bg-gray-100 ml-2"
                >
                  <LogOut size={20} />
                </button>
              )}
            </div>
            {showLogout && expanded && (
              <div className="absolute top-[-10px] right-[-50px] z-50 w-16">
                <div className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 text-sm text-center">
                  Logout
                </div>
              </div>
            )}
          </div>
        )}
      </nav>
    </aside>
  );
}
