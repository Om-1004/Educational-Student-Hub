import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import NavbarItem from "./components/NavbarItem";
import { Home as HomeIcon, LayoutDashboard, StickyNote, Calendar, Flag, Settings, LifeBuoy, LogIn, UserPlus } from "lucide-react";

import HomePage from "./pages/HomePage.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Project from "./pages/Projects";
import Tasks from "./pages/Tasks";
import Report from "./pages/Report";
import SettingsPage from "./pages/SettingsPage.jsx";
import Help from "./pages/Help";

import Login from './components/Login.jsx'
import SignUp from './components/SignUp.jsx'

export default function App() {
  return (
    <Router>
      <div className="flex">
        <Navbar>
          <NavbarItem icon={<HomeIcon size={20} />} text="Home" route="/" />
          <NavbarItem icon={<LayoutDashboard size={20} />} text="Dashboard" route="/dashboard" />
          <NavbarItem icon={<StickyNote size={20} />} text="Projects" route="/projects" />
          <NavbarItem icon={<Calendar size={20} />} text="Tasks" route="/tasks" />
          <NavbarItem icon={<Flag size={20} />} text="Report" route="/report" />
          <NavbarItem icon={<LogIn size={20} />} text="Sign In" route="/signin" />
          <NavbarItem icon={<UserPlus size={20} />} text="Sign Up" route="/signUp" />

          <hr className="my-3" />
          <NavbarItem icon={<Settings size={20} />} text="Setting" route="/settings" />
          <NavbarItem icon={<LifeBuoy size={20} />} text="Help" route="/help" />
          
        </Navbar>

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/report" element={<Report />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/help" element={<Help />} />

            <Route path="/signin" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}