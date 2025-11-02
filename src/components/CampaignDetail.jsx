import React from 'react';

const CampaignDetail = () => {
  return (
    <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-wrap gap-2 mb-6">
        <a className="text-dark-gray dark:text-gray-400 text-sm font-medium hover:text-primary" href="#">Home</a>
        <span className="text-dark-gray dark:text-gray-400 text-sm font-medium">/</span>
        <a className="text-dark-gray dark:text-gray-400 text-sm font-medium hover:text-primary" href="#">Campaigns</a>
        <span className="text-dark-gray dark:text-gray-400 text-sm font-medium">/</span>
        <span className="text-text-light dark:text-text-dark text-sm font-medium">Clean the Yamuna River</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <p className="text-text-light dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Campaign to Clean the Yamuna River</p>
            <p className="text-dark-gray dark:text-gray-400 text-lg font-normal leading-normal">Join us in restoring one of India's most sacred rivers to its pristine glory for future generations.</p>
          </div>
          <div className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden rounded-xl min-h-96" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAtnr8Hg46rUKk7Q1rYucgecxXdNRD81by0rPofie-9_sdXPxYYUdtKAr_-B4yHtMowErxIXJAlnH7J3ShGZYO1lnI7w0-CjQWC3Ikwe5wK3PF_qH0e0v6Jh3v_16y28KODAInXN7rF8Bs41Orwf9oixXdFOBXcgQz5xQ3MOyti_6HsFfzjEArnaPFmYeBC-cXusP2ypUnKl9Y0iBdo8hsMQdUHhNjeOuUXbvPEIXJZ6cxtBpCajThWT9XmAzGzEuNqV_Rtv0MapA")' }}></div>
          <div className="flex items-center gap-4 p-4 border border-light-gray dark:border-gray-800 rounded-lg bg-white dark:bg-background-dark/30">
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDnqkGmGw1Klho-w_9rOkJP31OX-3pBasKkvbsBpaTms6h6gGYU1PMEeSzUEl0hu-xrCONqrvPMMhVmIS2pknaLbfW4wZwBjBO4_soNpGbB_-9olMtZProd7k7nbV9BBF5n5oRNg3s7OFsSv3HZZub80Mc3sTxeVWXCGAguP9jeuXwdgKNP3lps5kROaCFSoPoWcOv0Mh739X49F0kEGWh5I53kgABfHB7fKnpyqMqGJifZQikDsFC3RrQtGary5mfCgUXNHgNfQQ")' }}></div>
            <div className="flex-1">
              <p className="text-sm text-dark-gray dark:text-gray-400">Created by</p>
              <p className="font-bold text-text-light dark:text-white">Anjali Sharma</p>
            </div>
            <div className="flex items-center gap-2 text-secondary-accent dark:text-green-400 bg-secondary-accent/10 dark:bg-green-900/50 px-3 py-1.5 rounded-full">
              <span className="material-symbols-outlined text-base">verified</span>
              <span className="text-xs font-bold uppercase tracking-wider">Verified Creator</span>
            </div>
          </div>
          <div className="border-b border-light-gray dark:border-gray-800">
            <nav aria-label="Tabs" className="-mb-px flex space-x-8">
              <a className="border-primary text-primary whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" href="#">Story</a>
              <a className="border-transparent text-dark-gray dark:text-gray-400 hover:text-text-light dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" href="#">Updates</a>
              <a className="border-transparent text-dark-gray dark:text-gray-400 hover:text-text-light dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" href="#">Transparency</a>
            </nav>
          </div>
          <div className="prose prose-lg dark:prose-invert max-w-none text-dark-gray dark:text-gray-300">
            <p>The Yamuna River, a lifeline for millions and a symbol of our cultural heritage, is choking. Years of pollution from industrial waste, sewage, and plastic have turned its sacred waters into a toxic stream, threatening both human health and the delicate ecosystem it supports.</p>
            <p>Our mission is to organize a multi-pronged approach to clean the Yamuna. We will partner with local communities, environmental experts, and government bodies to implement large-scale clean-up drives, install water treatment solutions, and run awareness campaigns to foster a culture of respect for our rivers.</p>
            <p>Your contribution, no matter how small, will directly fund:</p>
            <ul>
              <li>Equipment for volunteers (gloves, masks, collection tools).</li>
              <li>Installation of floating barriers to trap plastic waste.</li>
              <li>Educational workshops in schools and communities along the riverbank.</li>
              <li>Water quality testing kits to monitor our progress transparently.</li>
            </ul>
            <p>Let's come together to give the Yamuna a new lease on life. Let's ensure that future generations can experience its beauty and purity. Join the movement. Be a part of the solution. Donate today.</p>
          </div>
        </div>
        <div className="lg:col-span-1 flex flex-col gap-6 sticky top-24 self-start">
          <div className="bg-white dark:bg-background-dark/30 border border-light-gray dark:border-gray-800 rounded-xl p-6 flex flex-col gap-4 shadow-sm">
            <div className="flex gap-4 justify-between items-baseline">
              <div>
                <span className="text-3xl font-bold text-text-light dark:text-white">₹6,50,000</span>
                <span className="text-dark-gray dark:text-gray-400 text-base"> raised of ₹10,00,000 goal</span>
              </div>
            </div>
            <div className="w-full bg-light-gray dark:bg-gray-700 rounded-full h-2.5">
              <div className="bg-primary h-2.5 rounded-full" style={{ width: '65%' }}></div>
            </div>
            <div className="flex justify-between text-sm">
              <p className="text-dark-gray dark:text-gray-400"><strong className="text-text-light dark:text-white">1,204</strong> Supporters</p>
              <p className="text-dark-gray dark:text-gray-400"><strong className="text-text-light dark:text-white">21</strong> Days Left</p>
            </div>
          </div>
          <div className="bg-white dark:bg-background-dark/30 border border-light-gray dark:border-gray-800 rounded-xl p-6 flex flex-col gap-4 shadow-sm">
            <h3 className="text-lg font-bold text-center text-text-light dark:text-white">Support This Cause</h3>
            <div className="grid grid-cols-3 gap-3">
              <button className="text-center font-bold py-3 px-2 rounded-lg bg-light-gray dark:bg-gray-800 hover:bg-primary/10 dark:hover:bg-primary/20 hover:ring-2 hover:ring-primary transition-all">₹500</button>
              <button className="text-center font-bold py-3 px-2 rounded-lg bg-primary/20 dark:bg-primary/30 ring-2 ring-primary">₹1,000</button>
              <button className="text-center font-bold py-3 px-2 rounded-lg bg-light-gray dark:bg-gray-800 hover:bg-primary/10 dark:hover:bg-primary/20 hover:ring-2 hover:ring-primary transition-all">₹2,500</button>
            </div>
            <div>
              <label className="sr-only" htmlFor="custom-amount">Custom Amount</label>
              <div className="relative rounded-lg">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="text-dark-gray dark:text-gray-400 sm:text-sm">₹</span>
                </div>
                <input className="block w-full rounded-lg border-light-gray dark:border-gray-700 bg-transparent py-3 pl-7 pr-12 text-text-light dark:text-white focus:ring-primary focus:border-primary" id="custom-amount" name="custom-amount" placeholder="Or enter custom amount" type="text" />
              </div>
            </div>
            <button className="w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 bg-secondary-accent text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-secondary-accent/90 transition-colors">
              <span className="truncate">Donate Now</span>
            </button>
            <p className="text-xs text-center text-dark-gray dark:text-gray-500">Secure payments via UPI & Crypto</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CampaignDetail;
