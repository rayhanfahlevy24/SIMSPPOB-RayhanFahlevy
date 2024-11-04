import React from "react";

const PromoSection = () => {
  const banners = [
    { src: "/src/assets/Banner 1.png", alt: "Promo 1" },
    { src: "/src/assets/Banner 2.png", alt: "Promo 2" },
    { src: "/src/assets/Banner 3.png", alt: "Promo 3" },
    { src: "/src/assets/Banner 4.png", alt: "Promo 4" },
    { src: "/src/assets/Banner 5.png", alt: "Promo 5" },
  ];

  return (
    <div className="mt-10">
      <h2 className="text-xl font-bold text-gray-700 mb-4">Temukan promo menarik</h2>
      <div className="flex space-x-4 overflow-x-auto">
        {banners.map((banner, index) => (
          <div key={index} className="flex-shrink-0">
            <img
              src={banner.src}
              alt={banner.alt}
              className="w-80 h-40 rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromoSection;
