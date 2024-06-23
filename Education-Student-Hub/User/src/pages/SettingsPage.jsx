import React from "react";
import profileLogo from "../assets/images/profile.jpeg";
import { Pencil } from "lucide-react";

const InfoRow = ({ label, value, onEdit, editLabel = "Edit" }) => (
  <div className="text-white text-xs flex items-center justify-between px-3 py-2">
    <div>
      <p className="uppercase text-xsm font-extrabold text-[#b4b9bf]">{label}</p>
      <p>{value}</p>
    </div>
    <div className="flex items-center bg-[#4d5057] px-3 py-1 rounded-md gap-3">
      <Pencil size={18} />
      <button onClick={onEdit}>{editLabel}</button>
    </div>
  </div>
);

export default function Settings({ username, email, password, firstName }) {
  const handleEdit = (field) => {
    // Handle edit action here
    console.log(`Edit ${field}`);
  };

  return (
    <div className="h-screen p-5 bg-gray-900 text-gray-200">
      <div className="pb-3 mb-5">
        <h1 className="font-semibold text-2xl">My Account</h1>
      </div>

      <div className="w-1/2 mx-auto rounded-lg overflow-hidden shadow-lg">
        <div className="bg-indigo-500 py-5 flex items-center justify-between text-white px-4">
          <div className="flex items-center gap-3">
            <img
              src={profileLogo}
              className="w-20 h-20 rounded-full border border-transparent hover:border-blue-500"
              alt="Profile"
            />
            <h2 className="text-xl font-extrabold">{username}</h2>
          </div>
          <button className="bg-indigo-700 rounded-md p-2 text-xs">
            Edit User Profile
          </button>
        </div>

        <div className="bg-[#2a2d31] p-5">
          <InfoRow label="Display Name" value={firstName} onEdit={() => handleEdit("firstName")} />
          <InfoRow label="Username" value={username} onEdit={() => handleEdit("username")} />
          <InfoRow label="Email" value={email} onEdit={() => handleEdit("email")} />
          <InfoRow
            label="Phone Number"
            value="You haven't added a phone number yet."
            onEdit={() => handleEdit("phone")}
            editLabel="Add"
          />
        </div>
      </div>

      <div className="mt-10 w-1/2 mx-auto">
        <h2 className="font-semibold text-xl mb-3">Password and Authentication</h2>
        <button className="bg-blue-600 text-sm text-white rounded-md py-2 px-1 w-1/4">
          Change Password
        </button>
      </div>

      <div className="mt-10 w-1/2 mx-auto">
        <h2 className="font-semibold text-xl mb-3">Account Removal</h2>
        <p className="text-sm text-gray-400 mb-3">
          Delete Your Account
        </p>
        <div className="flex gap-3">
          <button className="bg-red-600 text-sm text-white rounded-md p-2">
            Delete Account
          </button>

        </div>
      </div>
    </div>
  );
}
