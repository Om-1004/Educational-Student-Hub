import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import NavbarItem from "./components/NavbarItem";
import {
  Home as HomeIcon,
  LayoutDashboard,
  StickyNote,
  Calendar,
  Flag,
  Settings,
  LifeBuoy,
  LogIn,
  UserPlus,
} from "lucide-react";

import HomePage from "./pages/HomePage.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Project from "./pages/Projects";
import Tasks from "./pages/Tasks";
import Report from "./pages/Report";
import SettingsPage from "./pages/SettingsPage.jsx";
import Help from "./pages/Help";
import { useSelector } from "react-redux";
import Login from "./components/Login.jsx";
import SignUp from "./components/SignUp.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";

export default function App() {
  const { currentUser } = useSelector((state) => state.user);

  // Fetch username and email if they exist
  const username = currentUser?.username;
  const email = currentUser?.email;
  const password = currentUser?.password;
  const firstName = currentUser?.firstName;
  const lastName = currentUser?.lastName;
  const avatar = currentUser?.avatar;

  return (
    <Router>
      <div className="flex">
        <Navbar username={username && username} email={email && email} avatar={avatar && avatar}>
          <NavbarItem icon={<HomeIcon size={20} />} text="Home" route="/" />
          <NavbarItem
            icon={<LayoutDashboard size={20} />}
            text="Dashboard"
            route="/dashboard"
            classes={
              !currentUser && "bg-gray-200 opacity-50 cursor-not-allowed"
            }
          />
          <NavbarItem
            icon={<StickyNote size={20} />}
            text="Projects"
            route="/projects"
            classes={
              !currentUser && "bg-gray-200 opacity-50 cursor-not-allowed"
            }
          />
          <NavbarItem
            icon={<Calendar size={20} />}
            text="Todo"
            route="/tasks"
            classes={
              !currentUser && "bg-gray-200 opacity-50 cursor-not-allowed"
            }
          />
          <NavbarItem
            icon={<Flag size={20} />}
            text="Report"
            route="/report"
            classes={
              !currentUser && "bg-gray-200 opacity-50 cursor-not-allowed"
            }
          />
          {currentUser ? (
            <div></div>
          ) : (
            <NavbarItem
              icon={<LogIn size={20} />}
              text="Sign In"
              route="/signin"
            />
          )}
          {currentUser ? (
            <div></div>
          ) : (
            <NavbarItem
              icon={<UserPlus size={20} />}
              text="Sign Up"
              route="/signUp"
            />
          )}

          <hr className="my-3" />
          <NavbarItem
            icon={<Settings size={20} />}
            text="Setting"
            route="/settings"
            classes={
              !currentUser && "bg-gray-200 opacity-50 cursor-not-allowed"
            }
          />
          <NavbarItem icon={<LifeBuoy size={20} />} text="Help" route="/help" />
        </Navbar>

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route element={<PrivateRoute />}>
              <Route path="/report" element={<Report />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route
                path="/settings"
                element={
                  <SettingsPage
                    username={username && username}
                    email={email && email}
                    password={password && password}
                    firstName={firstName && firstName}
                    lastName={lastName && lastName}
                    avatar={avatar && avatar}

                  />
                }
              />
            </Route>
            <Route path="/help" element={<Help />} />
            <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="/tasks" element={<Tasks />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="/projects" element={<Project />} />
            </Route>
            <Route path="/signin" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
