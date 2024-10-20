'use client';

import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center py-16 px-4 bg-black">
      {/* Header */}
      <h1 className="text-4xl font-bold text-white-600 mb-8">Contact Us</h1>

      {/* Contact Information */}
      <div className="mb-10 text-center">
        <div className="mt-6 space-y-2">
          <p className="text-lg">✉️ Email: akileshjayaraman@proton.me</p>
          <p className="text-lg">📍 Address: RS Puram, Coimbatore</p>
        </div>
      </div>

      {/* Contact Form */}
      <form className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-black mb-4">Send Us a Message</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            placeholder="Your Message"
            rows={4}
            required
          ></textarea>
        </div>
        <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-500">
          Send Message
        </button>
      </form>


      {/* Optional Social Media Links */}
      <div className="mt-10 text-center">
        <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-green-600 hover:text-green-500">Instagram</a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

