import React from 'react';

const PriceTable = ({ prices, selectedPrice, onPriceSelect }) => {
  if (!prices || prices.length === 0) {
    return <div>No pricing information available</div>;
  }

  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-3">Available Packages</h3>
      <div className="grid gap-2">
        {prices.map((price) => (
          <div
            key={price.id}
            onClick={() => onPriceSelect(price)}
            className={`p-3 border rounded-lg cursor-pointer transition-colors ${
              selectedPrice?.id === price.id
                ? 'border-green-500 bg-green-50'
                : 'border-gray-200 hover:border-green-300'
            }`}
          >
            <div className="flex justify-between items-center">
              <span className="font-medium">
                {price.package_size}{price.unit_type}
              </span>
              <span className="text-green-600 font-bold">
                ₹{price.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceTable;