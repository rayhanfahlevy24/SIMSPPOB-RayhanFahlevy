import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "./redux/authSlice"; 
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const { loading, error } = useSelector((state) => state.auth);

  const handleLogin = async (e) => {
    e.preventDefault(); 
    const resultAction = await dispatch(loginUser({ email, password }));

    if (loginUser.fulfilled.match(resultAction)) {
      navigate("/"); 
    } else {
      console.error("Login failed:", resultAction.payload); 
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
            Masuk atau membuat akun <br />
            untuk memulai
          </h1>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="masukan email anda"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="buat password"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300"
            disabled={loading}
          >
            {loading ? "Loading..." : "Masuk"}
          </button>
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </form>

        <p className="text-center text-gray-600 mt-4">
          belum punya akun?{" "}
          <a href="/register" className="text-red-600 font-semibold">
            registrasi di sini
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

export default LoginPage;

