import React from 'react';
import { Link } from 'react-router-dom';
import { productsData } from '../data/products';
import ProductCard from '../components/products/ProductCard';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
    <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
  <div className="container mx-auto px-4 text-center">
    <h1 className="text-4xl md:text-6xl font-bold mb-4">
      બજરંગ મિની ઓઇલ મિલ
    </h1>
    <p className="text-xl md:text-2xl mb-8">
      Premium Quality Oil Products
    </p>
    
    <Link
      to="/products"
      className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
    >
      Shop Now
    </Link>
  </div>
</section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Premium Oil Collection</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
            {productsData.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/products"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

     {/* About Section */}
<section className="bg-white py-20">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-4xl font-bold mb-12 text-gray-800">Why Choose Us?</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {[
        {
          title: "Premium Quality",
          desc: "We ensure the highest quality standards in all our oil products.",
          icon: "🥇"
        },
        {
          title: "Fresh & Pure",
          desc: "Our oils are freshly extracted and completely pure, preserving natural nutrients.",
          icon: "🌿"
        },
        {
          title: "Affordable Prices",
          desc: "We deliver pure, healthy oils at prices that suit every household.",
          icon: "💰"
        }
      ].map((card, index) => (
        <div
          key={index}
          className="bg-white shadow-xl rounded-2xl p-8 hover:shadow-2xl transition duration-300 ease-in-out"
        >
          <div className="text-5xl mb-4">{card.icon}</div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">{card.title}</h3>
          <p className="text-gray-600 leading-relaxed">{card.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

    </div>
  );
};

export default Home;