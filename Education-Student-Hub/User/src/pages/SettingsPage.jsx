import React, { useState, useRef, useEffect } from "react";
import profileLogo from "../assets/images/profile.jpeg";

import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";

import { Pencil, Upload, Save } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
} from "../redux/user/userSlice.js";

export default function Settings({
  username,
  email,
  password,
  firstName,
  lastName,
  avatar,
}) {
  const [openPassword, setOpenPassword] = useState(false);

  const [isEditing, setIsEditing] = useState({
    username: false,
    email: false,
    password: false,
    firstName: false,
    lastName: false,
  });

  const { currentUser, loading } = useSelector((state) => state.user);
  const fileRef = useRef(null);
  const [file, setFile] = useState(undefined);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({
    username: currentUser.username,
    email: currentUser.email,
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    avatar: currentUser.avatar,
  });
  const dispatch = useDispatch();
  console.log(file);
  console.log(formData);

  const handleEyeClick = (e) => {
    e.preventDefault();
    setOpenPassword((current) => !current);
  };

  const handleEdit = (field) => {
    setIsEditing((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePerc(Math.round(progress));
      },
      (error) => {
        setFileUploadError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFormData((prevData) => ({ ...prevData, avatar: downloadURL }));
        });
      }
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(updateUserFailure(data.message));
      } else {
        dispatch(updateUserSuccess(data));
        setUpdateSuccess(true);
      }
    } catch (error) {
      dispatch(updateUserFailure(error.message));
    }
  };

  return (
    <div className="border-2 border-green-200 h-max px-10 pt-10 sm:flex sm:flex-col sm:justify-center">
      <div>
        <p className="text-2xl font-semibold text-gray-800">Profile</p>
        <p className="text-sm text-gray-500">Manage your profile settings</p>
        <hr className="mt-7 w-10/12 sm:hidden" />
        <p className="mt-7 text-gray-800">Basic Info</p>
        <p className="mt-1 text-gray-500 text-sm">
          Tell us your basic info details
        </p>

        <div className="flex flex-col">
          <div className="mt-5">
            <label className="mt-5 text-sm text-gray-800">First Name</label>
            <form onSubmit={handleSubmit}>
              <div className="flex gap-3 items-center">
                <input
                  className="p-2 rounded-xl lg:w-80 border-2 border-gray-300 sm:w-28 sm:text-sm"
                  type="text"
                  id="firstName"
                  value={formData.firstName}
                  readOnly={!isEditing.firstName}
                  onChange={handleChange}
                />
                <button onClick={() => handleEdit("firstName")}>
                  {isEditing.firstName ? (
                    <Save size={18} />
                  ) : (
                    <Pencil size={18} />
                  )}
                </button>
              </div>
            </form>
          </div>

          <div className="mt-5">
            <label className="mt-5 text-sm text-gray-800">Last Name</label>
            <form onSubmit={handleSubmit}>
              <div className="flex gap-3 items-center">
                <input
                  className="p-2 rounded-xl lg:w-80 border-2 border-gray-300 sm:w-28 sm:text-sm"
                  type="text"
                  id="lastName"
                  value={formData.lastName}
                  readOnly={!isEditing.lastName}
                  onChange={handleChange}
                />
                <button onClick={() => handleEdit("lastName")}>
                  {isEditing.lastName ? (
                    <Save size={18} />
                  ) : (
                    <Pencil size={18} />
                  )}
                </button>
              </div>
            </form>
          </div>
          <div className="mt-5">
            <label className="mt-5 text-sm text-gray-800">Username</label>
            <form onSubmit={handleSubmit}>
              <div className="flex gap-3 items-center">
                <input
                  className="p-2 rounded-xl lg:w-80 border-2 border-gray-300 sm:w-28 sm:text-sm"
                  type="text"
                  id="username"
                  value={formData.username}
                  readOnly={!isEditing.username}
                  onChange={handleChange}
                />
                <button onClick={() => handleEdit("username")}>
                  {isEditing.username ? (
                    <Save size={18} />
                  ) : (
                    <Pencil size={18} />
                  )}
                </button>
              </div>
            </form>
          </div>

          <div className="mt-5">
            <label className="mt-5 text-sm text-gray-800">Email</label>
            <form onSubmit={handleSubmit}>
              <div className="flex gap-3 items-center">
                <input
                  className="p-2 rounded-xl lg:w-80 border-2 border-gray-300 sm:w-28 sm:text-sm"
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  readOnly={!isEditing.email}
                  onChange={handleChange}
                />
                <button onClick={() => handleEdit("email")}>
                  {isEditing.email ? <Save size={18} /> : <Pencil size={18} />}
                </button>
              </div>
            </form>
          </div>

          <div className="mt-5">
            <label className="mt-5 text-sm text-gray-800">Password</label>
            <form onSubmit={handleSubmit}>
              <div className="flex gap-3 items-center">
                <div className="relative">
                  <input
                    className="p-2 rounded-xl lg:w-80 border-2 border-gray-300 sm:w-28 sm:text-sm"
                    type={openPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    readOnly={!isEditing.password}
                    onChange={handleChange}
                  />
                  <button
                    onClick={handleEyeClick}
                    className="absolute top-1/2 right-5 -translate-y-1/2"
                  >
                    {openPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="gray"
                        className="bi bi-eye"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="gray"
                        className="bi bi-eye-slash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />
                        <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
                        <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
                      </svg>
                    )}
                  </button>
                </div>
                <button onClick={() => handleEdit("password")}>
                  {isEditing.password ? (
                    <Save size={18} />
                  ) : (
                    <Pencil size={18} />
                  )}
                </button>
              </div>
            </form>
          </div>

          <hr className="w-10/12 mt-8" />
          <p className="mt-7 text-gray-800">Profile Picture</p>
          <div className=" sm:w-[200px] lg:w-auto">
            <p className="text-sm text-gray-500 sm:text-sm">
              We support only JPEGs or PNGs under 5MB
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="flex items-center gap-5 mt-5 mb-3">
              <button className="hover:opacity-40 ">
                <div className="relative lg:w-24 lg:h-24 mt-5 sm:w-12 sm:h-12">
                  <img
                    src={formData.avatar || currentUser.avatar || profileLogo}
                    className="w-full h-full rounded-full border border-transparent border-blue-500"
                    alt="Profile"
                  />
                  <div
                    className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center text-white rounded-full cursor-pointer"
                    onClick={() => fileRef.current.click()}
                  >
                    Edit
                  </div>
                  <p className="text-sm self-center">
                    {fileUploadError ? (
                      <span className="text-red-700">
                        Error While Uploading Image (image must be less than
                        2mb)
                      </span>
                    ) : filePerc > 0 && filePerc < 100 ? (
                      <span className="text-slate-700">{`Uploading ${filePerc}%`}</span>
                    ) : filePerc === 100 ? (
                      <span className="text-green-700">
                        Image Successfully Uploaded!
                      </span>
                    ) : (
                      ""
                    )}
                  </p>
                  <input
                    onChange={(e) => setFile(e.target.files[0])}
                    type="file"
                    ref={fileRef}
                    hidden
                    accept="image/*"
                  />
                </div>
              </button>

              <input
                onChange={(e) => setFile(e.target.files[0])}
                type="file"
                ref={fileRef}
                hidden
                accept="image/*"
              />

              <button>
                <div className="flex items-center gap-3 w-auto lg:h-10 border-2 border-gray-300 rounded-xl px-3 lg:text-sm sm:h-8 ">
                  <div>
                    <Upload />
                  </div>

                  <p>Update</p>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
