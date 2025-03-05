import { useState } from 'react';

const ProductPage = () => {
  const [selectedImage, setSelectedImage] = useState('/images/main-tshirt.jpg');

  // Replace with your actual image paths
  const images = [
    '/images/thumbnail1.jpg',
    '/images/thumbnail2.jpg',
  ];

  const products = [
    // Add more products as needed
    {
      brand: "United Colors of Benetton",
      name: "Brand Logo Printed T-shirt",
      price: 824,
      original: 1499,
      discount: 45,
      stock: "Only Few Left!"
    },
    // ... other products
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Coupon Banner */}
      <div className="bg-red-100 p-4 rounded-lg mb-8 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-red-600">UPTO ₹500 OFF</h2>
          <p className="text-gray-600">Use Code: <span className="font-bold">MYNTRASAVE</span></p>
          <p className="text-sm text-gray-500">Applicable on your first order</p>
        </div>
        <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700">
          SIGN UP NOW
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Image Gallery Section */}
        <div className="lg:col-span-1">
          <div className="sticky top-4">
            <img 
              src={selectedImage} 
              alt="Main Product" 
              className="w-full h-96 object-contain border rounded-lg mb-4"
            />
            <div className="flex gap-4">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-24 h-24 cursor-pointer border rounded hover:border-blue-500"
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Product Info and Filters */}
        <div className="lg:col-span-2">
          {/* Filters Section */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-4">Men T-Shirts - 183630 items</h1>
            <div className="flex flex-wrap gap-4 text-sm">
              <button className="px-4 py-2 border rounded-full">Bundles ▼</button>
              <button className="px-4 py-2 border rounded-full">Country of Origin ▼</button>
              <button className="px-4 py-2 border rounded-full">Size ▼</button>
              <button className="px-4 py-2 border rounded-full">Sort by: Recommended ▼</button>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div key={index} className="border p-4 rounded-lg">
                <img 
                  src="/images/product-img.jpg" 
                  alt={product.name}
                  className="w-full h-48 object-contain mb-4"
                />
                <h3 className="font-bold">{product.brand}</h3>
                <p className="text-gray-600 text-sm mb-2">{product.name}</p>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold">Rs. {product.price}</span>
                  <span className="text-gray-500 line-through">Rs. {product.original}</span>
                  <span className="text-green-600">({product.discount}% OFF)</span>
                </div>
                {product.stock && (
                  <p className="text-red-600 text-sm mt-2">{product.stock}</p>
                )}
                <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;