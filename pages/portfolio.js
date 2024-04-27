import React from 'react';
import CheckPortfolio from '../components/CheckPortfolio';
import { useRouter } from 'next/router';

const Portfolio = () => {
  const router = useRouter();

  const navigateToHome = () => {
    router.push('/');
  };

  return (
    <div className="flex flex-col h-screen bg-black">
      {/* Page title and Back to Home button */}
      <div className="bg-blue-600 text-white px-4 py-2">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Personal Portfolio</h1>
          <button onClick={navigateToHome} className="bg-blue-800 hover:bg-blue-700 text-white py-2 px-4 rounded-lg">
            Back to Home
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-grow container mx-auto px-4 py-8">
        <CheckPortfolio />
      </div>
    </div>
  );
};

export default Portfolio;


