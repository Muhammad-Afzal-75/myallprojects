import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, watch, reset } = useForm();

  const API_BASE_URL = 'https://book-store-app-e82w.onrender.com';

  // Regular user signup
  const userSignup = async (userData) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/users/signup`,
        {
          username: userData.username,
          email: userData.email,
          password: userData.password
        },
        {
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      setError('');
      setSuccess('');

      const result = await userSignup(data);
      
      setSuccess('Account created successfully! Redirecting to login...');
      reset();
      
      // Redirect to login after 2 seconds
      setTimeout(() => {
        navigate('/login');
      }, 2000);
      
    } catch (error) {
      console.error('Signup error:', error);
      
      if (error.response?.status === 400) {
        setError('Invalid data. Please check your inputs.');
      } else if (error.response?.status === 500) {
        setError('Server error. Please try again later.');
      } else if (error.code === 'ERR_NETWORK') {
        setError('Network error. Please check your connection.');
      } else if (error.response?.status === 409) {
        setError('User already exists with this email or username.');
      } else {
        setError(error.response?.data?.message || 'Signup failed. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-blue-600 p-4">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl">
        <div className="card-body">
          <h2 className="card-title justify-center text-2xl font-bold mb-2">
            Create Account
          </h2>
          <p className="text-center text-base-content/70 mb-6">Join our book community today</p>
          
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input 
                type="text"
                placeholder="Enter your username"
                className={`input input-bordered ${errors.username ? 'input-error' : ''}`}
                {...register('username', { 
                  required: 'Username is required',
                  minLength: { value: 3, message: 'Username must be at least 3 characters' }
                })} 
              />
              {errors.username && (
                <label className="label">
                  <span className="label-text-alt text-error">{errors.username.message}</span>
                </label>
              )}
            </div>

            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input 
                type="email"
                placeholder="Enter your email"
                className={`input input-bordered ${errors.email ? 'input-error' : ''}`}
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Invalid email address'
                  }
                })} 
              />
              {errors.email && (
                <label className="label">
                  <span className="label-text-alt text-error">{errors.email.message}</span>
                </label>
              )}
            </div>

            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input 
                type="password"
                placeholder="Enter your password"
                className={`input input-bordered ${errors.password ? 'input-error' : ''}`}
                {...register('password', { 
                  required: 'Password is required',
                  minLength: { value: 6, message: 'Password must be at least 6 characters' }
                })} 
              />
              {errors.password && (
                <label className="label">
                  <span className="label-text-alt text-error">{errors.password.message}</span>
                </label>
              )}
            </div>

            <div className="form-control mb-6">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input 
                type="password"
                placeholder="Confirm your password"
                className={`input input-bordered ${errors.confirmPassword ? 'input-error' : ''}`}
                {...register('confirmPassword', { 
                  required: 'Please confirm your password',
                  validate: value => value === watch('password') || 'Passwords do not match'
                })} 
              />
              {errors.confirmPassword && (
                <label className="label">
                  <span className="label-text-alt text-error">{errors.confirmPassword.message}</span>
                </label>
              )}
            </div>
            
            {error && (
              <div className="alert alert-error mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{error}</span>
              </div>
            )}
            
            {success && (
              <div className="alert alert-success mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{success}</span>
              </div>
            )}
            
            <div className="form-control mt-2">
              <button 
                type="submit" 
                disabled={isLoading} 
                className={`btn btn-primary ${isLoading ? 'loading' : ''}`}
              >
                {isLoading ? 'Signing up...' : 'Create Account'}
              </button>
            </div>
          </form>

          <div className="text-center mt-6">
            <p className="text-base-content/70">
              Already have an account?{' '}
              <a href="/login" className="link link-primary">Sign in</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;