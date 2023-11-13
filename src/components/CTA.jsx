import React, {useState} from 'react'
import Modal from './Modal'; 


const CTA = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [value, setValue] = useState();
  
  return (
    <section className="bg-[#6e4815] text-white p-20">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
      <div className="md:w-2/4 text-left">
        <h2 className="text-3xl font-semibold">Why do our clients recommend us?</h2>
        <p className="mt-4 text-lg">
          We guide our clients through each phase of their residency journey, offering personalized insights and attentive service needed to craft a successful residency application.
        </p>
      </div>
       <div className="mt-6 md:mt-0 md:w-2/4 ">
        <button className="text-black font-semibold bg-white py-2 px-4 rounded-full hover:bg-gray-200" onClick={() => setModalOpen(true)} >
          Book Free Consultation
        </button>

      </div> 
    </div>
            
    <Modal 
        isOpen={isModalOpen} 
        onClose={() => setModalOpen(false)} 
        value={value} 
        setValue={setValue} 
      />
  </section>
  )
}

export default CTA
