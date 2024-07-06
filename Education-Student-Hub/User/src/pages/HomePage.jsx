// HomePage.jsx
import React from "react";
import logo from "../assets/images/logo.png";
import { ArrowRight } from "lucide-react";
import {
  MessagesSquare,
  Calendar,
  File,
  FileText,
  Clipboard,
  MessageCircle,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500">
      <div className="min-h-screen p-8 md:p-12">
        <div className="bg-white border-2 border-transparent rounded-lg shadow-lg">
          <div className="flex flex-col lg:flex-row justify-between px-6 md:px-24 items-center py-10">
            <div className="w-full lg:w-2/3 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
                Welcome to Educational Hub
              </h1>
              <p className="mt-3 md:mt-5 text-gray-700 text-lg w-[300px]">
                Bring all your tasks, friends, and tools together to{" "}
                <span className="underline text-blue-600">
                  help students achieve their goals
                </span>
              </p>
              <div className="flex justify-center lg:justify-start items-center mt-5">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center text-lg font-semibold shadow-md transition duration-300 ease-in-out">
                  Learn More
                  <ArrowRight className="ml-2" size={20} />
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                Join our community to start sharing resources and connecting
                with peers across the globe!
              </p>
            </div>

            <div className="mt-10 lg:mt-0 lg:block">
              <img
                src={logo}
                className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px] rounded-lg shadow-lg"
                alt="Logo"
              />
            </div>
          </div>
        </div>

        {/* 3x2 Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg flex flex-col items-center shadow-lg text-gray-800">
            <h2 className="mt-4 font-bold text-4xl text-center lg:text-left">
              All the features you need{" "}
              <span className="text-blue-600">— in one place</span>
            </h2>
            <p className="text-sm text-gray-800 mt-2 text-center lg:text-left">
              Lorem ipsum dolor sit amet, consectetur adipisicing
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg flex flex-col items-center shadow-lg text-gray-800">
            <MessagesSquare size={40} className="text-blue-600" />
            <h2 className="mt-4 font-bold text-lg text-center lg:text-left">
              Chat and Messaging
            </h2>
            <p className="text-sm text-gray-800 mt-2 text-center lg:text-left">
              Lorem ipsum dolor sit amet, consectetur adipisicing
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg flex flex-col items-center shadow-lg text-gray-800">
            <Calendar size={40} className="text-blue-600" />
            <h2 className="mt-4 font-bold text-lg text-center lg:text-left">
              Scheduling and Compliance Tracking
            </h2>
            <p className="text-sm text-gray-800 mt-2 text-center lg:text-left">
              Lorem ipsum dolor sit amet, consectetur adipisicing
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg flex flex-col items-center shadow-lg text-gray-800">
            <File size={40} className="text-blue-600" />
            <h2 className="mt-4 font-bold text-lg text-center lg:text-left">
              Document Generation
            </h2>
            <p className="text-sm text-gray-800 mt-2 text-center lg:text-left">
              Lorem ipsum dolor sit amet, consectetur adipisicing
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg flex flex-col items-center shadow-lg text-gray-800">
            <FileText size={40} className="text-blue-600" />
            <h2 className="mt-4 font-bold text-lg text-center lg:text-left">
              Resource Sharing
            </h2>
            <p className="text-sm text-gray-800 mt-2 text-center lg:text-left">
              Lorem ipsum dolor sit amet, consectetur adipisicing
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg flex flex-col items-center shadow-lg text-gray-800">
            <Clipboard size={40} className="text-blue-600" />
            <h2 className="mt-4 font-bold text-lg text-center lg:text-left">
              Laboratory Data Management
            </h2>
            <p className="text-sm text-gray-800 mt-2 text-center lg:text-left">
              Lorem ipsum dolor sit amet, consectetur adipisicing
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg flex flex-col items-center shadow-lg text-gray-800">
            <MessageCircle size={40} className="text-blue-600" />
            <h2 className="mt-4 font-bold text-lg text-center lg:text-left">
              Community Engagement
            </h2>
            <p className="text-sm text-gray-800 mt-2 text-center lg:text-left">
              Lorem ipsum dolor sit amet, consectetur adipisicing
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg flex flex-col items-center justify-center shadow-lg text-gray-800">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center text-lg font-semibold shadow-md transition duration-300 ease-in-out">
              Start Here
              <ArrowRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
