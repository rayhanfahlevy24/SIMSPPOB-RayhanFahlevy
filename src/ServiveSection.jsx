import React from "react";
import ServiceItem from "./ServiceItem";

const services = [
  { iconSrc: '/src/assets/PBB.png', label: 'PBB' },
  { iconSrc: '/src/assets/Listrik.png', label: 'Listrik' },
  { iconSrc: '/src/assets/Pulsa.png', label: 'Pulsa' },
  { iconSrc: '/src/assets/PDAM.png', label: 'PDAM' },
  { iconSrc: '/src/assets/PGN.png', label: 'PGN' },
  { iconSrc: '/src/assets/Televisi.png', label: 'TV' },
  { iconSrc: '/src/assets/Musik.png', label: 'Musik' },
  { iconSrc: '/src/assets/Game.png', label: 'Game' },
  { iconSrc: '/src/assets/Voucher Makanan.png', label: 'Makanan' },
  { iconSrc: '/src/assets/Kurban.png', label: 'Kurban' },
  { iconSrc: '/src/assets/Zakat.png', label: 'Zakat' },
  { iconSrc: '/src/assets/Paket Data.png', label: 'Paket' },
];

const ServiceSection = () => {
  return (
    <div className="flex overflow-x-auto space-x-8 p-4 rounded-lg">
      {services.map((service, index) => (
        <ServiceItem key={index} iconSrc={service.iconSrc} label={service.label} />
      ))}
    </div>
  );
};

export default ServiceSection;