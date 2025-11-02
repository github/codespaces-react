import React from 'react';

const RaiseIssue = () => (
  <div className="font-display bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark min-h-screen">
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      <header className="sticky top-0 z-20 w-full bg-white/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-border-light dark:border-border-dark">
        <div className="container mx-auto flex items-center justify-between whitespace-nowrap px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-4 text-text-light dark:text-text-dark">
            <div className="size-6 text-primary">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_6_330)">
                  <path clipRule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fillRule="evenodd"/>
                </g>
                <defs>
                  <clipPath id="clip0_6_330">
                    <rect fill="white" height="48" width="48"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h2 className="text-lg font-bold tracking-[-0.015em]">OurVoice</h2>
          </div>
          <div className="hidden md:flex items-center gap-9">
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Home</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Discover Issues</a>
          </div>
          <div className="flex flex-1 justify-end gap-4">
            <button className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg bg-background-light dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 text-text-light dark:text-text-dark transition-colors">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" aria-label="User profile picture" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBQW2-6KKrzncfcwUqP_O61Cc36y25txFp6P_Up_AlUzy09zsjVVikSyKwL2706WP6ssiEX90GI-1sDqhqQ7z5bHC6Ah5aC7UAPFmsEVbJwiU7I4kAtTX4B6Ye1wE0Phrb_MVmbAeanHHCx0I0zgOBmg-E8jPrANVTGUa7xKu3j-BBr31oRdKpmeQL9_kMRi92Vb7k7LuGOXIX9yiVEktM7t0d7Qlv7cMcpkUcdU-T2A_INoVw2fXxWM7Fq3hJD7mx7qQv8LFm-yw")' }} />
          </div>
        </div>
      </header>

      <main className="layout-container flex h-full grow flex-col">
        <div className="w-full flex flex-1 justify-center py-5 sm:py-10">
          <div className="layout-content-container flex flex-col lg:flex-row gap-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-8 w-full lg:w-2/3">
              <div className="flex flex-wrap justify-between gap-3">
                <div className="flex min-w-72 flex-col gap-2">
                  <p className="text-4xl font-black tracking-[-0.033em]">Raise Your Voice</p>
                  <p className="text-muted-light dark:text-muted-dark text-base font-normal">Create a new post to highlight a social or local issue in your community.</p>
                </div>
              </div>

              <div className="flex flex-col gap-8 bg-white dark:bg-background-dark border border-border-light dark:border-border-dark rounded-xl p-6 sm:p-8">
                <div>
                  <h3 className="text-lg font-bold tracking-[-0.015em] pb-2">1. What is the issue?</h3>
                  <div className="flex flex-col gap-6 pt-4">
                    <label className="flex flex-col w-full">
                      <p className="text-base font-medium pb-2">Title</p>
                      <p className="text-sm text-muted-light dark:text-muted-dark pb-2">Give your issue a short, clear title.</p>
                      <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-background-light dark:bg-white/5 focus:border-primary h-14 placeholder:text-muted-light p-[15px] text-base font-normal leading-normal" placeholder="e.g., Unsafe Road Conditions on MG Road" defaultValue=""/>
                    </label>
                    <div className="flex flex-col w-full">
                      <p className="text-base font-medium pb-2">Description</p>
                      <p className="text-sm text-muted-light dark:text-muted-dark pb-2">Explain the problem in detail. What is happening? Why is it important?</p>
                      <div className="rounded-lg border border-border-light dark:border-border-dark focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/50 overflow-hidden">
                        <textarea className="form-input w-full min-h-48 resize-y border-0 bg-background-light dark:bg-white/5 p-4 focus:ring-0 text-text-light dark:text-text-dark placeholder:text-muted-light" placeholder="Describe the issue with as much detail as possible..." />
                        <div className="flex items-center gap-1 border-t border-border-light dark:border-border-dark bg-white dark:bg-background-dark p-2">
                          <button className="flex items-center justify-center p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-white/10 text-muted-light dark:text-muted-dark"><span className="material-symbols-outlined">format_bold</span></button>
                          <button className="flex items-center justify-center p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-white/10 text-muted-light dark:text-muted-dark"><span className="material-symbols-outlined">format_italic</span></button>
                          <button className="flex items-center justify-center p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-white/10 text-muted-light dark:text-muted-dark"><span className="material-symbols-outlined">format_list_bulleted</span></button>
                          <button className="flex items-center justify-center p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-white/10 text-muted-light dark:text-muted-dark"><span className="material-symbols-outlined">format_list_numbered</span></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold tracking-[-0.015em] pb-2">2. Provide Evidence</h3>
                  <p className="text-sm text-muted-light dark:text-muted-dark pb-4">Add photos, videos, or documents as proof.</p>
                  <div className="relative flex flex-col items-center justify-center w-full p-8 border-2 border-dashed border-border-light dark:border-border-dark rounded-xl bg-background-light dark:bg-white/5 hover:border-primary transition-colors">
                    <span className="material-symbols-outlined text-4xl text-muted-light dark:text-muted-dark">cloud_upload</span>
                    <p className="mt-2 text-sm text-muted-light dark:text-muted-dark"><span className="font-semibold text-primary">Click to upload</span> or drag and drop</p>
                    <p className="text-xs text-muted-light dark:text-muted-dark/80">SVG, PNG, JPG, MP4 or PDF (MAX. 25MB)</p>
                    <input className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer" multiple type="file" />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold tracking-[-0.015em] pb-2">3. Details &amp; Categorization</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                    <label className="flex flex-col w-full">
                      <p className="text-base font-medium pb-2">Category</p>
                      <p className="text-sm text-muted-light dark:text-muted-dark pb-2">Choose a category that best fits your issue.</p>
                      <select className="form-select flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-background-light dark:bg-white/5 focus:border-primary h-14 p-[15px] text-base font-normal">
                        <option>Select a category</option>
                        <option>Environment</option>
                        <option>Health &amp; Sanitation</option>
                        <option>Governance &amp; Corruption</option>
                        <option>Infrastructure</option>
                        <option>Public Safety</option>
                      </select>
                    </label>
                    <label className="flex flex-col w-full">
                      <p className="text-base font-medium pb-2">Location</p>
                      <p className="text-sm text-muted-light dark:text-muted-dark pb-2">Tag the exact location of the issue.</p>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-muted-light dark:text-muted-dark">location_on</span>
                        <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-background-light dark:bg-white/5 focus:border-primary h-14 placeholder:text-muted-light pl-12 pr-4 text-base font-normal" placeholder="Search for a location..." defaultValue=""/>
                      </div>
                    </label>
                    <label className="flex flex-col w-full md:col-span-2">
                      <p className="text-base font-medium pb-2">Tag Authorities</p>
                      <p className="text-sm text-muted-light dark:text-muted-dark pb-2">Tag relevant authorities or organizations (e.g., @MumbaiPolice).</p>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-muted-light dark:text-muted-dark">alternate_email</span>
                        <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-background-light dark:bg-white/5 focus:border-primary h-14 placeholder:text-muted-light pl-12 pr-4 text-base font-normal" placeholder="Start typing to tag..." defaultValue=""/>
                      </div>
                    </label>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-end gap-4 pt-6 border-t border-border-light dark:border-border-dark">
                  <button className="w-full sm:w-auto flex items-center justify-center rounded-lg h-12 px-6 bg-gray-200 dark:bg-white/10 text-text-light dark:text-text-dark text-base font-bold hover:bg-gray-300 dark:hover:bg-white/20 transition-colors">Save as Draft</button>
                  <button className="w-full sm:w-auto flex items-center justify-center rounded-lg h-12 px-8 bg-primary text-white text-base font-bold hover:bg-opacity-90 transition-opacity">Submit Issue</button>
                </div>
              </div>
            </div>

            <aside className="w-full lg:w-1/3 lg:sticky top-28 self-start">
              <div className="bg-secondary/10 dark:bg-secondary/20 p-6 rounded-xl">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary dark:text-cyan-300 text-2xl">lightbulb</span>
                  <h4 className="text-lg font-bold text-secondary dark:text-cyan-300">Tips &amp; Guidelines</h4>
                </div>
                <ul className="mt-4 flex flex-col gap-4 text-sm text-secondary/80 dark:text-cyan-300/80">
                  <li className="flex gap-3">
                    <span className="material-symbols-outlined text-base mt-0.5">check_circle</span>
                    <span><strong className="font-semibold">Write a clear title.</strong> Summarize the issue in one sentence.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="material-symbols-outlined text-base mt-0.5">check_circle</span>
                    <span><strong className="font-semibold">Provide good evidence.</strong> Photos and videos from the location are powerful.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="material-symbols-outlined text-base mt-0.5">check_circle</span>
                    <span><strong className="font-semibold">Be specific and factual.</strong> Stick to what you know and can prove. Avoid emotional language.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="material-symbols-outlined text-base mt-0.5">check_circle</span>
                    <span><strong className="font-semibold">Tag correctly.</strong> Mentioning the right authorities increases the chance of a response.</span>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  </div>
);

export default RaiseIssue;
