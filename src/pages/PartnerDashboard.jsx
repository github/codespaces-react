import React from 'react';

const PartnerDashboard = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#111418] dark:text-gray-200 min-h-screen">
      <div className="relative flex h-auto min-h-screen w-full overflow-x-hidden">
        <div className="flex w-full">
          <aside className="w-64 bg-surface-light dark:bg-surface-dark border-r border-border-light dark:border-border-dark flex flex-col p-4 shrink-0">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 px-2">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                  aria-label="JanAwaz platform logo"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC8ZnubVvnHuwR2iz1J5xf2qI8ImQEpRhowbhCVKjvpk6e_be9VGuKL4h_ApJy3Vf-BpYvN9F7jfmqFegJefwUmugVz6cSbUmmlWFowwVtGAk-jvcQgdHUGRlcaFw8XtYtv0E2ujxt82QBO4I-16Yeou7-8POBWXdMes27HUgn924ZQtWPHyoAB8oEKr-aBCZ0HBCbJLi5o0lHWvDTtK_2bD3V9xjBhgNB9VApW39eBRoRuLhIl9xZhMCSGhWpjPQefkmrIN8tygQ")' }}
                />
                <div className="flex flex-col">
                  <h1 className="text-secondary dark:text-gray-100 text-base font-bold leading-normal">Voice Bharat</h1>
                  <p className="text-accent-gray dark:text-gray-400 text-sm font-normal leading-normal">Partner API</p>
                </div>
              </div>
              <nav className="flex flex-col gap-2 mt-6">
                <a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/20 text-secondary dark:text-gray-100" href="#">
                  <span className="material-symbols-outlined text-secondary dark:text-gray-100">dashboard</span>
                  <p className="text-sm font-bold leading-normal">Dashboard</p>
                </a>
                <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-surface-dark/50 text-gray-700 dark:text-gray-300" href="#">
                  <span className="material-symbols-outlined">key</span>
                  <p className="text-sm font-medium leading-normal">API Keys</p>
                </a>
                <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-surface-dark/50 text-gray-700 dark:text-gray-300" href="#">
                  <span className="material-symbols-outlined">analytics</span>
                  <p className="text-sm font-medium leading-normal">Usage &amp; Analytics</p>
                </a>
                <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-surface-dark/50 text-gray-700 dark:text-gray-300" href="#">
                  <span className="material-symbols-outlined">description</span>
                  <p className="text-sm font-medium leading-normal">API Docs</p>
                </a>
                <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-surface-dark/50 text-gray-700 dark:text-gray-300" href="#">
                  <span className="material-symbols-outlined">settings</span>
                  <p className="text-sm font-medium leading-normal">Settings</p>
                </a>
              </nav>
            </div>
            <div className="flex flex-col gap-4 mt-auto">
              <div className="border-t border-border-light dark:border-border-dark pt-4 flex items-center gap-3 px-3 py-2">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                  aria-label="User profile avatar"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCwzEatX-eSOy0Hl5hG8AbS8G8ixmBLKeH2xpQfUJ4V-k-eBiY8478gVi7FTMoD-GcNrt3z3W4JBjo5rgfeWrRej9s2w6Lad_evDMJva2qeXeA3jy93gd7gT4oR6mZOxFdQ8AVHmdcKUGXUA_iUsCWEiZxiIgtFuaFD0pRcI_0vYVfH6PScBYf-3CQa-lDQEP5GwX2aIzc_3_6Lb62hzi4XQRcmD1gx4kFugIFsu-Avc0ima0UWSC7DPvoudodFjbXh7nlDzdHCaw")' }}
                />
                <div className="flex flex-col">
                  <p className="text-secondary dark:text-gray-100 text-sm font-bold leading-normal">Media Partner Inc.</p>
                  <p className="text-accent-gray dark:text-gray-400 text-sm font-normal leading-normal">@mediapartner</p>
                </div>
              </div>
            </div>
          </aside>
          <main className="flex-grow p-8">
            <header className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-secondary dark:text-gray-100">Partner Dashboard</h1>
              <div className="flex items-center gap-4">
                <button className="flex min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-white dark:bg-surface-dark border border-border-light dark:border-border-dark text-secondary dark:text-gray-200 text-sm font-bold leading-normal tracking-[0.015em]">
                  <span className="material-symbols-outlined text-base">download</span>
                  <span className="truncate">Export Data</span>
                </button>
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-primary text-secondary dark:text-background-dark text-sm font-bold leading-normal tracking-[0.015em]">
                  <span className="material-symbols-outlined text-base">add</span>
                  <span className="truncate">New API Key</span>
                </button>
              </div>
            </header>
            <section className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-border-light dark:border-border-dark mb-8">
              <h2 className="text-xl font-bold text-secondary dark:text-gray-100 mb-4">API Key Management</h2>
              <div className="divide-y divide-border-light dark:divide-border-dark">
                <div className="flex items-center justify-between py-4">
                  <div>
                    <p className="font-bold text-secondary dark:text-gray-200">Main Production Key</p>
                    <p className="text-sm text-accent-gray dark:text-gray-400">vb_prod_••••••••••••••••••••••••a4f2</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="inline-flex items-center rounded-full bg-green-100 dark:bg-green-900 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:text-green-200">Active</span>
                    <button className="text-accent-gray dark:text-gray-400 hover:text-secondary dark:hover:text-gray-200">
                      <span className="material-symbols-outlined">content_copy</span>
                    </button>
                    <button className="text-accent-gray dark:text-gray-400 hover:text-secondary dark:hover:text-gray-200">
                      <span className="material-symbols-outlined">edit</span>
                    </button>
                    <button className="text-accent-gray dark:text-gray-400 hover:text-red-600">
                      <span className="material-symbols-outlined">delete</span>
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between py-4">
                  <div>
                    <p className="font-bold text-secondary dark:text-gray-200">Staging Environment Key</p>
                    <p className="text-sm text-accent-gray dark:text-gray-400">vb_stage_••••••••••••••••••••••••c1b9</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="inline-flex items-center rounded-full bg-green-100 dark:bg-green-900 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:text-green-200">Active</span>
                    <button className="text-accent-gray dark:text-gray-400 hover:text-secondary dark:hover:text-gray-200">
                      <span className="material-symbols-outlined">content_copy</span>
                    </button>
                    <button className="text-accent-gray dark:text-gray-400 hover:text-secondary dark:hover:text-gray-200">
                      <span className="material-symbols-outlined">edit</span>
                    </button>
                    <button className="text-accent-gray dark:text-gray-400 hover:text-red-600">
                      <span className="material-symbols-outlined">delete</span>
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between py-4">
                  <div>
                    <p className="font-bold text-secondary dark:text-gray-200">Old Analytics Key</p>
                    <p className="text-sm text-accent-gray dark:text-gray-400">vb_old_••••••••••••••••••••••••e8d5</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="inline-flex items-center rounded-full bg-red-100 dark:bg-red-900 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:text-red-200">Revoked</span>
                    <button className="text-accent-gray dark:text-gray-400 hover:text-secondary dark:hover:text-gray-200">
                      <span className="material-symbols-outlined">content_copy</span>
                    </button>
                    <button className="text-accent-gray dark:text-gray-400 hover:text-secondary dark:hover:text-gray-200">
                      <span className="material-symbols-outlined">edit</span>
                    </button>
                    <button className="text-accent-gray dark:text-gray-400 hover:text-red-600">
                      <span className="material-symbols-outlined">delete</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <section className="lg:col-span-2 bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
                <h2 className="text-xl font-bold text-secondary dark:text-gray-100 mb-4">Trending Issues &amp; Insights</h2>
                <div className="flex flex-col gap-4">
                  <div className="p-4 rounded-lg bg-background-light dark:bg-background-dark">
                    <p className="text-sm text-accent-gray dark:text-gray-400">1 · Civic Issues · Trending in Delhi</p>
                    <p className="font-bold text-secondary dark:text-gray-200 mt-1">#DelhiWaterCrisis</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">Spike in conversations related to water shortages and municipal tanker services. High engagement from East Delhi.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-background-light dark:bg-background-dark">
                    <p className="text-sm text-accent-gray dark:text-gray-400">2 · Environment · Trending in Maharashtra</p>
                    <p className="font-bold text-secondary dark:text-gray-200 mt-1">#SaveAareyForest</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">Renewed interest driven by recent court rulings. Petitions and fundraiser activities are seeing a 30% increase.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-background-light dark:bg-background-dark">
                    <p className="text-sm text-accent-gray dark:text-gray-400">3 · Politics · Trending Nationwide</p>
                    <p className="font-bold text-secondary dark:text-gray-200 mt-1">#DigitalIndiaAct</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">Discussions focusing on data privacy clauses. Sentiment analysis shows 65% concern, 25% support, 10% neutral.</p>
                  </div>
                </div>
              </section>
              <section className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
                <h2 className="text-xl font-bold text-secondary dark:text-gray-100 mb-4">API Usage</h2>
                <p className="text-sm text-accent-gray dark:text-gray-400 mb-4">Current Billing Cycle (1st-31st July)</p>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <p className="text-sm font-medium text-secondary dark:text-gray-200">API Calls</p>
                      <p className="text-sm text-accent-gray dark:text-gray-400">75,230 / 100,000</p>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div className="bg-primary h-2.5 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <p className="text-sm font-medium text-secondary dark:text-gray-200">Data Endpoints</p>
                      <p className="text-sm text-accent-gray dark:text-gray-400">4 / 5 Active</p>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div className="bg-primary h-2.5 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <p className="text-sm font-medium text-secondary dark:text-gray-200">NGO Data Points</p>
                      <p className="text-sm text-accent-gray dark:text-gray-400">12,500 Accessed</p>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div className="bg-accent-green h-2.5 rounded-full" style={{ width: '50%' }}></div>
                    </div>
                  </div>
                  <div className="text-center pt-2">
                    <a className="text-primary font-bold text-sm" href="#">View Detailed Stats</a>
                  </div>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default PartnerDashboard;
