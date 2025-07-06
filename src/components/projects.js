import React from 'react';

const Projects = () => (
  <section id="projects" className="py-20 px-6 bg-white">
    <h2 className="text-3xl font-bold text-center mb-10">Our Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      <div className="bg-gray-100 p-5 rounded shadow">
        <h4 className="font-semibold text-lg mb-2">Mandara Wellness</h4>
        <p className="text-gray-600">Full-stack wellness platform with payments, booking, and notifications.</p>
      </div>
      <div className="bg-gray-100 p-5 rounded shadow">
        <h4 className="font-semibold text-lg mb-2">Sai Dharma Tours</h4>
        <p className="text-gray-600">A dynamic travel site with booking system and mobile-optimized interface.</p>
      </div>
      <div className="bg-gray-100 p-5 rounded shadow">
        <h4 className="font-semibold text-lg mb-2">FoodFleet App UI</h4>
        <p className="text-gray-600">Clean, intuitive mobile app design for a food delivery startup.</p>
      </div>
    </div>
  </section>
);

export default Projects;
