import React, { useState } from "react";

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    email: "wallet@nutech.com",
    firstName: "Kristanto",
    lastName: "Wibowo",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-md mx-auto p-6 text-center">
      <div className="flex flex-col items-center mb-6">
        <img
          src="/src/assets/Profile Photo.png"
          alt="Profile Avatar"
          className="w-24 h-24 rounded-full mb-4"
        />
        <h1 className="text-2xl font-semibold">{`${profile.firstName} ${profile.lastName}`}</h1>
      </div>

      <div className="flex flex-col">
        <label className="text-sm text-left mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={profile.email}
          onChange={handleInputChange}
          className="p-2 border border-gray-300 rounded mb-4"
          
        />

        <label className="text-sm text-left mb-1">Nama Depan</label>
        <input
          type="text"
          name="firstName"
          value={profile.firstName}
          onChange={handleInputChange}
          className="p-2 border border-gray-300 rounded mb-4"
        />

        <label className="text-sm text-left mb-1">Nama Belakang</label>
        <input
          type="text"
          name="lastName"
          value={profile.lastName}
          onChange={handleInputChange}
          className="p-2 border border-gray-300 rounded mb-4"
        />

        <button className="bg-white text-gray-700 border border-gray-300 rounded py-2 mt-2 hover:bg-gray-100">
          Edit Profile
        </button>
        <button className="bg-red-500 text-white rounded py-2 mt-4 hover:bg-red-600">
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
