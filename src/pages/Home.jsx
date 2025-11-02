import React from "react";

const Home = () => (
  <div className="font-display bg-background-light dark:bg-background-dark">
    <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        {/* Header */}
        <header className="sticky top-0 z-10 flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200/80 dark:border-gray-700/80 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm px-4 md:px-8 lg:px-10 py-3">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3 text-gray-900 dark:text-white">
              <div className="size-8 text-primary">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z" fill="currentColor"></path>
                </svg>
              </div>
              <h2 className="text-xl font-bold tracking-[-0.015em]">Voice Bharat</h2>
            </div>
            <div className="hidden lg:flex items-center gap-6">
              <a className="text-gray-800 dark:text-gray-200 text-sm font-medium leading-normal" href="#">Social Feed</a>
              <a className="text-gray-800 dark:text-gray-200 text-sm font-medium leading-normal" href="#">Raise Issue</a>
              <a className="text-gray-800 dark:text-gray-200 text-sm font-medium leading-normal" href="#">Fundraisers</a>
              <a className="text-gray-800 dark:text-gray-200 text-sm font-medium leading-normal" href="#">Protests</a>
            </div>
          </div>
          <div className="flex flex-1 justify-end items-center gap-4">
            <label className="hidden sm:flex flex-col min-w-40 !h-10 max-w-64">
              <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                <div className="text-gray-500 dark:text-gray-400 flex bg-gray-100 dark:bg-gray-800 items-center justify-center pl-3 rounded-l-lg">
                  <span className="material-symbols-outlined">search</span>
                </div>
                <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border-none bg-gray-100 dark:bg-gray-800 h-full placeholder:text-gray-500 dark:placeholder:text-gray-400 px-4 rounded-l-none border-l-0 pl-2 text-sm font-normal" placeholder="Search issues, users..." value="" />
              </div>
            </label>
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="User profile picture" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC4cc78UkLdZQrWX8uvVRNvjtpG57xji8nDLjRlFnVslmds_eGmSWJ98sLe_tKwf-sEUC80HVyz1WLxPaexMSf2L5mtfNNqOrnIRBHWljFS5YgDF9gUvAgUi3kRr0aX5D2WO8zv0MuNqMkovGYzejfi5488l8MKx672jdyY_KSoqDy5s4S7ozGosjne2Dzxr10dh9rQEpiI3R_XQBDWA40B7OqFrGDC15jADhsxUozhzRljU5wY2uTQNNaOGCm-wbARigIIm5S5fw")' }}></div>
          </div>
        </header>
        {/* Main */}
        <main className="px-4 md:px-8 lg:px-10 py-5">
          <div className="layout-content-container flex flex-col max-w-7xl mx-auto flex-1 gap-6">
            <div className="@container">
              <div
                className="flex min-h-[400px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-8 text-center"
                data-alt="A crowd of people at a peaceful protest in India, with the Indian flag visible."
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDxGfNM0RRd72uQu4_0lkH39wXskHAz1d1qTRT5sqmBnPIo8KR8a9kGzLgkWtx9MDm9Yi6wDn-AF4879e1FcK0mJV1kgEj04RBydor9Cw5JnlVxy5v5eqeY1HcDxTd0B6k3c-e9jSrolnclKVkNpBYwy3sQ9qT5kUcVSgCgfw0_tt_4FN6N2byv6hSDYtOQDqYpgZ8iIsXrjsOvJM2GopXLj18-2-ppq3vzCb2PAhcLKAAsOibCCcDxOLx4QcI5nI75deZWNvemFg")'
                }}
              >
                <div className="flex flex-col gap-2">
                  <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl">
                    Your Voice, India's Future.
                  </h1>
                  <h2 className="text-gray-200 text-base font-normal leading-normal @[480px]:text-lg">
                    Join the movement for a stronger Bharat. Create, support, and fund change.
                  </h2>
                </div>
                <div className="flex-wrap gap-3 flex justify-center">
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-gray-900 text-base font-bold leading-normal tracking-[0.015em] gap-2 hover:bg-primary/90 transition-colors">
                    <span className="material-symbols-outlined">edit_square</span>
                    <span className="truncate">Create Post</span>
                  </button>
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-background-light text-gray-900 text-base font-bold leading-normal tracking-[0.015em] gap-2 hover:bg-gray-200 transition-colors">
                    <span className="material-symbols-outlined">campaign</span>
                    <span className="truncate">Start Protest</span>
                  </button>
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-background-light text-gray-900 text-base font-bold leading-normal tracking-[0.015em] gap-2 hover:bg-gray-200 transition-colors">
                    <span className="material-symbols-outlined">volunteer_activism</span>
                    <span className="truncate">Begin Fundraiser</span>
                  </button>
                </div>
              </div>
            </div>
            {/* Grid and other cards follow here, all properly closed */}
            {/* ... (Rest of your content as in the prior JSX) ... */}
          </div>
        </main>
      </div>
    </div>
  </div>
);

export default Home;
