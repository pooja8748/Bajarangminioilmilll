import React, { useState, useEffect } from 'react';
import { productAPI } from '../../services/api';
import { productsData } from '../../data/products';
import ProductCard from './ProductCard';
import SearchBar from '../common/SearchBar';
import Loading from '../common/Loading';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchProducts();
  }, [searchTerm]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      // Use static data for development
      let filteredProducts = productsData;
      if (searchTerm) {
        filteredProducts = productsData.filter(product => 
          product.name_english.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.name_gujarati.includes(searchTerm)
        );
      }
      setProducts(filteredProducts);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loading />;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <SearchBar 
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          placeholder="Search oils by name..."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {products.length === 0 && !loading && (
        <div className="text-center py-8">
          <p className="text-gray-500">No products found.</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;