import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TopupPage = () => {
  const [topupAmount, setTopupAmount] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token); 

  const handleTopUp = async () => {
    if (!topupAmount || Number(topupAmount) < 10000 || Number(topupAmount) > 1000000) {
      alert("Nominal top up harus antara Rp 10.000 hingga Rp 1.000.000.");
      return;
    }

    try {
      const response = await axios.post(
        "https://api-doc-tht.nutech-integrasi.com/topup",
        {
          top_up_amount: Number(topupAmount), 
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        }
      );
      alert("Top Up berhasil: " + response.data.message);
    } catch (error) {
      alert("Gagal melakukan top up: " + (error.response?.data?.message || "Terjadi kesalahan"));
    }
  };

  return (
    <div className="p-10">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <img
            src="/src/assets/Profile Photo.png"
            alt="Avatar"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <p className="text-gray-700 text-lg">Selamat datang,</p>
            <h2 className="text-gray-700 text-2xl font-bold">Kristanto Wibowo</h2>
          </div>
        </div>
        <div className="relative bg-red-500 w-1/2 p-6 rounded-lg flex items-center justify-between">
          <img
            src="/src/assets/Background Saldo.png"
            alt="Background Saldo"
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
          />
          <div className="relative text-white">
            <p className="text-lg">Saldo Anda</p>
            <h3 className="mt-4 text-2xl font-bold">Rp 0</h3>
            <button className="text-sm mt-5 bg-transparent text-white">
              Tutup Saldo
            </button>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <p className="text-gray-700 text-lg">Silahkan masukan</p>
        <h2 className="text-2xl font-bold text-gray-700">Nominal Top Up</h2>
      </div>

      <div className="flex items-center space-x-4 mb-6">
        <input
          type="number" 
          placeholder="masukkan nominal Top Up"
          value={topupAmount}
          onChange={(e) => setTopupAmount(e.target.value)}
          className="w-full p-4 border rounded-lg text-gray-700 focus:outline-none"
        />
        <button
          onClick={handleTopUp} 
          className="w-full bg-gray-300 p-4 rounded-lg text-gray-600 font-bold"
        >
          Top Up
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <button onClick={() => setTopupAmount("10000")} className="bg-gray-100 p-4 rounded-lg text-gray-700 font-bold">Rp10.000</button>
        <button onClick={() => setTopupAmount("20000")} className="bg-gray-100 p-4 rounded-lg text-gray-700 font-bold">Rp20.000</button>
        <button onClick={() => setTopupAmount("50000")} className="bg-gray-100 p-4 rounded-lg text-gray-700 font-bold">Rp50.000</button>
        <button onClick={() => setTopupAmount("100000")} className="bg-gray-100 p-4 rounded-lg text-gray-700 font-bold">Rp100.000</button>
        <button onClick={() => setTopupAmount("250000")} className="bg-gray-100 p-4 rounded-lg text-gray-700 font-bold">Rp250.000</button>
        <button onClick={() => setTopupAmount("500000")} className="bg-gray-100 p-4 rounded-lg text-gray-700 font-bold">Rp500.000</button>
      </div>
    </div>
  );
};

export default TopupPage;
