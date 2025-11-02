export default function Polls() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex flex-wrap justify-between items-center gap-4">
              <p className="text-text-light dark:text-text-dark text-4xl font-black leading-tight tracking-[-0.033em]">Voice Your Opinion</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-card-light dark:bg-card-dark pl-4 pr-2 border border-border-light dark:border-border-dark hover:border-accent dark:hover:border-accent transition-colors">
                <p className="text-sm font-medium">Category</p>
                <span className="material-symbols-outlined text-xl">arrow_drop_down</span>
              </button>
              <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-card-light dark:bg-card-dark pl-4 pr-2 border border-border-light dark:border-border-dark hover:border-accent dark:hover:border-accent transition-colors">
                <p className="text-sm font-medium">Location</p>
                <span className="material-symbols-outlined text-xl">arrow_drop_down</span>
              </button>
              <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-accent/20 text-accent pl-4 pr-2 border border-accent">
                <p className="text-sm font-medium">Trending</p>
              </button>
              <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-card-light dark:bg-card-dark pl-4 pr-2 border border-border-light dark:border-border-dark hover:border-accent dark:hover:border-accent transition-colors">
                <p className="text-sm font-medium">Newest</p>
              </button>
              <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-card-light dark:bg-card-dark pl-4 pr-2 border border-border-light dark:border-border-dark hover:border-accent dark:hover:border-accent transition-colors">
                <p className="text-sm font-medium">Closing Soon</p>
              </button>
            </div>
            <div className="bg-card-light dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-6 space-y-4">
              <h3 className="text-2xl font-bold leading-tight">Should plastic bags be banned in major cities?</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <span className="text-success font-semibold flex items-center gap-1">Verified <span className="material-symbols-outlined text-base">verified</span></span>
                <span>•</span>
                <span>Closing in 2 days</span>
                <span>•</span>
                <span>1,452,876 Votes</span>
              </p>
              <div className="space-y-3 pt-2">
                <div className="relative w-full p-3 border border-border-light dark:border-border-dark rounded-lg cursor-pointer hover:border-accent transition-colors">
                  <div className="absolute top-0 left-0 h-full bg-accent/20 rounded-lg" style={{width: '65%'}}></div>
                  <div className="relative flex justify-between items-center">
                    <span className="font-medium">Yes</span>
                    <span className="text-sm font-semibold">65%</span>
                  </div>
                </div>
                <div className="relative w-full p-3 border border-border-light dark:border-border-dark rounded-lg cursor-pointer hover:border-accent transition-colors">
                  <div className="absolute top-0 left-0 h-full bg-accent/20 rounded-lg" style={{width: '25%'}}></div>
                  <div className="relative flex justify-between items-center">
                    <span className="font-medium">No</span>
                    <span className="text-sm font-semibold">25%</span>
                  </div>
                </div>
                <div className="relative w-full p-3 border border-border-light dark:border-border-dark rounded-lg cursor-pointer hover:border-accent transition-colors">
                  <div className="absolute top-0 left-0 h-full bg-accent/20 rounded-lg" style={{width: '10%'}}></div>
                  <div className="relative flex justify-between items-center">
                    <span className="font-medium">Undecided</span>
                    <span className="text-sm font-semibold">10%</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center pt-3">
                <div className="flex gap-2">
                  <button className="flex items-center justify-center rounded-lg h-10 px-6 bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors">
                    Vote
                  </button>
                  <button className="flex items-center justify-center rounded-lg h-10 px-3 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                    <span className="material-symbols-outlined text-xl">share</span>
                  </button>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">lock</span> Cryptographically Recorded
                </p>
              </div>
            </div>
            <div className="bg-card-light dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-6 space-y-4">
              <h3 className="text-2xl font-bold leading-tight">Should public transportation be made free in metropolitan areas?</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <span className="text-success font-semibold flex items-center gap-1">Verified <span className="material-symbols-outlined text-base">verified</span></span>
                <span>•</span>
                <span>Closing in 1 week</span>
                <span>•</span>
                <span>876,112 Votes</span>
              </p>
              <div className="space-y-3 pt-2">
                <div className="relative w-full p-3 border border-accent rounded-lg cursor-pointer bg-accent/10 dark:bg-accent/20">
                  <div className="absolute top-0 left-0 h-full bg-accent/30 rounded-lg" style={{width: '78%'}}></div>
                  <div className="relative flex justify-between items-center">
                    <span className="font-bold text-accent">Yes, for all citizens</span>
                    <span className="text-sm font-semibold text-accent">78%</span>
                  </div>
                </div>
                <div className="relative w-full p-3 border border-border-light dark:border-border-dark rounded-lg cursor-pointer hover:border-accent transition-colors">
                  <div className="absolute top-0 left-0 h-full bg-accent/20 rounded-lg" style={{width: '15%'}}></div>
                  <div className="relative flex justify-between items-center">
                    <span className="font-medium">Only for students and seniors</span>
                    <span className="text-sm font-semibold">15%</span>
                  </div>
                </div>
                <div className="relative w-full p-3 border border-border-light dark:border-border-dark rounded-lg cursor-pointer hover:border-accent transition-colors">
                  <div className="absolute top-0 left-0 h-full bg-accent/20 rounded-lg" style={{width: '7%'}}></div>
                  <div className="relative flex justify-between items-center">
                    <span className="font-medium">No</span>
                    <span className="text-sm font-semibold">7%</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center pt-3">
                <div className="flex gap-2">
                  <button className="flex items-center justify-center rounded-lg h-10 px-6 bg-success text-white text-sm font-bold gap-2" disabled>
                    <span className="material-symbols-outlined text-lg">check_circle</span>Voted
                  </button>
                  <button className="flex items-center justify-center rounded-lg h-10 px-3 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                    <span className="material-symbols-outlined text-xl">share</span>
                  </button>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">lock</span> Cryptographically Recorded
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-card-light dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-5 space-y-3">
              <h4 className="font-bold text-lg">Your Impact</h4>
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 size-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-accent text-3xl">how_to_vote</span>
                </div>
                <div>
                  <p className="font-bold text-2xl">28</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Polls Voted In</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 size-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-accent text-3xl">verified</span>
                </div>
                <div>
                  <p className="font-bold text-2xl">15</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Petitions Signed</p>
                </div>
              </div>
            </div>
            <div className="bg-card-light dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-5 space-y-3">
              <h4 className="font-bold text-lg">Trending in Mumbai</h4>
              <ul className="space-y-2">
                <li className="text-sm font-medium hover:text-accent cursor-pointer">#UrbanDevelopment</li>
                <li className="text-sm font-medium hover:text-accent cursor-pointer">#WaterConservation</li>
                <li className="text-sm font-medium hover:text-accent cursor-pointer">#PublicTransport</li>
                <li className="text-sm font-medium hover:text-accent cursor-pointer">#CleanEnergyIndia</li>
              </ul>
            </div>
            <div className="bg-card-light dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-5 space-y-4">
              <h4 className="font-bold text-lg">Support a Cause</h4>
              <div>
                <div className="aspect-video w-full rounded-lg bg-cover bg-center mb-3" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDdKdzRdvRLiGetNEsDnZvzEY8RVDib-OMlvMDwmbqseneJj8uwQ7829xIMiITUKrluZHOvCmxzYOwfa-cD3w7W1pShpRsOK1t7lyYUvdQ34afxBtSl7QG0JR11DzMq7eU9zyU-tvYs9CMcLUBKLOyGAlbP7NmGxImE2jAeiWpYQsJcc_wsT92trdQhCdULF4hmMvkWXXJKDhtzTOYY782d2pnVUJwsg113RPy26j1pvLXhhUS7JpMHJzqe2JIWD3D_keuNb07jYw')"}}></div>
                <h5 className="font-bold">Fund Clean-up of Mithi River</h5>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Join the community-led initiative to restore one of Mumbai's vital waterways.</p>
                <button className="w-full mt-3 flex items-center justify-center rounded-lg h-10 px-6 bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors">
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}