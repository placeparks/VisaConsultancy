import React from 'react';
import Flag from 'react-world-flags';
import 'tailwindcss/tailwind.css'; // Make sure to import the Tailwind CSS

const ResidencyByInvestment = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start lg:justify-between mt-6 pt-10 pb-10 lg:pt-20 lg:pb-20 px-4 lg:pl-32 lg:pr-32">
      <div className="text-left lg:w-1/2">
        <h1 className="text-4xl font-bold mb-6 mt-6 w-21">Residency by Investment Programs</h1>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '10px' }}>
            <Flag code="CA" style={{ height: "20px", width: "20px", borderRadius: "50%", objectFit:"cover" }} />
            <span className='font-medium text-lg'>Canada</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '10px' }}>
            <Flag code="EU" style={{ height: "20px", width: "20px", borderRadius: "50%", objectFit:"cover" }} />
            <span className='font-medium text-lg'>Europe</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '10px' }}>
            <Flag code="AU" style={{ height: "20px", width: "20px", borderRadius: "50%", objectFit:"cover" }} />
            <span className='font-medium text-lg'>Australia</span>
          </div>
        </div>


        <button className="bg-yellow-400 px-4 py-2 rounded hover:bg-yellow-500 transition-all duration-300 mt-6 font-medium">
          Learn more
        </button>
      </div>
      <div className="lg:w-1/2 mt-10 lg:mt-0">
        <div className="overflow-hidden rounded-lg shadow-lg">
          <img src="./images/canada.jpg" alt="Scenic View" className="transform hover:scale-110 transition-all duration-500" />
        </div>
      </div>
    </div>
  );
};

export default ResidencyByInvestment;
