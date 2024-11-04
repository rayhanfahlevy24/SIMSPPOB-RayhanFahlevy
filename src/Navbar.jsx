import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow">
      <div className="flex items-center space-x-4">
        <Link to="/"> 
          <img src="/src/assets/Logo.png" alt="Logo" className="w-8 h-8" />
        </Link>
        <Link to="/" className="text-xl font-semibold hover:text-gray-900"> 
          SIMS PPOB
        </Link>
      </div>
      <div className="flex items-center space-x-6 text-gray-700">
        <Link
          to="/topup"
          className={`hover:text-gray-900 ${
            location.pathname === "/topup" ? "text-red-500 font-semibold" : ""
          }`}
        >
          Top Up
        </Link>
        <Link
          to="/transaction"
          className={`hover:text-gray-900 ${
            location.pathname === "/transaction" ? "text-red-500 font-semibold" : ""
          }`}
        >
          Transaction
        </Link>
        <Link
          to="/profile"
          className={`hover:text-gray-900 ${
            location.pathname === "/profile" ? "text-red-500 font-semibold" : ""
          }`}
        >
          Akun
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

