 

import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
    const { products, search, showSearch } = useContext(ShopContext);
    const [showfilter, setShowFilter] = useState(false);
    const [filterProducts, setFilterProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [subcategory, setSubcategory] = useState([]);
    const [sortType, setSortType] = useState('relevant');

    // Toggle category filter
    const toggleCategory = (e) => {
        setCategory(prev => 
            prev.includes(e.target.value) 
                ? prev.filter(item => item !== e.target.value) 
                : [...prev, e.target.value]
        );
    };

    // Toggle subcategory filter
    const toggleSubCategory = (e) => {
        setSubcategory(prev => 
            prev.includes(e.target.value) 
                ? prev.filter(item => item !== e.target.value) 
                : [...prev, e.target.value]
        );
    };

    // Apply filters to products
    const applyFilter = () => {
        let productsCopy = [...products];

        // Category filter
        if (category.length > 0) {
            productsCopy = productsCopy.filter(item => category.includes(item.category));
        }

        // Subcategory filter (Ensure case and trimming match)
        if (subcategory.length > 0) {
            productsCopy = productsCopy.filter(item => 
                item.subCategory && subcategory.includes(item.subCategory.trim().toLowerCase())
            );
        }

        // Search filter
        if (showSearch && search) {
            productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
        }

        setFilterProducts(productsCopy);
    };

    // Sort products based on selection
    const sortProduct = () => {
        let fpCopy = [...filterProducts];

        switch (sortType) {
            case 'low-high':
                fpCopy.sort((a, b) => a.price - b.price);
                break;
            case 'high-low':
                fpCopy.sort((a, b) => b.price - a.price);
                break;
            default:
                applyFilter();
                return;
        }

        setFilterProducts(fpCopy);
    };

    // Run filtering when products load
    useEffect(() => {
        setFilterProducts(products);
    }, [products]);

    // Run filter whenever category, subcategory, search, or showSearch changes
    useEffect(() => {
        applyFilter();
    }, [category, subcategory, search, showSearch]);

    // Run sorting when sortType changes
    useEffect(() => {
        sortProduct();
    }, [sortType]);

    return (
        <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
            {/* Filter Options */}
            <div className='min-w-60'>
                <p onClick={() => setShowFilter(!showfilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>
                    FILTERS
                    <img className={`h-3 sm:hidden ${showfilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
                </p>

                {/* Category filter */}
                <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showfilter ? 'block' : 'hidden'} sm:block`}>
                    <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                        {["Men", "Women", "Kids"].map((cat) => (
                            <p key={cat} className='flex gap-2'>
                                <input className='w-3' type="checkbox" value={cat} onChange={toggleCategory} /> {cat}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Subcategories */}
                <div className={`border border-gray-300 pl-5 py-3 mt-6 my-5 ${showfilter ? 'block' : 'hidden'} sm:block`}>
                    <p className='mb-3 text-sm font-medium'>SUBCATEGORIES</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                        {["topwear", "bottomwear", "winterwear"].map((sub) => (
                            <p key={sub} className='flex gap-2'>
                                <input className='w-3' type="checkbox" value={sub} onChange={toggleSubCategory} /> {sub.charAt(0).toUpperCase() + sub.slice(1)}
                            </p>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Side - Display Products */}
            <div className='flex-1'>
                <div className='flex justify-between text-base sm:text-2xl mb-4'>
                    <Title text1={'ALL'} text2={'COLLECTIONS'} />
                    {/* Product Sort */}
                    <select 
                        className='border-2 border-gray-300 text-sm px-2'
                        value={sortType}
                        onChange={(e) => setSortType(e.target.value)}
                    >
                        <option value="relevant">Sort by: Relevant</option>
                        <option value="low-high">Sort by: Low to High</option>
                        <option value="high-low">Sort by: High to Low</option>
                    </select>
                </div>

                {/* Product Listing */}
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
                    {filterProducts.map((item, index) => (
                        <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Collection;
