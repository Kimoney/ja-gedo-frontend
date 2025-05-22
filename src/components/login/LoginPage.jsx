// // src/pages/LoginPage.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';
// import Login from './Login';

// export default function LoginPage() {
//   return (
//     <div className="min-h-screen flex flex-col">
//       {/* Navigation Bar */}
//       <nav className="bg-white px-6 py-4 shadow-sm">
//         <div className="container mx-auto flex justify-between items-center">
//           <div className="flex items-center">
//             <Link to="/">
//               <img src="/api/placeholder/40/40" alt="JaGedo Logo" className="h-8" />
//               <span className="ml-2 text-xl font-bold text-blue-900">JaGedo</span>
//             </Link>
//           </div>
//         </div>
//       </nav>
      
//       {/* Login Container */}
//       <div className="flex-grow flex items-center justify-center bg-gray-50 p-4">
//         <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//           <div className="text-center mb-6">
//             <h2 className="text-2xl font-bold text-blue-900">Welcome Back</h2>
//             <p className="text-gray-700 font-semibold">Sign in with your credentials</p>
//           </div>
//           <Login />
//           <div className="mt-4 text-center">
//             <p className="text-gray-600">
//               Don't have an account?{" "}
//               <Link to="/signup" className="text-blue-700 hover:underline">
//                 Sign up
//               </Link>
//             </p>
//             <Link to="/" className="text-blue-700 hover:underline block mt-2">
//               Back to Home
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }