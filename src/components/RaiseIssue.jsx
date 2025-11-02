import React from 'react';

const RaiseIssue = () => {
  return (
    <div className="flex flex-col gap-8 w-full p-8">
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
              <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-background-light dark:bg-white/5 focus:border-primary h-14 placeholder:text-muted-light p-[15px] text-base font-normal leading-normal" placeholder="e.g., Unsafe Road Conditions on MG Road" />
            </label>
            <div className="flex flex-col w-full">
              <p className="text-base font-medium pb-2">Description</p>
              <p className="text-sm text-muted-light dark:text-muted-dark pb-2">Explain the problem in detail. What is happening? Why is it important?</p>
              <div className="rounded-lg border border-border-light dark:border-border-dark focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/50 overflow-hidden">
                <textarea className="form-input w-full min-h-48 resize-y border-0 bg-background-light dark:bg-white/5 p-4 focus:ring-0 text-text-light dark:text-text-dark placeholder:text-muted-light" placeholder="Describe the issue with as much detail as possible..."></textarea>
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
                <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-background-light dark:bg-white/5 focus:border-primary h-14 placeholder:text-muted-light pl-12 pr-4 text-base font-normal" placeholder="Search for a location..." />
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
  );
};

export default RaiseIssue;
