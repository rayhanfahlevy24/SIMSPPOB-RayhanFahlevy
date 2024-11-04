import React from "react";

const TransactionPage = () => {
  const transactions = [
    {
      amount: "+ Rp10.000",
      date: "17 Agustus 2023",
      time: "13:10 WIB",
      type: "Top Up Saldo",
      positive: true,
    },
    {
      amount: "- Rp40.000",
      date: "17 Agustus 2023",
      time: "12:20 WIB",
      type: "Pulsa Prabayar",
      positive: false,
    },
    {
      amount: "- Rp10.000",
      date: "17 Agustus 2023",
      time: "11:19 WIB",
      type: "Listrik Prabayar",
      positive: false,
    },
    {
      amount: "+ Rp50.000",
      date: "17 Agustus 2023",
      time: "10:10 WIB",
      type: "Top Up Saldo",
      positive: true,
    },
    {
      amount: "+ Rp50.000",
      date: "17 Agustus 2023",
      time: "10:10 WIB",
      type: "Top Up Saldo",
      positive: true,
    },
  ];

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
            <h3 className="mt-4 text-2xl font-bold">Rp ********</h3>
            <button className="mt-5 text-sm bg-transparent text-white">
              Lihat Saldo
            </button>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-700">Semua Transaksi</h2>
      </div>
      <div className="space-y-4">
        {transactions.map((transaction, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 border rounded-lg"
          >
            <div>
              <p
                className={`text-lg font-bold ${
                  transaction.positive ? "text-green-500" : "text-red-500"
                }`}
              >
                {transaction.amount}
              </p>
              <p className="text-gray-500 text-sm">
                {transaction.date} • {transaction.time}
              </p>
            </div>
            <div className="text-gray-500 font-medium">{transaction.type}</div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <button className="text-red-500 font-semibold">Show more</button>
      </div>
    </div>
  );
};

export default TransactionPage;
