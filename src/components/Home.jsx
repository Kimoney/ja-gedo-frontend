import { useState } from 'react';

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="bg-white px-6 py-4 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src="/api/placeholder/40/40" alt="JaGedo Logo" className="h-8" />
            <span className="ml-2 text-xl font-bold text-blue-900">JaGedo</span>
          </div>
          <div>
            <button className="bg-blue-700 text-white px-4 py-2 rounded-md mr-2">Login</button>
            <button className="bg-blue-700 text-white px-4 py-2 rounded-md">Sign Up</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold mb-8">Construct with a Builder near you!</h1>
          
          {/* Service Categories */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <ServiceCard icon="🔧" title="Fundi" />
            <ServiceCard icon="🦺" title="Professional" />
            <ServiceCard icon="🔥" title="Hardware" />
            <ServiceCard icon="🪖" title="Contractor" />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">How it Works</h2>
          <p className="text-center text-lg mb-12">
            Seamlessly connect with professionals, contractors, and suppliers in just a few steps
          </p>
        </div>
      </section>

      {/* For Customers Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">For Customers</h2>
          
          <div className="flex flex-col md:flex-row justify-between items-start max-w-6xl mx-auto">
            <ProcessStep 
              number={1} 
              title="Sign Up" 
              description="Customers create an account and provide basic details to access the platform." 
            />
            <Arrow />
            <ProcessStep 
              number={2} 
              title="Request" 
              description="Customers submit project details and requirements to receive responses from builders." 
            />
            <Arrow />
            <ProcessStep 
              number={3} 
              title="Escrow Payment" 
              description="Customers make secure payments that are held in escrow until project completion." 
            />
            <Arrow />
            <ProcessStep 
              number={4} 
              title="Job Execution Tracking" 
              description="Customers monitor project progress through updates from the service provider." 
            />
            <Arrow />
            <ProcessStep 
              number={5} 
              title="Complete and Review" 
              description="Customers release payment and leave a review for the builder." 
            />
          </div>
        </div>
      </section>

      {/* For Builder Section */}
      <section className="py-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">For Builder</h2>
          {/* Add builder process steps if needed */}
        </div>
      </section>
    </div>
  );
}

// Helper Components
function ServiceCard({ icon, title }) {
  return (
    <div className="bg-white rounded-lg p-8 flex flex-col items-center justify-center shadow-md">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-gray-800 font-medium">{title}</h3>
    </div>
  );
}

function ProcessStep({ number, title, description }) {
  return (
    <div className="flex flex-col items-center mb-8 md:mb-0 max-w-xs">
      <div className="relative">
        <div className="w-12 h-12 rounded-full bg-blue-900 text-white flex items-center justify-center text-xl font-bold mb-4">
          {number}
        </div>
      </div>
      <div className="bg-blue-900 text-white rounded-lg p-4 flex flex-col items-center mb-4">
        <span className="font-bold text-lg">{title}</span>
      </div>
      <p className="text-center text-sm">{description}</p>
    </div>
  );
}

function Arrow() {
  return (
    <div className="hidden md:flex items-center justify-center">
      <div className="text-blue-800 text-3xl">➡️</div>
    </div>
  );
}

export default Home;