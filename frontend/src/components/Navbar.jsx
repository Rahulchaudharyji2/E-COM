 // import React, { useState } from 'react';  // ✅ Import useState
// import { assets } from '../assets/assets';
// import { Link, NavLink } from 'react-router-dom';

// const Navbar = () => {
//   const [visible, setVisible] = useState(false);  // ✅ Corrected useState hook

//   return (
//     <div className='flex items-center justify-between py-5 font-medium'>
//       <img
//         src={assets.logo}
//         className='w-[141px] h-[40px] object-cover'
//         alt="Logo"
//       />
//       <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
//         <NavLink to='/' className='flex flex-col items-center gap-1'>
//           <p>HOME</p>
//           <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
//         </NavLink>

//         {/* Collection Dropdown Menu */}
//         <div className='group relative'>
//           <NavLink to='/collection' className='flex flex-col items-center gap-1'>
//             <p>COLLECTION</p>
//             <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
//           </NavLink>
//           <div className='group-hover:block hidden absolute dropdown-menu left-0 pt-4'>
//             <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
//               <p className='cursor-pointer hover:text-black'>Lamps</p>
//               <p className='cursor-pointer hover:text-black'>Badges</p>
//               <p className='cursor-pointer hover:text-black'>Sippers</p>
//               <p className='cursor-pointer hover:text-black'>Blind Box</p>
//               <p className='cursor-pointer hover:text-black'>Pc Holder</p>
//               <p className='cursor-pointer hover:text-black'>Stationary</p>
//               <p className='cursor-pointer hover:text-black'>Storage Box</p>
//               <p className='cursor-pointer hover:text-black'>Bags/Pouches</p>
//               <p className='cursor-pointer hover:text-black'>Table Mirror</p>
//               <p className='cursor-pointer hover:text-black'>Accessories</p>
//               <p className='cursor-pointer hover:text-black'>Electric Fans</p>
//               <p className='cursor-pointer hover:text-black'>Watch/Clock</p>
//               <p className='cursor-pointer hover:text-black'>Kawaii Mirrors </p>
//               <p className='cursor-pointer hover:text-black'>Plush Keychain</p>
//               <p className='cursor-pointer hover:text-black'>Kawaii Stationary </p>
//               <p className='cursor-pointer hover:text-black'>Keychain/ Phone charms </p>
//               <p className='cursor-pointer hover:text-black'>Plushie/keychains </p>
//             </div>
//           </div>
//         </div>

//         <NavLink to='/about' className='flex flex-col items-center gap-1'>
//           <p>ABOUT</p>
//           <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
//         </NavLink>
//         <NavLink to='/contact' className='flex flex-col items-center gap-1'>
//           <p>CONTACT</p>
//           <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
//         </NavLink>
//       </ul>

//       <div className='flex gap-6 items-center'>
//         <img src={assets.search_icon} className='w-5 cursor-pointer' alt="Search Icon" />
//         <div className='group relative'>
//           <img className='w-5 cursor-pointer' src={assets.profile_icon} alt="Profile Icon" />
//           <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
//             <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
//               <p className='cursor-pointer hover:text-black'>My Profile</p>
//               <p className='cursor-pointer hover:text-black'>Orders</p>
//               <p className='cursor-pointer hover:text-black'>Logout</p>
//             </div>
//           </div>
//         </div>
//         <Link to='/cart' className='relative'>
//          <img src={assets.cart_icon} className='w-5 min-w-5' alt="Cart Icon" />
//          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>10</p>
//         </Link>
//         <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
//       </div>

//       {/* Sidebar menu for smaller devices */}
//       <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all duration-300 ${visible ? 'w-full' : 'w-0'}`}>
//         {/* Sidebar content */}
//         <div className='flex flex-col text-gray-600'>
//           <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3'>
//             <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
//             <p>Back</p>
//           </div>
//           <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
//           <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
//           <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
//           <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
//         </div>
//       </div>
//     </div>  
//   );
// };

// export default Navbar;


 



import React, { useState, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch , getCartCount} = useContext(ShopContext);

  return (
    <div className='flex items-center justify-between py-5 font-medium relative z-50'>
      <Link to='/'>
        <img 
          src={assets.logo} 
          className='w-[141px] h-[40px] object-cover' 
          alt="Logo" 
        />
      </Link>

      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to='/' className='flex flex-col items-center gap-1'>
          <p>HOME</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>

        {/* Collection Dropdown Menu */}
        <div className='group relative'>
          <NavLink to='/collection' className='flex flex-col items-center gap-1'>
            <p>COLLECTION</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>
          <div className='group-hover:block hidden absolute dropdown-menu left-0 pt-4 z-50'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
              {[
                "Lamps", "Badges", "Sippers", "Blind Box", "Pc Holder", "Stationary",
                "Storage Box", "Bags/Pouches", "Table Mirror", "Accessories",
                "Electric Fans", "Watch/Clock", "Kawaii Mirrors", "Plush Keychain",
                "Kawaii Stationary", "Keychain/Phone charms", "Plushie/keychains"
              ].map((item, index) => (
                <p key={index} className='cursor-pointer hover:text-black'>{item}</p>
              ))}
            </div>
          </div>
        </div>

        <NavLink to='/about' className='flex flex-col items-center gap-1'>
          <p>ABOUT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
          <p>CONTACT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
      </ul>

      <div className='flex gap-6 items-center'>
        <img 
          onClick={() => setShowSearch(true)} 
          src={assets.search_icon} 
          className='w-5 cursor-pointer' 
          alt="Search Icon" 
        />
        <div className='group relative'>
          <img className='w-5 cursor-pointer' src={assets.profile_icon} alt="Profile Icon" />
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-50'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
              <p className='cursor-pointer hover:text-black'>My Profile</p>
              <p className='cursor-pointer hover:text-black'>Orders</p>
              <p className='cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div>
        </div>
        <Link to='/cart' className='relative'>
          <img src={assets.cart_icon} className='w-5 min-w-5' alt="Cart Icon" />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount}</p>
        </Link>
        <img 
          onClick={() => setVisible(true)} 
          src={assets.menu_icon} 
          className='w-5 cursor-pointer sm:hidden' 
          alt="Menu Icon" 
        />
      </div>

      {/* Sidebar menu for smaller devices */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden   bg-white transition-all duration-300 ${visible ? 'w-full' : 'w-0'}`}>
        <div className='flex flex-col text-gray-600'>
          <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3'>
            <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="Back Icon" />
            <p>Back</p>
          </div>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
        </div>
      </div>
    </div>  
  );
};

export default Navbar;
