'use client';
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await axios.post('/api/login', { email, password });
      if (response.status === 200) {
        setSuccessMessage(response.data);
      }
    } catch (error) {
      setErrorMessage('Login falhou. Verifique suas credenciais.');
    }
  };

  return (
    <section className='min-h-screen flex justify-center items-center bg-gray-100'>
      <div className='container max-w-md w-full mx-auto bg-white shadow-lg rounded-lg p-8 transform transition-transform duration-500 hover:scale-105'>
        <h2 className='text-3xl font-bold mb-8 text-center text-gray-800'>
          Login
        </h2>
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
              Email
            </label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm transition duration-300 ease-in-out transform hover:scale-105'
            />
          </div>
          <div>
            <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
              Password
            </label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm transition duration-300 ease-in-out transform hover:scale-105'
            />
          </div>
          {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
          {successMessage && <p className="text-green-500 text-sm">{successMessage}</p>}
          <button
            type='submit'
            className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition duration-300 ease-in-out transform hover:scale-105'
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
