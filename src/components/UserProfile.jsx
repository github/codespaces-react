import React from 'react';

const UserProfile = () => {
  return (
    <div className="flex-1">
      <div className="flex flex-wrap justify-between gap-3 pb-6">
        <p className="text-3xl lg:text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">Account Settings</p>
      </div>
      <div className="space-y-8">
        <section className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
          <h2 className="text-xl lg:text-[22px] font-bold leading-tight tracking-[-0.015em] pb-5">Impact Score</h2>
          <div className="flex flex-col sm:flex-row items-start justify-start gap-6">
            <div className="w-full sm:w-1/3 bg-center bg-no-repeat aspect-square bg-cover rounded-lg" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDG_ukauUz0sK4IaHIUmcGR2AdulddPZUvmld19WCt3hqFMjalGYQVs-iWWvMKYAcIFriQP6Yp4JlOslmetmjGplWfT8n8G-4LBJSEhqcvJjjrv4CnPA2N0F-Sm0co61w2jDAtod0fhEGBKEbyNV8QTxt6cSC1p_9_PBZ2D6SEfhDp9lzi_qMEmmopvz1ojv9d0bjPeZQTofBJpqHI8vxi3lD20J5yTJdJqgghdQI3mVFiz5kPda644OgpJ-wXeZSBbcX9TxCcMLQ")' }}></div>
            <div className="flex w-full sm:w-2/3 grow flex-col items-stretch justify-center gap-2">
              <p className="text-[#60728a] dark:text-gray-400 text-sm font-normal leading-normal">Total Balance</p>
              <p className="text-secondary dark:text-indigo-300 text-5xl font-bold leading-tight tracking-[-0.015em]">12,500</p>
              <p className="text-[#111418] dark:text-white text-lg font-semibold mt-2">Karma Points</p>
              <p className="text-[#60728a] dark:text-gray-400 text-base font-normal leading-normal">Your current balance available for redemption or donation.</p>
            </div>
          </div>
        </section>
        <section className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
          <h2 className="text-xl lg:text-[22px] font-bold leading-tight tracking-[-0.015em] pb-5">Profile Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
            <label className="flex flex-col">
              <p className="text-base font-medium leading-normal pb-2">Full Name</p>
              <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark h-12 placeholder:text-subtle-light dark:placeholder:text-subtle-dark p-3 text-base font-normal leading-normal" value="Priya Sharma" />
            </label>
            <label className="flex flex-col">
              <p className="text-base font-medium leading-normal pb-2">Username</p>
              <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark h-12 placeholder:text-subtle-light dark:placeholder:text-subtle-dark p-3 text-base font-normal leading-normal" value="priya_sharma" />
            </label>
            <label className="flex flex-col sm:col-span-2">
              <p className="text-base font-medium leading-normal pb-2">Bio</p>
              <textarea className="form-textarea flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark min-h-24 placeholder:text-subtle-light dark:placeholder:text-subtle-dark p-3 text-base font-normal leading-normal">Voice for change. Advocate for digital rights in India.</textarea>
            </label>
          </div>
        </section>
        <div className="pt-6 flex justify-end items-center gap-4">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark text-base font-bold leading-normal tracking-[0.015em] border border-border-light dark:border-border-dark">
            <span className="truncate">Cancel</span>
          </button>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Save Changes</span>
          </button>
        </div>
      </div>
    </div>
  )
};

export default UserProfile;
