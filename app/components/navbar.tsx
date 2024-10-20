'use client';

import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center py-6 px-8 bg-black shadow-md">
      <div className="text-2xl font-bold text-white">Tenazity</div>
      <ul className="hidden md:flex space-x-8">
      </ul>
      <button className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-500">
        Projects
      </button>
    </nav>
  );
};

export default Navbar;
