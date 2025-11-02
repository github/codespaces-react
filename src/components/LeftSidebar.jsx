import React from 'react';
import { Link } from 'react-router-dom';

const LeftSidebar = () => {
  return (
    <aside className="col-span-2 sticky top-0 h-screen flex flex-col py-5 pr-4">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC8ZnubVvnHuwR2iz1J5xf2qI8ImQEpRhowbhCVKjvpk6e_be9VGuKL4h_ApJy3Vf-BpYvN9F7jfmqFegJefwUmugVz6cSbUmmlWFowwVtGAk-jvcQgdHUGRlcaFw8XtYtv0E2ujxt82QBO4I-16Yeou7-8POBWXdMes27HUgn924ZQtWPHyoAB8oEKr-aBCZ0HBCbJLi5o0lHWvDTtK_2bD3V9xjBhgNB9VApW39eBRoRuLhIl9xZhMCSGhWpjPQefkmrIN8tygQ")' }}
          ></div>
          <div className="flex flex-col">
            <h1 className="text-secondary dark:text-gray-100 text-base font-bold leading-normal">Voice Bharat</h1>
            <p className="text-accent-gray dark:text-gray-400 text-sm font-normal leading-normal">The Voice of the People</p>
          </div>
        </div>
        <nav className="flex flex-col gap-2 mt-4">
          <Link to="/" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/20 text-secondary dark:text-gray-100">
            <span className="material-symbols-outlined text-secondary dark:text-gray-100">home</span>
            <p className="text-sm font-bold leading-normal">Home</p>
          </Link>
          <Link to="/profile" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-surface-dark">
            <span className="material-symbols-outlined text-gray-700 dark:text-gray-300">person</span>
            <p className="text-sm font-medium leading-normal text-gray-700 dark:text-gray-300">Profile</p>
          </Link>
          <Link to="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-surface-dark">
            <span className="material-symbols-outlined text-gray-700 dark:text-gray-300">explore</span>
            <p className="text-sm font-medium leading-normal text-gray-700 dark:text-gray-300">Explore</p>
          </Link>
          <Link to="/campaign" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-surface-dark">
            <span className="material-symbols-outlined text-gray-700 dark:text-gray-300">article</span>
            <p className="text-sm font-medium leading-normal text-gray-700 dark:text-gray-300">Campaigns</p>
          </Link>
          <Link to="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-surface-dark">
            <span className="material-symbols-outlined text-gray-700 dark:text-gray-300">volunteer_activism</span>
            <p className="text-sm font-medium leading-normal text-gray-700 dark:text-gray-300">Fundraisers</p>
          </Link>
          <Link to="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-surface-dark">
            <span className="material-symbols-outlined text-gray-700 dark:text-gray-300">notifications</span>
            <p className="text-sm font-medium leading-normal text-gray-700 dark:text-gray-300">Notifications</p>
          </Link>
          <Link to="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-surface-dark">
            <span className="material-symbols-outlined text-gray-700 dark:text-gray-300">mail</span>
            <p className="text-sm font-medium leading-normal text-gray-700 dark:text-gray-300">Messages</p>
          </Link>
          <Link to="/raise-issue" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-surface-dark">
            <span className="material-symbols-outlined text-gray-700 dark:text-gray-300">add_circle</span>
            <p className="text-sm font-medium leading-normal text-gray-700 dark:text-gray-300">Raise Issue</p>
          </Link>
        </nav>
      </div>
      <div className="flex flex-col gap-4 mt-auto">
        <Link to="/login" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-secondary dark:text-background-dark text-sm font-bold leading-normal tracking-[0.015em]">
          <span className="truncate">Login</span>
        </Link>
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCwzEatX-eSOy0Hl5hG8AbS8G8ixmBLKeH2xpQfUJ4V-k-eBiY8478gVi7FTMoD-GcNrt3z3W4JBjo5rgfeWrRej9s2w6Lad_evDMJva2qeXeA3jy93gd7gT4oR6mZOxFdQ8AVHmdcKUGXUA_iUsCWEiZxiIgtFuaFD0pRcI_0vYVfH6PScBYf-3CQa-lDQEP5GwX2aIzc_3_6Lb62hzi4XQRcmD1gx4kFugIFsu-Avc0ima0UWSC7DPvoudodFjbXh7nlDzdHCaw")' }}></div>
          <div className="flex flex-col">
            <p className="text-secondary dark:text-gray-100 text-sm font-bold leading-normal">Aarav Sharma</p>
            <p className="text-accent-gray dark:text-gray-400 text-sm font-normal leading-normal">@aaravsharma</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default LeftSidebar;
