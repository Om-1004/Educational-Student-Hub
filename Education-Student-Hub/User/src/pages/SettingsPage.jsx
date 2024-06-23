import React, { useState } from "react";
import profileLogo from "../assets/images/profile.jpeg";
import { Pencil } from "lucide-react";

const InfoRow = ({ label, value, onEdit, editLabel = "Edit" }) => (
  <div className="text-white text-xs flex items-center justify-between px-3 py-2">
    <div>
      <p className="uppercase text-xsm font-extrabold text-[#b4b9bf]">
        {label}
      </p>
      <p>{value}</p>
    </div>
    <div className="flex items-center bg-[#4d5057] px-3 py-1 rounded-md gap-3">
      <Pencil size={18} />
      <button onClick={onEdit}>{editLabel}</button>
    </div>
  </div>
);

export default function Settings({ username, email, password, firstName }) {
  const [openPassword, setOpenPassword] = useState(false);

  let displayEye;

  if (!openPassword) {
    displayEye = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="gray"
        className="bi bi-eye-slash absolute top-1/2 right-5 -translate-y-1/2"
        viewBox="0 0 16 16"
      >
        <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />
        <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
        <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
      </svg>
    );
  } else {
    displayEye = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="gray"
        className="bi bi-eye b absolute top-1/2 right-5 -translate-y-1/2"
        viewBox="0 0 16 16"
      >
        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
      </svg>
    );
  }

  function handleEyeClick(e) {
    e.preventDefault();
    setOpenPassword((current) => !current);
  }

  const handleEdit = (field) => {
    // Handle edit action here
    console.log(`Edit ${field}`);
  };

  return (
    <div className="border-2 border-green-200 h-screen p-10">
      <div className="">
        <p className="text-2xl font-semibold text-gray-800">Profile</p>
        <p className="text-sm text-gray-500">Manage your profile settings</p>
        <hr className="mt-7 w-10/12" />
        <p className="mt-7 text-gray-800">Basic Info</p>
        <p className="mt-1 text-gray-500 text-sm">
          Tell us your basic info details
        </p>

        <div className="flex flex-col">
          <div className="mt-5">
            <label className="mt-5 text-sm text-gray-800">Full Name</label>
            <div className="flex gap-3 items-center">
              <input
                className="p-2 rounded-xl w-80 border-2 border-gray-300"
                type="text"
                name="password"
                id="password"
              />
              <button>
                <Pencil size={18} />
              </button>{" "}
            </div>
          </div>

          <div className="mt-5">
            <label className="mt-5 text-sm text-gray-800">Email</label>
            <div className="flex gap-3 items-center">
              <input
                className="p-2 rounded-xl w-80 border-2 border-gray-300"
                type="text"
                name="password"
                id="password"
              />
              <button>
                <Pencil size={18} />
              </button>{" "}
            </div>
          </div>

          <div className="mt-5">
            <label className="mt-5 text-sm text-gray-800">Password</label>
            <div className="flex gap-3 items-center">
              <div className="relative">
                <input
                  className="p-2 rounded-xl w-80 border-2 border-gray-300"
                  type={openPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  id="password"
                />
                <button onClick={handleEyeClick}>{displayEye}</button>
              </div>
              <button>
                <Pencil size={18} />
              </button>
            </div>
          </div>

          <hr className="w-10/12 mt-8" />
          <p className="mt-7 text-gray-800">Profile Picture</p>
          <p className="text-sm text-gray-500">
            We support omly JPEGs or PNGs under 5MB
          </p>
          <div className="flex items-center gap-5 mt-5">
            <img
              src={profileLogo}
              className="w-24 h-24 rounded-full border border-transparent border-blue-500"
            />
            <button className="w-20 h-10 border-2 border-gray-300 rounded-xl">Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
