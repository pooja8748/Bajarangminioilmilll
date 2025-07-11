import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const Header = () => {
  const { getTotalItems } = useCart();

  return (
    <header className="bg-primary-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl md:text-2xl font-bold font-gujarati">
            બજરંગ મિની ઓઇલ મિલ
          </Link>
          
          <nav className="hidden md:flex space-x-4 lg:space-x-6">
            <Link to="/" className="hover:text-primary-200 transition-colors text-sm lg:text-base">Home</Link>
            <Link to="/products" className="hover:text-primary-200 transition-colors text-sm lg:text-base">Products</Link>
            <Link to="/about" className="hover:text-primary-200 transition-colors text-sm lg:text-base">About</Link>
            <Link to="/gallery" className="hover:text-primary-200 transition-colors text-sm lg:text-base">Gallery</Link>
            <Link to="/contact" className="hover:text-primary-200 transition-colors text-sm lg:text-base">Contact</Link>
          </nav>

          <div className="flex items-center space-x-2 md:space-x-4">
            <Link to="/cart" className="relative p-2">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9" />
              </svg>
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center font-bold">
                  {getTotalItems()}
                </span>
              )}
            </Link>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <nav className="md:hidden mt-3 pt-3 border-t border-primary-500">
          <div className="flex justify-center space-x-6 text-sm">
            <Link to="/" className="hover:text-primary-200">Home</Link>
            <Link to="/products" className="hover:text-primary-200">Products</Link>
            <Link to="/about" className="hover:text-primary-200">About</Link>
            <Link to="/contact" className="hover:text-primary-200">Contact</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;