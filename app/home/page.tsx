'use client';

import Image from 'next/image';
import React from 'react';
import logo from '../../static/drac.webp'

const Home: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center py-16 px-8 md:px-16">
      {/* Text Section */}
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Turning innovative ideas into amazing <span className="text-green-600">solutions</span>
        </h1>
        <p className="text-lg text-gray-600">
          Unlocking the Power of Innovation: Transforming Ideas into Extraordinary Solutions.
        </p>
        <button className="bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-500">
          Contact Us
        </button>
      </div>
      <div className="logo fade-in">
        <Image src={logo} alt="Dragon" />
      </div>

     </section> 
  ); 
}; 



export default Home;

