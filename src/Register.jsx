import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "./redux/authSlice"; 
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!email || !firstName || !lastName || !password || !confirmPassword) {
      setError("Semua field harus diisi.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Password dan konfirmasi password harus sama.");
      return;
    }

    const resultAction = await dispatch(
      registerUser({ email, firstName, lastName, password })
    );

    if (registerUser.fulfilled.match(resultAction)) {
      navigate("/login");
    } else {
      setError(resultAction.payload || "Gagal melakukan registrasi.");
    }
  };

  return (
    <div className="flex h-screen">
    <div className="w-1/2 flex flex-col justify-center items-center px-16">
      <div className="flex items-center mb-6">
        <img src="/src/assets/Logo.png" alt="logo" className="h-7 mr-2" />
        <h1 className="text-2xl font-semibold text-red-600">SIMS PPOB</h1>
      </div>
      <div className="mb-10 text-center">
        <h1 className="text-black font-semibold text-3xl">
          Lengkapi data untuk <br />
          membuat akun
        </h1>
      </div>

      <form onSubmit={handleRegister} className="space-y-6">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="masukan email anda"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
        />
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="nama depan"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
        />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="nama belakang"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="buat password"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="konfirmasi password"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
        />

        <button
          type="submit"
          className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300"
        >
          Registrasi
        </button>

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </form>

      <p className="text-center text-gray-600 mt-4">
        sudah punya akun?{" "}
        <a href="/login" className="text-red-600 font-semibold">
          login di sini
        </a>
      </p>
    </div>

    <div className="w-1/2 bg-red-50 flex items-center justify-center">
      <img
        src="/src/assets/Illustrasi Login.png"
        alt="Illustration"
        className="h-3/4 object-cover"
      />
    </div>
  </div>
  );
};

export default RegisterPage;
