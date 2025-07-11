import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={product.image || '/placeholder-oil.jpg'}
          alt={product.name_english}
          className="w-full h-48 object-cover"
        />
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-800">
            {product.name_english}
          </h3>
          <img 
            src="/images/plasma-verified.png" 
            alt="Plasma Verified" 
            className="h-5 w-5"
            title="Plasma Verified"
          />
        </div>
        <p className="text-sm text-gray-600 mb-2">
          {product.name_gujarati}
        </p>
        
        {product.min_price && (
          <p className="text-green-600 font-bold text-lg mb-3">
            Starting from ₹{product.min_price}
          </p>
        )}
        
        <Link
          to={`/products/${product.slug}`}
          className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors inline-block text-center"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;