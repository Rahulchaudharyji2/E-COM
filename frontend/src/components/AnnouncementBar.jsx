import React from "react";


const AnnouncementBar = () => {
  return (
    <div className="bg-pink-600 text-white text-sm font-semibold py-2 overflow-hidden">
      <div className="whitespace-nowrap animate-marquee">
        <span className="marquee-item">For orders/enquiries: <span className="font-bold">+91-8590595229</span></span>
        <span className="marquee-item">For orders/enquiries: <span className="font-bold">+91-8590595229</span></span>
        <span className="marquee-item">For orders/enquiries: <span className="font-bold">+91-8590595229</span></span>
      </div>
    </div>
  );
};

export default AnnouncementBar;