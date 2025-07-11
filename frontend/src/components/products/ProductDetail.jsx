import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { productAPI } from '../../services/api';
import { productsData } from '../../data/products';
import { useCart } from '../../context/CartContext';
import PriceTable from './PriceTable';
import Loading from '../common/Loading';

const ProductDetail = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    fetchProduct();
  }, [slug]);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      // Use static data for development
      const foundProduct = productsData.find(p => p.slug === slug);
      setProduct(foundProduct);
      if (foundProduct && foundProduct.prices.length > 0) {
        setSelectedPrice(foundProduct.prices[0]);
      }
    } catch (error) {
      console.error('Error fetching product:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = async () => {
    if (!selectedPrice) return;
    
    try {
      await addToCart({
        product: product.id,
        product_name: product.name_english,
        product_image: product.image,
        quantity,
        package_size: selectedPrice.package_size,
        unit_type: selectedPrice.unit_type,
        price: selectedPrice.price
      });
      alert('Added to cart successfully!');
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('Error adding to cart');
    }
  };

  if (loading) return <Loading />;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <img
            src={product.image || '/placeholder-oil.jpg'}
            alt={product.name_english}
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-3xl font-bold text-gray-800">
              {product.name_english}
            </h1>
            <div className="flex items-center space-x-2">
              <img 
                src="/images/plasma-verified.png" 
                alt="Plasma Verified" 
                className="h-8 w-8"
              />
              <span className="text-green-600 font-semibold">Plasma Verified</span>
            </div>
          </div>
          <h2 className="text-xl text-gray-600 mb-4">
            {product.name_gujarati}
          </h2>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-gray-700">{product.description}</p>
          </div>

          {product.features && product.features.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Features</h3>
              <ul className="list-disc list-inside text-gray-700">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          <PriceTable 
            prices={product.prices} 
            selectedPrice={selectedPrice}
            onPriceSelect={setSelectedPrice}
          />

          {selectedPrice && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-4 mb-4">
                <label className="font-semibold">Quantity:</label>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  className="w-20 px-2 py-1 border rounded"
                />
              </div>
              
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold">
                  Total: ₹{(selectedPrice.price * quantity).toFixed(2)}
                </span>
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-semibold"
              >
                Add to Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;