import React, { useState } from 'react';

const LoginSignup = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [language, setLanguage] = useState('English');

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Side - Background Image */}
      <div 
        className="hidden lg:flex lg:w-1/2 bg-cover bg-center p-12 flex-col justify-between" 
        style={{
          backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDVm_UOh1QUBKrFmIylQGXYWxRx9J8k2Lm_fBemX7F8UNBdVUkKafUzzgqLKwhZgGhjJAkjOvIcJj18d0JFp5hI0NQBMPqj0ag5L_h54qkBEYBvO51J9OuvfJwtrlC-8Wb1UfkWulX3D-jXjKOQdQD4jWk96pLoMWe-WnKiUILJTzBiYhqcer3t10n66WxqbEhNMYFV0WyY5KpXTB_RAzc5mHafKT7sUp7cK3oV26BhRa-78umcG9cC8zxYZSw-7BJrC8pNFpaWzA')"
        }}
      >
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-white text-3xl">campaign</span>
          <h1 className="text-white text-2xl font-bold">Voice Bharat</h1>
        </div>
        <div>
          <h2 className="text-white text-4xl font-bold leading-tight">
            Empowering India's Voice for Change.
          </h2>
          <p className="text-white/80 mt-4 text-lg">
            Join a community of activists, changemakers, and citizens dedicated to building a better Bharat.
          </p>
        </div>
      </div>

      {/* Right Side - Login/Signup Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-8 md:p-12">
        <div className="max-w-md w-full mx-auto flex flex-col justify-center min-h-full">
          <header className="mb-8">
            <h2 className="text-3xl font-bold text-[#111418] dark:text-white">Welcome!</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Sign in or create an account to get started.
            </p>
          </header>

          {/* Language Selector */}
          <div className="mb-6">
            <label className="sr-only" htmlFor="language-select">Select Language</label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                language
              </span>
              <select 
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-primary focus:border-primary" 
                id="language-select"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option>English</option>
                <option>हिन्दी (Hindi)</option>
                <option>தமிழ் (Tamil)</option>
                <option>বাংলা (Bengali)</option>
                <option>मराठी (Marathi)</option>
              </select>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex border-b border-gray-200 dark:border-gray-700 mb-6">
            <button 
              className={`flex-1 py-3 text-sm font-semibold border-b-2 ${
                activeTab === 'login' 
                  ? 'border-primary text-primary' 
                  : 'border-transparent text-gray-500 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-800 dark:hover:text-gray-300'
              }`}
              onClick={() => setActiveTab('login')}
            >
              Log In
            </button>
            <button 
              className={`flex-1 py-3 text-sm font-semibold border-b-2 ${
                activeTab === 'signup' 
                  ? 'border-primary text-primary' 
                  : 'border-transparent text-gray-500 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-800 dark:hover:text-gray-300'
              }`}
              onClick={() => setActiveTab('signup')}
            >
              Sign Up
            </button>
          </div>

          {/* Login Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label 
                className="text-sm font-medium text-gray-700 dark:text-gray-300" 
                htmlFor="email"
              >
                Email or Phone
              </label>
              <input 
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white dark:bg-gray-800" 
                id="email" 
                placeholder="Enter your email or phone number" 
                type="text"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label 
                className="text-sm font-medium text-gray-700 dark:text-gray-300" 
                htmlFor="password"
              >
                Password
              </label>
              <input 
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white dark:bg-gray-800" 
                id="password" 
                placeholder="Enter your password" 
                type="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input 
                  className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" 
                  id="remember-me" 
                  name="remember-me" 
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                />
                <label 
                  className="ml-2 block text-sm text-gray-900 dark:text-gray-300" 
                  htmlFor="remember-me"
                >
                  Remember me
                </label>
              </div>
              <a className="text-sm font-medium text-primary hover:underline" href="#">
                Forgot password?
              </a>
            </div>
            <button 
              className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary" 
              type="submit"
            >
              Log In
            </button>
          </form>

          {/* Social Login */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-background-light dark:bg-background-dark text-gray-500 dark:text-gray-400">
                  Or continue with
                </span>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <button 
                className="w-full inline-flex justify-center items-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
                type="button"
              >
                <img 
                  alt="Google icon" 
                  className="w-5 h-5 mr-2" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUZARYlsbrsr75QQh5KoDrAyw-f4hNFad4Cy0gW-0DPtAQr8v8JqLEwlZ0i0fbBxh0T2BGvYs-Cm61kY-iUqwTClb2wx2Q8IiV77Itt1_JzqrFvTLMTPlhKOlS-7Xq2Xdx7dzZERvnhvEHh_QzLZDp7aFZq5zEwGAOXwASSek3sPb-9tIg7BtOf9jpc_Tv90w_BQgnl1QhCx8iVgEv5s3zzRUnumBp1yVeZZef8mDZzjgW181nlUXlkZ9tTFd8Xin-93uEnperjA"
                />
                Google
              </button>
              <button 
                className="w-full inline-flex justify-center items-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
                type="button"
              >
                <img 
                  alt="Facebook icon" 
                  className="w-5 h-5 mr-2" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhm2Hc7Q_7mMrOH-CN42knyUa5IIYNr8FU34X1Ed5MNKrUYfR8ZVnb1tLEhpyLr6_KmIq96AfFgnjgbLD-GleEhd9jOt1CQi_5g-DmBkxwbhwLxqVQcY5AFQv3f_hXaYs3wXVHNga35sv4aq3odXwnmnEJAL3cNN0jJ15gmB_GSWkxiUQJjqtzM0FVngrKn2_A-vO6ZvvslM4nK_a8MpHKAKVLr3q_DzYTooavC__4abYjBw8-D9cDLLl_VVBywdnNDCilhJWSng"
                />
                Facebook
              </button>
            </div>
          </div>

          {/* Additional Options */}
          <div className="mt-6 space-y-4 text-center">
            <a 
              className="inline-flex items-center justify-center gap-2 w-full text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary/90 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg px-4 py-2 transition-colors" 
              href="#"
            >
              <span className="material-symbols-outlined">visibility_off</span>
              Continue in Anonymous Mode
            </a>
            <a 
              className="inline-flex items-center justify-center gap-2 w-full text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-secondary dark:hover:text-secondary/90 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg px-4 py-2 transition-colors" 
              href="#"
            >
              <span className="material-symbols-outlined">corporate_fare</span>
              Government / NGO Verification
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;