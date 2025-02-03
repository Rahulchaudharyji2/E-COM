import React from 'react';

const Topheader = () => {
  return (
    <div 
      style={{ backgroundColor: "white" }} 
      className="text-black text-center py-2 text-sm font-semibold"
    >
      COD not available | Free shipping above <span className="font-bold">4,999/-</span>
    </div>
  );
};

export default Topheader;
