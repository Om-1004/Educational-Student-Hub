import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { NavBarContext } from "./Navbar";

export default function NavbarItem({ icon, text, route }) {
  const { expanded } = useContext(NavBarContext);
  const location = useLocation();

  const isActive = location.pathname === route;

  return (
    <NavLink to={route} className={`relative flex items-center py-2 px-3 mt-1 font-medium rounded-md cursor-pointer transition-colors ${
        isActive
          ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
          : "hover:bg-indigo-50 text-gray-600"
      } w-full`}>
      <div className="flex items-center w-full">
        {icon}
        <span className={`overflow-hidden transition-all ${
            expanded ? "w-52 ml-3" : "w-0"
          }`}>
          {text}
        </span>
      </div>
      {!expanded && (
        <div className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>
          {text}
        </div>
      )}
    </NavLink>
  );
}
