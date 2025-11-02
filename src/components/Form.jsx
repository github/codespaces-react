import React from 'react';

export const Input = ({ label, placeholder, type = 'text' }) => (
  <label className="flex flex-col w-full">
    <p className="text-base font-medium pb-2">{label}</p>
    <input
      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-background-light dark:bg-white/5 focus:border-primary h-14 placeholder:text-muted-light p-[15px] text-base font-normal leading-normal"
      placeholder={placeholder}
      type={type}
    />
  </label>
);

export const Textarea = ({ label, placeholder }) => (
  <div className="flex flex-col w-full">
    <p className="text-base font-medium pb-2">{label}</p>
    <div className="rounded-lg border border-border-light dark:border-border-dark focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/50 overflow-hidden">
      <textarea
        className="form-input w-full min-h-48 resize-y border-0 bg-background-light dark:bg-white/5 p-4 focus:ring-0 text-text-light dark:text-text-dark placeholder:text-muted-light"
        placeholder={placeholder}
      />
      <div className="flex items-center gap-1 border-t border-border-light dark:border-border-dark bg-white dark:bg-background-dark p-2">
        <button className="flex items-center justify-center p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-white/10 text-muted-light dark:text-muted-dark">
          <span className="material-symbols-outlined">format_bold</span>
        </button>
        <button className="flex items-center justify-center p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-white/10 text-muted-light dark:text-muted-dark">
          <span className="material-symbols-outlined">format_italic</span>
        </button>
        <button className="flex items-center justify-center p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-white/10 text-muted-light dark:text-muted-dark">
          <span className="material-symbols-outlined">format_list_bulleted</span>
        </button>
        <button className="flex items-center justify-center p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-white/10 text-muted-light dark:text-muted-dark">
          <span className="material-symbols-outlined">format_list_numbered</span>
        </button>
      </div>
    </div>
  </div>
);

export const Select = ({ label, children }) => (
  <label className="flex flex-col w-full">
    <p className="text-base font-medium pb-2">{label}</p>
    <select className="form-select flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-background-light dark:bg-white/5 focus:border-primary h-14 p-[15px] text-base font-normal">
      {children}
    </select>
  </label>
);

export const FileInput = () => (
    <div className="relative flex flex-col items-center justify-center w-full p-8 border-2 border-dashed border-border-light dark:border-border-dark rounded-xl bg-background-light dark:bg-white/5 hover:border-primary transition-colors">
        <span className="material-symbols-outlined text-4xl text-muted-light dark:text-muted-dark">cloud_upload</span>
        <p className="mt-2 text-sm text-muted-light dark:text-muted-dark"><span className="font-semibold text-primary">Click to upload</span> or drag and drop</p>
        <p className="text-xs text-muted-light dark:text-muted-dark/80">SVG, PNG, JPG, MP4 or PDF (MAX. 25MB)</p>
        <input className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer" multiple="" type="file"/>
    </div>
);


export const Button = ({ children, primary = false }) => (
  <button
    className={`w-full sm:w-auto flex items-center justify-center rounded-lg h-12 px-6 text-base font-bold transition-colors ${
      primary
        ? 'bg-primary text-white hover:bg-opacity-90'
        : 'bg-gray-200 dark:bg-white/10 text-text-light dark:text-text-dark hover:bg-gray-300 dark:hover:bg-white/20'
    }`}
  >
    {children}
  </button>
);
