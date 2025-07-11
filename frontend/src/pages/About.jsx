import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">About Bajrang Mini Oil Mill</h1>
      
      <div className="max-w-4xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">🌟 Why Choose Us? — Our Special Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <span className="text-green-600 text-xl">✅</span>
              <div>
                <h3 className="font-semibold">100% Pure & Natural Oils</h3>
                <p className="text-gray-600 text-sm">All our oils are extracted using traditional methods without any chemical processing or artificial additives.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <span className="text-green-600 text-xl">✅</span>
              <div>
                <h3 className="font-semibold">Cold-Pressed / Ghani Process</h3>
                <p className="text-gray-600 text-sm">Our oils retain natural nutrients, aroma, and taste thanks to low-temperature extraction methods.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <span className="text-green-600 text-xl">✅</span>
              <div>
                <h3 className="font-semibold">Healthy for Heart & Body</h3>
                <p className="text-gray-600 text-sm">Rich in essential fatty acids, antioxidants, and vitamins—ideal for daily cooking and holistic health.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <span className="text-green-600 text-xl">✅</span>
              <div>
                <h3 className="font-semibold">No Preservatives or Colorants</h3>
                <p className="text-gray-600 text-sm">Absolutely free from harmful preservatives, synthetic flavors, and artificial colors.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <span className="text-green-600 text-xl">✅</span>
              <div>
                <h3 className="font-semibold">Tested & Verified by Plasma</h3>
                <p className="text-gray-600 text-sm">Both Bajrang Mini Oil Mill and Satvdhara Oil Mill are certified and verified by Plasma.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <span className="text-green-600 text-xl">✅</span>
              <div>
                <h3 className="font-semibold">Freshly Packed</h3>
                <p className="text-gray-600 text-sm">We prepare and pack oils in small batches to ensure freshness and long-lasting aroma.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <span className="text-green-600 text-xl">✅</span>
              <div>
                <h3 className="font-semibold">Wide Variety of Oils</h3>
                <p className="text-gray-600 text-sm">From Groundnut and Sesame to Coconut and Almond—choose from a diverse range of pure oils.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <span className="text-green-600 text-xl">✅</span>
              <div>
                <h3 className="font-semibold">Trusted by Generations</h3>
                <p className="text-gray-600 text-sm">Owned and managed by Kamlesh Ramani, Hasmukh Ramani, and Meet Ramani, serving families for decades.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-green-50 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-center">Our Mission</h2>
          <p className="text-gray-700 text-center text-lg leading-relaxed">
            To provide the finest quality cold-pressed oils that preserve traditional methods while meeting modern health standards. 
            We are committed to delivering pure, natural, and nutritious oils that enhance the well-being of our customers and their families.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;