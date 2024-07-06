import React from 'react'

export default function AboutUs() {
  return (
    <div>
        <div className="bg-zinc-100 text-center py-16">
            <div className="max-w-3xl mx-auto">
            <h2 className="text-sm font-semibold text-zinc-500">OUR MISSION</h2>
            <h1 className="text-3xl font-bold text-[#34598c] mt-2">Making learning better for everyone</h1>
            <p className="text-zinc-700 mt-4">We help people achieve independence by making it easier to start, run, and grow a business. We believe the future of commerce has more voices, not fewer, so we’re reducing the barriers to business ownership to make commerce better for everyone.</p>
            </div>
        </div>
    <div className="bg-zinc-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
            <h2 className="text-sm font-semibold text-zinc-500">OUR PEOPLE</h2>
            <h1 className="text-3xl font-bold text-[#34598c] mt-2">Creating a community for impact</h1>
            <p className="text-zinc-700 mt-4">Shopify has grown from 5 people in a coffee shop to over 5,000 across the globe. With over 1,000,000 businesses powered by Shopify, we care deeply about the work we do. We’re constant learners who thrive on change and seek to have an impact in everything we do.</p>
        </div>
        <div className="relative ml-0 md:ml-16">
            <img className="w-full rounded-lg shadow-lg" src="https://img.freepik.com/free-photo/hardworking-excited-african-american-student-feeling-happy_273609-7515.jpg" alt="Two people smiling" />
            <div className="absolute inset-0 bg-[#56739ed7] opacity-60 rounded-lg"></div>
        </div>
        </div>
    </div>
    <div className="bg-zinc-100 text-right py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-left">
        <h2 className="text-sm font-semibold text-zinc-500">OUR TOOLS</h2>
        <h1 className="text-3xl font-bold text-[#34598c] mt-2">Enhancing Your Learning Experience</h1>
        <p className="text-zinc-700 mt-4">Explore our suite of tools designed to empower your learning journey:</p>
        <ul className="list-disc list-inside mt-4 text-zinc-700">
          <li className="mb-2"><strong>AI-Powered Resources:</strong> Access curated websites, YouTube videos, and more based on your interests and queries.</li>
          <li className="mb-2"><strong>Todo List:</strong> Stay organized with a personalized task management system.</li>
          <li className="mb-2"><strong>Calendar:</strong> Plan your schedule efficiently and stay on track with important dates.</li>
          <li className="mb-2"><strong>Real-Time Messaging:</strong> Connect instantly with peers and mentors to collaborate and share insights.</li>
        </ul>
      </div>
    </div>
  </div>
  </div>
  )
}
