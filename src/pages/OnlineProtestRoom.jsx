import React from "react";

const PartnerDashboard = () => (
  <div className="relative flex h-screen min-h-screen w-full flex-col group/design-root overflow-hidden bg-background-light dark:bg-background-dark font-display text-stone-900 dark:text-stone-100">
    <div className="flex h-full">
      <aside className="w-64 flex-shrink-0 bg-card-light dark:bg-card-dark border-r border-border-light dark:border-border-dark flex flex-col">
        <div className="flex items-center gap-3 px-6 py-5 border-b border-border-light dark:border-border-dark">
          <div className="size-8 text-primary">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z" fill="currentColor"></path>
            </svg>
          </div>
          <h1 className="text-xl font-bold">Voice Bharat</h1>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2">
          <a className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-primary/20 text-primary font-semibold" href="#">
            <span className="material-symbols-outlined">dashboard</span>
            <span>Partner Dashboard</span>
          </a>
          {/* ...other nav links... */}
        </nav>
        <div className="p-4 border-t border-border-light dark:border-border-dark">
          <div className="flex items-center gap-3">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCn3rVX57i8f5cLa3s2_uyv652CszBUF6REl6OnQd9veSqdabzIdfr-I4PEK_60RrW2qX8vQwZxQW2Jv_xPpmH417YPFxM9Ubuiu4aTbUsWqNUZ8HS5cSqBQqve3qfll2zos1D5tWKSX6_ywLiwySFZir0lXYxDT51Q_vPPC9Jl602QFH-lf62P-3H9HmihTbC6uN0lVDkNqFphmcRqqPVi3pJkhNbQKwsr9UOEk6BGVypS5pQlT0L1IjUD3UtM-WUR7S8I2tw34g")'
              }}
            />
            <div className="flex-1">
              <p className="font-semibold text-sm">Media Partner Inc.</p>
              <p className="text-xs text-stone-500 dark:text-stone-400">Tier: Gold</p>
            </div>
            <button className="text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100">
              <span className="material-symbols-outlined">logout</span>
            </button>
          </div>
        </div>
      </aside>
      <main className="flex-1 overflow-y-auto p-6 lg:p-8">
        {/* Main header */}
        <header className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Partner Dashboard</h2>
          <p className="text-stone-600 dark:text-stone-400 mt-1">
            Welcome back, Media Partner Inc.
          </p>
        </header>
        {/* ...the dashboard grid, cards, and content go here... */}
      </main>
    </div>
  </div>
);

export default PartnerDashboard;
