'use client';

import React from 'react';
import Image from 'next/image';
import image1 from '../../static/website.jpg';
import image2 from '../../static/webdev.jpeg';

const AboutUs: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-black">
      {/* About Us Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-white mb-4">About Us</h1>
        <p className="text-lg text-green-600 mb-8">
          At Tenazity, we are dedicated to providing top-notch services to small and medium-scale businesses.
          Our expertise includes:
        </p>
      </div>

      {/* Services Section with Static Cards */}
      <div className="flex justify-center space-x-8 mb-16">
        {/* Service Card 1 */}
        <div className="service-card">
          <Image src={image1} alt="Website Building" className="h-3/5 w-full object-cover mb-4 rounded-lg" />
          <h3 className="text-xl font-semibold mb-2">Website Building</h3>
          {/* <p className="text-gray-600"> */}
          {/*   Crafting beautiful and responsive websites tailored to your business needs. */}
          {/* </p> */}
        </div>

        {/* Service Card 2 */}
        <div className="service-card">
          <Image src={image2} alt="Web Application Development" className="h-3/5 w-full object-cover mb-4 rounded-lg" />
          <h3 className="text-xl font-semibold mb-2">Web Application Development</h3>
          {/* <p className="text-gray-600"> */}
          {/*   Building robust web applications that enhance user engagement and streamline processes. */}
          {/* </p> */}
        </div>

        {/* Service Card 3 */}
        <div className="service-card">
          <img src="/path/to/your/image3.jpg" alt="Custom Solutions" className="h-3/5 w-full object-cover mb-4 rounded-lg" />
          <h3 className="text-xl font-semibold mb-2">Custom Solutions</h3>
          {/* <p className="text-gray-600"> */}
          {/*   Developing tailor-made solutions to meet the unique challenges of your business. */}
          {/* </p> */}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-semibold text-center mb-8">What Our Clients Say</h2>
        <div className="space-y-6">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">
              "Tenazity transformed our online presence! Their website building service exceeded our expectations."
            </p>
            <p className="font-semibold">— Sarah L., Small Business Owner</p>
          </div>
          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">
              "The web application they developed for us is fantastic. It streamlined our operations significantly!"
            </p>
            <p className="font-semibold">— Mark T., Startup Founder</p>
          </div>
          {/* Testimonial 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">
              "Amazing service! They listened to our needs and delivered exactly what we were looking for."
            </p>
            <p className="font-semibold">— Lisa R., Entrepreneur</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
