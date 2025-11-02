import React from "react";

const Messages = () => (
  <div className="relative flex h-screen min-h-screen w-full flex-col group/design-root overflow-hidden bg-background-light dark:bg-background-dark font-display">
    {/* Header */}
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-stone-200/80 dark:border-stone-800/80 px-4 sm:px-6 lg:px-8 py-3 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
      <div className="flex items-center gap-8 w-full">
        <div className="flex items-center gap-4 text-stone-900 dark:text-stone-100">
          <div className="size-6 text-primary">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z" fill="currentColor"></path>
            </svg>
          </div>
          <h2 className="text-stone-900 dark:text-stone-100 text-lg font-bold leading-tight tracking-[-0.015em]">Voice Bharat</h2>
        </div>
      </div>
      <div className="flex items-center justify-end gap-2">
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]">
          <span className="truncate">Create Post</span>
        </button>
        <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-stone-200/50 dark:bg-stone-800/50 text-stone-800 dark:text-stone-200 gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCn3rVX57i8f5cLa3s2_uyv652CszBUF6REl6OnQd9veSqdabzIdfr-I4PEK_60RrW2qX8vQwZxQW2Jv_xPpmH417YPFxM9Ubuiu4aTbUsWqNUZ8HS5cSqBQqve3qfll2zos1D5tWKSX6_ywLiwySFZir0lXYxDT51Q_vPPC9Jl602QFH-lf62P-3H9HmihTbC6uN0lVDkNqFphmcRqqPVi3pJkhNbQKwsr9UOEk6BGVypS5pQlT0L1IjUD3UtM-WUR7S8I2tw34g")' }}></div>
      </div>
    </header>
    {/* Main Grid */}
    <main className="flex-1 w-full max-w-screen-2xl mx-auto flex overflow-hidden">
      <div className="flex flex-1 h-full">
        {/* Sidebar - Messages List */}
        <aside className="w-full max-w-sm flex-shrink-0 border-r border-stone-200/80 dark:border-stone-800/80 bg-white dark:bg-stone-900/50 flex flex-col h-full">
          <div className="p-4 border-b border-stone-200/80 dark:border-stone-800/80">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-stone-900 dark:text-stone-100">Messages</h2>
              <button className="flex items-center justify-center size-9 rounded-lg bg-primary/20 text-primary">
                <span className="material-symbols-outlined">edit_square</span>
              </button>
            </div>
            <label className="flex flex-col w-full">
              <div className="flex w-full flex-1 items-stretch rounded-lg h-10">
                <div className="text-stone-500 dark:text-stone-400 flex bg-stone-100 dark:bg-stone-800 items-center justify-center pl-3 rounded-l-lg border-r-0">
                  <span className="material-symbols-outlined text-xl">search</span>
                </div>
                <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-stone-900 dark:text-stone-100 focus:outline-0 focus:ring-0 border-none bg-stone-100 dark:bg-stone-800 h-full placeholder:text-stone-500 dark:placeholder:text-stone-400 px-4 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal" placeholder="Search conversations..." value="" />
              </div>
            </label>
          </div>
          <div className="flex-1 overflow-y-auto">
            {/* One conversation card (repeat for others) */}
            <div className="flex items-center gap-3 p-3 bg-primary/20 cursor-pointer">
              <div className="relative">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAezIlsyy2-MGYx15tqNxFihaur0cEnd3O996ABuVbxqbVBwIYJifNu26MXm1sZjn4C_p9M0ezLESdhZThGM30pLYTi45hVSX_UY9XVkofmRru_881ZWQdLePg9AtjC1Ut9pACBZkrvISojmPanXRpwFQD3VOVpXUcYcq6NVx1b-T6oLPmSqwSOFYqNSNfESMnNa7VaUP151E8sRGmoqfQ3vC1ci-LpinmfjHB7SxuFO_rHJhJEMaJ5SkDJnsrsggST6dFjyTtn8Q")' }}></div>
                <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-500 border-2 border-white dark:border-stone-900"></span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <p className="font-bold text-primary">Rohan Das</p>
                  <p className="text-xs text-primary/80">10:42 AM</p>
                </div>
                <p className="text-sm text-stone-700 dark:text-stone-300 truncate">Let's coordinate on the protest details...</p>
              </div>
            </div>
            {/* Add more conversation cards here following above structure */}
          </div>
        </aside>
        {/* Chat Window */}
        <div className="flex-1 flex flex-col bg-background-light dark:bg-background-dark h-full">
          <div className="flex items-center justify-between p-4 border-b border-stone-200/80 dark:border-stone-800/80">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-11" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAezIlsyy2-MGYx15tqNxFihaur0cEnd3O996ABuVbxqbVBwIYJifNu26MXm1sZjn4C_p9M0ezLESdhZThGM30pLYTi45hVSX_UY9XVkofmRru_881ZWQdLePg9AtjC1Ut9pACBZkrvISojmPanXRpwFQD3VOVpXUcYcq6NVx1b-T6oLPmSqwSOFYqNSNfESMnNa7VaUP151E8sRGmoqfQ3vC1ci-LpinmfjHB7SxuFO_rHJhJEMaJ5SkDJnsrsggST6dFjyTtn8Q")' }}></div>
                <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-500 border-2 border-white dark:border-background-dark"></span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-bold text-stone-900 dark:text-stone-100">Rohan Das</h3>
                  <span className="material-symbols-outlined text-blue-500 text-base">verified</span>
                </div>
                <p className="text-sm text-stone-500 dark:text-stone-400">@rohandas_eco · Online</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-stone-600 dark:text-stone-400">
              <button className="p-2 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800/50"><span className="material-symbols-outlined">block</span></button>
              <button className="p-2 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800/50"><span className="material-symbols-outlined">report</span></button>
              <button className="p-2 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800/50"><span className="material-symbols-outlined">delete</span></button>
            </div>
          </div>
          <div className="flex-1 p-6 space-y-6 overflow-y-auto">
            {/* Chat bubbles example */}
            <div className="flex items-start gap-3 max-w-lg">
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8 flex-shrink-0" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAezIlsyy2-MGYx15tqNxFihaur0cEnd3O996ABuVbxqbVBwIYJifNu26MXm1sZjn4C_p9M0ezLESdhZThGM30pLYTi45hVSX_UY9XVkofmRru_881ZWQdLePg9AtjC1Ut9pACBZkrvISojmPanXRpwFQD3VOVpXUcYcq6NVx1b-T6oLPmSqwSOFYqNSNfESMnNa7VaUP151E8sRGmoqfQ3vC1ci-LpinmfjHB7SxuFO_rHJhJEMaJ5SkDJnsrsggST6dFjyTtn8Q")' }}></div>
              <div className="space-y-1">
                <div className="bg-stone-100 dark:bg-stone-800/80 p-3 rounded-lg rounded-tl-none">
                  <p className="text-stone-800 dark:text-stone-200">
                    Hey, are you free to discuss the upcoming rally for #SaveTheGanges? We need to finalize the posters.
                  </p>
                </div>
                <p className="text-xs text-stone-500 dark:text-stone-400 px-2">10:35 AM</p>
              </div>
            </div>
            <div className="flex items-start gap-3 max-w-lg ml-auto flex-row-reverse">
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8 flex-shrink-0" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCn3rVX57i8f5cLa3s2_uyv652CszBUF6REl6OnQd9veSqdabzIdfr-I4PEK_60RrW2qX8vQwZxQW2Jv_xPpmH417YPFxM9Ubuiu4aTbUsWqNUZ8HS5cSqBQqve3qfll2zos1D5tWKSX6_ywLiwySFZir0lXYxDT51Q_vPPC9Jl602QFH-lf62P-3H9HmihTbC6uN0lVDkNqFphmcRqqPVi3pJkhNbQKwsr9UOEk6BGVypS5pQlT0L1IjUD3UtM-WUR7S8I2tw34g")' }}></div>
              <div className="space-y-1">
                <div className="bg-primary text-white p-3 rounded-lg rounded-tr-none">
                  <p>
                    Absolutely! I've got some design ideas. Will send them over shortly. We should also create a fundraiser page for it.
                  </p>
                </div>
                <p className="text-xs text-stone-500 dark:text-stone-400 px-2 text-right">10:38 AM</p>
              </div>
            </div>
            {/* More chat bubbles can be added in similar structure */}
          </div>
          <div className="p-4 border-t border-stone-200/80 dark:border-stone-800/80 bg-white dark:bg-stone-900/50">
            <div className="flex items-center gap-2">
              <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-full text-stone-900 dark:text-stone-100 focus:outline-0 focus:ring-2 focus:ring-primary/50 border-stone-300 dark:border-stone-700 bg-stone-100 dark:bg-stone-800 h-12 placeholder:text-stone-500 dark:placeholder:text-stone-400 px-5 text-base font-normal leading-normal" placeholder="Type a message..." value="" />
              <button className="flex min-w-[48px] max-w-[48px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 aspect-square bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default Messages;
