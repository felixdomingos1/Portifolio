'use Client'
import React from 'react';

const ErrorCard = ({ message }) => {
    
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4 text-red-600">Erro</h2>
        <p className="text-gray-700">{message}</p>
      </div>
    </div>
  );
};

export default ErrorCard;
