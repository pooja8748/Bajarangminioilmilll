import React from 'react';

const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      title: "Field Visit: Know Your Food",
      image: "/images/happycustomer.webp",
      description: "Traditional Ghani (Cold Press) machinery for oil extraction"
    },
    {
      id: 2,
      title: "Fresh Oil Production",
      image: "/images/freshoilproduction.jpg",
      description: "Fresh groundnut oil being extracted"
    },
    {
      id: 3,
      title: "Quality Testing",
      image: "/images/plasma-verified.png",
      description: "Quality control and testing process"
    },
    {
      id: 4,
      title: "Packaging Process",
      image: "/images/packing.jpg",
      description: "Hygienic packaging of oils in various sizes"
    },
    {
      id: 5,
      title: "Raw Materials",
      image: "/images/row.webp",
      description: "Premium quality seeds and nuts for oil extraction"
    },
    {
      id: 6,
      title: "Mill Interior",
      image: "/images/millinterior.webp",
      description: "Clean and modern oil mill facility"
    },
    {
      id: 7,
      title: "Product Display",
      image: "/images/product-display.webp",
      description: "Various oil products ready for sale"
    },
    {
      id: 8,
      title: "Traditional Methods",
      image: "/images/traditional.webp",
      description: "Maintaining traditional oil extraction methods"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Our Mill Gallery</h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Take a look inside our oil mill and see how we maintain the highest standards 
        of quality and hygiene in our traditional oil extraction process.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {galleryImages.map((image) => (
          <div key={image.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="aspect-w-16 aspect-h-12">
              <img
                src={image.image}
                alt={image.title}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 mb-2">{image.title}</h3>
              <p className="text-sm text-gray-600">{image.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 bg-green-50 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-semibold mb-4">Visit Our Mill</h2>
        <p className="text-gray-700 mb-4">
          Experience the traditional oil-making process firsthand. Visit our mill to see 
          how we maintain quality and purity in every drop of oil we produce.
        </p>
        <a 
          href="https://g.co/kgs/Qcv2rWP" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
        >
          Get Directions
        </a>
      </div>
    </div>
  );
};

export default Gallery;