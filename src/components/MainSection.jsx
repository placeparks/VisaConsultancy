// MainSection.js
import React, { useState } from 'react';
import Modal from './Modal'; // Make sure the path is correct

const MainSection = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [value, setValue] = useState();

  return (
    <>
<div className="relative min-h-screen flex flex-wrap bg-blue-900 text-white p-8">
<div className="airplane-container w-full md:w-1/2 bg-no-repeat bg-cover bg-center"
     style={{ backgroundImage: 'url(/images/airplane.png)', backgroundSize: '70%'}}>
</div>


<div className="text w-full md:w-1/2 flex flex-col items-center justify-center mb-8 md:mb-0 z-2">
      <h1 className="text-6xl font-bold mb-4">Get your Second Passport</h1>
    <p className="text-xl mb-8">Unlock a world of opportunities and enjoy the freedom of travel</p>
    <button
  className="bg-green-500 px-6 py-2 rounded text-white font-bold hover:bg-green-600 mb-12 z-10"
  onClick={() => setModalOpen(true)} 
>
  Book free consultation
</button>
    <div className="custom-shape-divider-bottom-1699810272">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
    </div>
    </div>


    <Modal 
        isOpen={isModalOpen} 
        onClose={() => setModalOpen(false)} 
        value={value} 
        setValue={setValue} 
      />

   
    <section className="relative p-14 flex flex-col items-center gap-4">
  <div className="flex justify-center flex-wrap gap-4">
    <div className="bg-white p-6 rounded-lg shadow-md hover:bg-blue-100">
      <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
      <p>Paving the way for global citizenship and residence, ensuring seamless access worldwide.</p>
    </div>
    
    <div className="bg-white p-6 rounded-lg shadow-md hover:bg-blue-100">
      <h2 className="text-xl font-bold mb-2">Who We Are</h2>
      <p>We stand as a certified consultancy, guiding individuals in acquiring dual citizenship and golden visas through distinguished CBI and RBI initiatives globally.</p>
    </div>
    
    <div className="bg-white p-6 rounded-lg shadow-md hover:bg-blue-100">
      <h2 className="text-xl font-bold mb-2">Our Service Promise</h2>
      <p>Tailored and vital assistance marks our commitment to clients on their CBI or RBI venture. From selecting the optimal pathway to dedicated guidance at each phase, we ensure a smooth progression in the application journey.</p>
    </div>
  </div>

  <div className="flex justify-center flex-wrap gap-4">
    <div className="bg-white p-6 rounded-lg shadow-md hover:bg-blue-100">
      <h2 className="text-xl font-bold mb-2">Why Partner With Us</h2>
      <p>Our seasoned expertise in the immigration domain, coupled with a steadfast dedication to openness and ethical conduct, distinguishes us in the field.</p>
    </div>
    
    <div className="bg-white p-6 rounded-lg shadow-md hover:bg-blue-100">
      <h2 className="text-xl font-bold mb-2">Our Areas of Expertise</h2>
      <p>We embrace top-tier CBI and RBI programs, with a keen focus on opportunities across the European Schengen zone and the Caribbean's vibrant locales.</p>    </div>
  </div>



<span className="blob blob-1"></span>
<span className="blob blob-2"></span>
</section>"


    </>
  );
};

export default MainSection;
