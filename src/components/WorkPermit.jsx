import React from 'react';
import Flag from 'react-world-flags';

const WorkPermit = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row items-start justify-between mt-6 lg:pt-20 px-4 lg:px-32 pb-10">
      
      <div className="lg:w-1/2 mt-10 lg:mt-0">
        <div className="overflow-hidden rounded-lg">
          <img src="./images/europe.jpg" alt="Scenic View" className="transform rounded-lg hover:scale-110 transition-all duration-500" />
        </div>
      </div>

      <div className="lg:w-1/2">
        <h1 className="text-4xl font-bold my-6 lg:text-left lg:pl-20">Work Permit</h1>
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center gap-5 mb-7 lg:pl-20">
              <Flag code="CA" style={{ height: "20px", width: "20px", borderRadius: "50%", objectFit: "cover" }} />
              <span className='font-medium text-lg'>Canada</span>
            </div>
            <div className="flex items-center gap-5 mb-10 lg:pl-20">
              <Flag code="EU" style={{ height: "20px", width: "20px", borderRadius: "50%", objectFit: "cover" }} />
              <span className='font-medium text-lg'>Europe</span>
            </div>
          </div>

          <button className="bg-yellow-400 px-4 py-2 rounded hover:bg-yellow-500 transition-all duration-300 self-start font-medium lg:ml-20">
            Learn more
          </button>
        </div>
      </div>
   
    </div>
  );
};

export default WorkPermit;
