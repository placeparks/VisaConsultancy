import React from 'react';
import { FaGlobeAmericas, FaChartLine, FaBalanceScale, FaHandshake } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-800 sm:text-5xl">
            About Career Migration
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Pioneering Global Mobility with Expertise and Integrity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="p-4 bg-white rounded-lg shadow-md">
                <FaGlobeAmericas className="text-blue-600 text-3xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
                <p className="text-gray-600">
                  To be the leading consultancy in immigration, shaping the future of global citizenship and residency programs.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-4 bg-white rounded-lg shadow-md">
                <FaChartLine className="text-green-600 text-3xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">Our Goal</h3>
                <p className="text-gray-600">
                  To streamline the journey toward new horizons, offering tailored guidance at every step.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="p-4 bg-white rounded-lg shadow-md">
                <FaBalanceScale className="text-yellow-500 text-3xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">Our Values</h3>
                <p className="text-gray-600">
                  Adherence to ethical practices, commitment to excellence, and a passion for client success define us.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-4 bg-white rounded-lg shadow-md">
                <FaHandshake className="text-red-600 text-3xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">Our Approach</h3>
                <p className="text-gray-600">
                  We believe in creating partnerships that are built on trust, mutual respect, and the shared goal of achieving remarkable outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
