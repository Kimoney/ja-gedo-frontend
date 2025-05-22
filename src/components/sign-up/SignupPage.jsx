"use client"

import { useNavigate, Link } from "react-router-dom"

export default function SignupPage() {
  const navigate = useNavigate()

  const handleTypeSelect = (type) => {
    // Immediately navigate to the appropriate signup page
    navigate(`/signup/${type}`)
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <nav className="py-4 px-8 flex justify-between items-center border-b">
        <Link to="/" className="flex items-center">
          <img src="/images/jagedo-logo.png" alt="JaGedo" className="h-8" />
        </Link>
        <Link to="/login" className="bg-blue-700 text-white px-5 py-2 rounded-md hover:bg-blue-800 font-medium">
          Login
        </Link>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        {/* Logo */}
        <div className="mb-10">
          <img src="/images/jagedo-logo.png" alt="JaGedo" className="h-20" />
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-12 max-w-2xl">
          Join us today! Get special benefits and stay up-to-date.
        </h1>

        {/* User Type Selection - Using a container with fixed width */}
        <div className="w-full max-w-2xl mx-auto">
          <div className="grid grid-cols-2 gap-5">
            {/* Customer */}
            <UserTypeCard
              icon={
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
                  <circle cx="12" cy="8" r="5" />
                  <path d="M20 21v-2a7 7 0 0 0-14 0v2" />
                </svg>
              }
              type="Customer"
              to="/signup/customer"
              onClick={() => handleTypeSelect("customer")}
            />

            {/* Fundi */}
            <UserTypeCard
              icon={
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
              }
              type="Fundi"
              to="/signup/fundi"
              onClick={() => handleTypeSelect("fundi")}
            />

            {/* Professional */}
            <UserTypeCard
              icon={
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              }
              type="Professional"
              to="/signup/professional"
              onClick={() => handleTypeSelect("professional")}
            />

            {/* Contractor */}
            <UserTypeCard
              icon={
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
                  <path d="M2 20h20" />
                  <path d="M5 20V8h2v12" />
                  <path d="M17 20V8h2v12" />
                  <path d="M10 20V4h4v16" />
                  <path d="M5 8h14" />
                </svg>
              }
              type="Contractor"
              to="/signup/contractor"
              onClick={() => handleTypeSelect("contractor")}
            />
          </div>

          {/* Hardware option - Centered in its own row with same width as others */}
          <div className="mt-5 flex justify-center">
            <div className="w-[calc(50%-0.625rem)]">
              <UserTypeCard
                icon={
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                }
                type="Hardware"
                to="/signup/hardware"
                onClick={() => handleTypeSelect("hardware")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function UserTypeCard({ icon, type, onClick, to }) {
  return (
    <Link
      to={to}
      className="flex items-center p-5 border rounded-md border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-colors w-full cursor-pointer"
      onClick={onClick}
    >
      <div className="mr-4 text-gray-800">{icon}</div>
      <span className="font-medium">{type}</span>
    </Link>
  )
}
