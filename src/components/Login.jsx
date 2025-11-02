import React from 'react';

const Login = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center p-4">
      <div className="w-full max-w-lg mx-auto">
        <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl shadow-card">
          <div className="p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 text-primary mb-2">
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.816 1.562c.42.23.42.843 0 1.073L5.438 6.94l-.031.018c-1.42.82-1.42 2.87 0 3.69l.031.018 7.378 4.298c.42.23.42.843 0 1.073l-7.38 4.298c-1.42.82-3.23-.197-3.23-1.845v-8.6c0-1.648 1.81-2.665 3.23-1.845l7.378 4.298zM21.378 6.958C22.798 6.138 24 7.155 24 8.8v6.4c0 1.648-1.202 2.665-2.622 1.845l-7.378-4.298a.625.625 0 0 1 0-1.073l7.378-4.298z"></path>
                </svg>
                <h1 className="text-3xl font-bold text-text-light dark:text-text-dark tracking-tighter">Voice Bharat</h1>
              </div>
              <p className="text-zinc-500 dark:text-zinc-400">Join the movement. Make your voice heard.</p>
            </div>
            <form className="space-y-4">
              <div>
                <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300" htmlFor="email">Email or Phone Number</label>
                <input className="mt-1 block w-full rounded-lg border-border-light dark:border-border-dark bg-transparent py-2.5 px-3 text-text-light dark:text-text-dark focus:border-primary focus:ring-primary focus:ring-opacity-50" id="email" name="email" placeholder="you@example.com" type="email" />
              </div>
              <div>
                <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300" htmlFor="password">Password</label>
                <input className="mt-1 block w-full rounded-lg border-border-light dark:border-border-dark bg-transparent py-2.5 px-3 text-text-light dark:text-text-dark focus:border-primary focus:ring-primary focus:ring-opacity-50" id="password" name="password" placeholder="••••••••" type="password" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input className="h-4 w-4 rounded border-border-light text-primary focus:ring-primary" id="remember-me" name="remember-me" type="checkbox" />
                  <label className="ml-2 block text-sm text-zinc-600 dark:text-zinc-400" htmlFor="remember-me">Remember me</label>
                </div>
                <div className="text-sm">
                  <a className="font-medium text-accent hover:text-accent/80" href="#">Forgot password?</a>
                </div>
              </div>
              <button className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors" type="submit">Sign in / Sign up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
