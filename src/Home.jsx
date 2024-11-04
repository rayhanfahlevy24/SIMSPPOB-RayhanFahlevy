import React from "react";
import ServiceSection from "./ServiveSection";
import PromoSection from "./PromoSection";

const HomePage = () => {
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
            <h2 className="text-gray-700 text-2xl font-bold">
              Kristanto Wibowo
            </h2>
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
      <div className="mt-10">
        <ServiceSection />
      </div>
      <PromoSection />
    </div>
  );
};

export default HomePage;
