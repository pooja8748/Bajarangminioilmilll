import React from 'react';
import { useCart } from '../../context/CartContext';

const CartItem = ({ item }) => {
  const { updateCartItem, removeFromCart } = useCart();

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity > 0) {
      updateCartItem(item.id, { quantity: newQuantity });
    }
  };

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  return (
    <div className="bg-white p-3 md:p-4 rounded-lg shadow border">
      <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
        <img
          src={item.product_image || 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=100'}
          alt={item.product_name}
          className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded mx-auto sm:mx-0"
        />
        
        <div className="flex-1 text-center sm:text-left">
          <h4 className="font-semibold text-gray-800 text-sm md:text-base">{item.product_name}</h4>
          <p className="text-xs md:text-sm text-gray-600">
            {item.package_size}{item.unit_type} - ₹{item.price}
          </p>
        </div>

        <div className="flex items-center justify-center space-x-3">
          <button
            onClick={() => handleQuantityChange(item.quantity - 1)}
            className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
          >
            -
          </button>
          <span className="w-8 text-center font-medium">{item.quantity}</span>
          <button
            onClick={() => handleQuantityChange(item.quantity + 1)}
            className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
          >
            +
          </button>
        </div>

        <div className="text-center sm:text-right">
          <p className="font-semibold text-sm md:text-base">₹{item.total_price.toFixed(2)}</p>
          <button
            onClick={handleRemove}
            className="text-red-500 hover:text-red-700 text-xs md:text-sm mt-1 transition-colors"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;