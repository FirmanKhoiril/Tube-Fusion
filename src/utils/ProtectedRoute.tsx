import { useUser, useClerk } from "@clerk/clerk-react";
import React, { ReactNode } from "react";
import { useLocation } from "react-router-dom";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user } = useUser();
  const { openSignIn } = useClerk();
  const location = useLocation();

  if (!user) {
    const handleSignIn = () => {
      openSignIn({
        afterSignInUrl: location.pathname,
      });
      
    };

    return (
      <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-darkPrimary-0 text-white px-6 py-12 overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2a2829] via-[#1f1e20] to-[#0f0f10] opacity-80"></div>
        <div className="absolute w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-gradient-to-r from-green-400 to-blue-600 rounded-full opacity-50 blur-3xl top-[-50px] left-[-50px] animate-pulse"></div>
        <div className="absolute w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] bg-gradient-to-r from-purple-400 to-pink-600 rounded-full opacity-50 blur-3xl bottom-[-50px] right-[-50px] animate-pulse"></div>

        {/* Content */}
        <div className="relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 mb-4">
            Access Restricted
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-secondary-0 mb-8">
            You need to sign in to continue.
          </p>
          <button
            onClick={handleSignIn}
            className="bg-primary-0 hover:bg-green-500 text-dark-0 px-8 py-4 rounded-full font-semibold text-lg shadow-lg transition transform hover:scale-105"
          >
            Sign In
          </button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
