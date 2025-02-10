// import React, { useContext } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import { assets } from '../assets/assets';

// const SearchBar = () => {
//     const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);

//     // If search bar is not visible, return null early (optimized conditional rendering)
//     if (!showSearch) return null;

//     return  showSearch && visible? (
//         <div className='border-t border-b bg-gray-50 text-center py-4'>
//             <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
//                 <input
//                     value={search}
//                     onChange={(e) => setSearch(e.target.value)}
//                     className='flex-1 outline-none bg-inherit text-sm'
//                     type="text"
//                     placeholder='Search'
//                     aria-label='Search'
//                 />
//                 <img className='w-4 cursor-pointer' src={assets.search_icon} alt="Search Icon" />
//             </div>
//             <img
//                 onClick={() => setShowSearch(false)}
//                 className='inline w-3 cursor-pointer'
//                 src={assets.cross_icon}
//                 alt="Close Search"
//                 aria-label="Close Search"
//             />
//         </div>
//     );
// };

// export default SearchBar;



import React, { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';

const SearchBar = () => {
    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
    const [visible, setVisible] = useState(false);
    const location = useLocation();

    // Effect to toggle search bar visibility based on the route
    useEffect(() => {
        if (location.pathname.includes('collection') && showSearch) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }, [location, showSearch]); 

    // If search bar is not visible, return null early (optimized conditional rendering)
    if (!showSearch || !visible) return null;

    return (
        <div className='border-t border-b bg-gray-50 text-center py-4'>
            <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className='flex-1 outline-none bg-inherit text-sm'
                    type="text"
                    placeholder='Search'
                    aria-label='Search'
                />
                <img className='w-4 cursor-pointer' src={assets.search_icon} alt="Search Icon" />
            </div>
            <img
                onClick={() => setShowSearch(false)}
                className='inline w-3 cursor-pointer'
                src={assets.cross_icon}
                alt="Close Search"
                aria-label="Close Search"
            />
        </div>
    );
};

export default SearchBar;
