import React from 'react';

const Trending = () => {
  return (
    <aside className="col-span-3 sticky top-0 h-screen flex flex-col py-5 pl-4 gap-6">
      <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-border-light dark:border-border-dark">
        <h2 className="text-secondary dark:text-gray-100 text-lg font-bold mb-4">Trending in India</h2>
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-accent-gray dark:text-gray-400 text-sm">1 · Politics · Trending</p>
            <p className="font-bold text-secondary dark:text-gray-200">#RightToInformation</p>
            <p className="text-accent-gray dark:text-gray-400 text-sm">15.2k posts</p>
          </div>
          <div>
            <p className="text-accent-gray dark:text-gray-400 text-sm">2 · Environment · Trending</p>
            <p className="font-bold text-secondary dark:text-gray-200">#SaveTheWesternGhats</p>
            <p className="text-accent-gray dark:text-gray-400 text-sm">11.8k posts</p>
          </div>
          <div>
            <p className="text-accent-gray dark:text-gray-400 text-sm">3 · Civic Issues · Trending</p>
            <p className="font-bold text-secondary dark:text-gray-200">#WaterScarcityDelhi</p>
            <p className="text-accent-gray dark:text-gray-400 text-sm">9,845 posts</p>
          </div>
        </div>
      </div>
      <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-border-light dark:border-border-dark">
        <h2 className="text-secondary dark:text-gray-100 text-lg font-bold mb-4">Featured Fundraisers</h2>
        <div className="flex flex-col gap-4">
          <div className="flex gap-3">
            <div className="w-20 h-20 bg-cover bg-center rounded-lg shrink-0" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCIa3KS-T_wgDr7GaTr3mkiRzXWUYwZhpNrbYQlq9kTM4eKkGpVzZOD09CIDKuHgsumF-7Jj7il4_Y1KtxoKMob7rx3SNfu5lsNh1o8IXWotlZBDio40q6gH6tx0o-LMPpyRRoB693FIgx6a6VYAYTsIGMBjSPTrOKfQ7HSgS7lChYea5pjxV6YNPDGyZ9c7eZNe2ZIfgCSsyJDdkwb0U-YwY5BZsOlhDY-h1SWDRrTInDZBMO1O8AICgVBIVcDAxk8sWnU1xuexQ')"}}></div>
            <div className="flex flex-col gap-1 justify-center">
              <p className="font-bold text-secondary dark:text-gray-200">Community Library for Rural Kids</p>
              <p className="text-sm text-accent-gray dark:text-gray-400">₹1,50,000 raised of ₹2,00,000</p>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                <div className="bg-accent-green h-1.5 rounded-full" style={{width: "75%"}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-border-light dark:border-border-dark">
        <h2 className="text-secondary dark:text-gray-100 text-lg font-bold mb-4">Who to Follow</h2>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC6swnOXOuGD0FRBA_gstiNKVAGrGJr5Yqpv22apDsZt2TAidKMtF6-s0lae9Qs6EwiZI7atBwLzuTTE6cfvJ8BDhUpqtj7zWentWq45A_6Uko1XM0Gd2aanRIFLwK2g9i9RBN1hdOd1j2QY8mn9RDqWFjMjfiCDqTlU9yrtSss4i2ceSe97D7OuoXbf5MF06rStjD4jCyQL-rYcQ0X-0Vc9ZDpqEcwsHuMqLBbsbiz93ftx9k3ulwvbfV_UgebEQwo9qdrc_VtSQ")'}}></div>
              <div>
                <p className="font-bold text-secondary dark:text-gray-200">Medha Patkar</p>
                <p className="text-sm text-accent-gray dark:text-gray-400">@Medha_NBA</p>
              </div>
            </div>
            <button className="rounded-full bg-secondary dark:bg-gray-200 text-white dark:text-secondary px-4 py-1.5 text-sm font-bold">Follow</button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Trending;
