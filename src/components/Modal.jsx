// Modal.js
import React from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'

const Modal = ({ isOpen, onClose, value, setValue }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full lg:w-full z-50" id="my-modal" >
      <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-1/2 lg:w-1/3 shadow-lg rounded-md bg-white text-gray-900">
        <div className="mt-3 text-center">
        <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Get free consultation</h3>
        <form className="mb-4">
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="First Name" />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Last Name" />
            </div>
          </div>
          <div className="mb-4">
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="email" placeholder="Email" />
          </div>
          <div className="mb-4">
            <div className="flex align-items-center">
          
            <PhoneInput
  placeholder="Enter phone number"
  value={value}
  onChange={setValue}
  className="phone-input"
/>
          </div>
          </div>
          <div className="mb-4">
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Nationality" />
          </div>
          <div className="mb-4">
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Country of residence" />
          </div>
          <div className="mb-4">
            <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" placeholder="Message"></textarea>
          </div>
          <div className="mb-4">
            <span>I have minimum US $100,000 to invest *</span>
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input type="radio" className="form-radio" name="investment" value="yes" />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input type="radio" className="form-radio" name="investment" value="no" />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>
          <div className="mb-4 text-right">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700">Submit</button>
          </div>
        </form>
        {/* Close button */}
          <button onClick={onClose} className="absolute top-0 right-0 mt-4 mr-4 text-xl">&times;</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
