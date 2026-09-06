import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, Sun, Moon, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

const Login = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <main
      className={`relative min-h-screen flex items-center justify-center p-4 sm:p-6 transition-colors duration-500 selection:bg-indigo-500 selection:text-white ${isDarkMode ? 'dark bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'
        }`}
    >
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/20 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-violet-500/20 dark:bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Theme Toggle Button */}
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="fixed top-6 right-6 p-3 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 text-slate-700 dark:text-slate-300 shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 z-50"
        aria-label="Toggle Theme"
      >
        {isDarkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
      </button>

      {/* Login Card Container */}
      <div className="relative w-full max-w-md bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-3xl shadow-2xl dark:shadow-indigo-950/20 border border-slate-200/60 dark:border-slate-800/80 p-8 sm:p-10 space-y-8 transition-all duration-300">

        {/* Header Section */}
        <div className="space-y-2 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-indigo-600/10 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 mb-2">
            <Lock className="w-6 h-6" />
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Welcome back
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Enter your credentials to access your account
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>

          {/* Email Input Field */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
              Email Address
            </label>
            <div className="relative flex items-center">
              <Mail className="absolute left-3.5 w-5 h-5 text-slate-400 dark:text-slate-500 pointer-events-none" />
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="name@company.com"
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/80 dark:focus:ring-indigo-400/80 focus:border-transparent transition-all duration-200 text-sm"
              />
            </div>
          </div>

          {/* Password Input Field */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                Password
              </label>
              <a href="#" className="text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors">
                Forgot password?
              </a>
            </div>
            <div className="relative flex items-center">
              <Lock className="absolute left-3.5 w-5 h-5 text-slate-400 dark:text-slate-500 pointer-events-none" />
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                required
                placeholder="••••••••"
                className="w-full pl-11 pr-11 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/80 dark:focus:ring-indigo-400/80 focus:border-transparent transition-all duration-200 text-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 focus:outline-none"
                aria-label="Toggle password visibility"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="group relative w-full flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold rounded-xl shadow-md hover:shadow-indigo-500/25 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 transition-all duration-200 active:scale-[0.99]"
          >
            <span className='bg-none'>Sign in</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </form>

        {/* Divider */}
        <div className="relative flex items-center justify-center">
          <div className="w-full border-t border-slate-200 dark:border-slate-800" />
          <span className="absolute bg-white dark:bg-slate-900 px-3 text-xs uppercase tracking-wider text-slate-400">
            Or continue with
          </span>
        </div>

        {/* Social Auth Option */}
        <button
          type="button"
          className="w-full flex items-center justify-center gap-3 py-2.5 px-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50 hover:bg-slate-100 dark:hover:bg-slate-800/50 text-slate-700 dark:text-slate-300 font-medium text-sm transition-all duration-200"
        >
          {/* <Github className="w-5 h-5" /> */}
          <span>GitHub</span>
        </button>

        {/* Footer Link */}
        <p className="text-center text-sm text-slate-500 dark:text-slate-400">
          Don't have an account?{' '}
          <a href="#" className="font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">
            <Link to={"/register"}>
              Sign up for free
            </Link>
          </a>
        </p>

      </div>
    </main>
  );
};

export default Login;