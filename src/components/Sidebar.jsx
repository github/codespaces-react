import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="flex items-center gap-3">
        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC8ZnubVvnHuwR2iz1J5xf2qI8ImQEpRhowbhCVKjvpk6e_be9VGuKL4h_ApJy3Vf-BpYvN9F7jfmqFegJefwUmugVz6cSbUmmlWFowwVtGAk-jvcQgdHUGRlcaFw8XtYtv0E2ujxt82QBO4I-16Yeou7-8POBWXdMes27HUgn924ZQtWPHyoAB8oEKr-aBCZ0HBCbJLi5o0lHWvDTtK_2bD3V9xjBhgNB9VApW39eBRoRuLhIl9xZhMCSGhWpjPQefkmrIN8tygQ")'}}></div>
        <div className="flex flex-col">
          <h1 className="text-secondary dark:text-gray-100 text-base font-bold leading-normal">Voice Bharat</h1>
          <p className="text-accent-gray dark:text-gray-400 text-sm font-normal leading-normal">The Voice of the People</p>
        </div>
      </div>
      <nav className="flex flex-col gap-2 mt-4">
        <NavLink to="/" className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-lg ${isActive ? "bg-primary/20 text-secondary dark:text-gray-100" : ""}` }>
          <span className="material-symbols-outlined">home</span>
          <p className="text-sm font-bold leading-normal">Home</p>
        </NavLink>
        <NavLink to="/explore" className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-surface-dark ${isActive ? "bg-primary/20 text-secondary dark:text-gray-100" : ""}` }>
          <span className="material-symbols-outlined">explore</span>
          <p className="text-sm font-medium leading-normal">Explore</p>
        </NavLink>
        <NavLink to="/petitions" className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-surface-dark ${isActive ? "bg-primary/20 text-secondary dark:text-gray-100" : ""}` }>
          <span className="material-symbols-outlined">article</span>
          <p className="text-sm font-medium leading-normal">Petitions</p>
        </NavLink>
        <NavLink to="/fundraisers" className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-surface-dark ${isActive ? "bg-primary/20 text-secondary dark:text-gray-100" : ""}` }>
          <span className="material-symbols-outlined">volunteer_activism</span>
          <p className="text-sm font-medium leading-normal">Fundraisers</p>
        </NavLink>
        <NavLink to="/notifications" className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-surface-dark ${isActive ? "bg-primary/20 text-secondary dark:text-gray-100" : ""}` }>
          <span className="material-symbols-outlined">notifications</span>
          <p className="text-sm font-medium leading-normal">Notifications</p>
        </NavLink>
        <NavLink to="/messages" className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-surface-dark ${isActive ? "bg-primary/20 text-secondary dark:text-gray-100" : ""}` }>
          <span className="material-symbols-outlined">mail</span>
          <p className="text-sm font-medium leading-normal">Messages</p>
        </NavLink>
      </nav>
      <div className="flex flex-col gap-4 mt-auto">
        <NavLink to="/raise-issue" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-secondary dark:text-background-dark text-sm font-bold leading-normal tracking-[0.015em]">
          <span className="truncate">Raise Voice</span>
        </NavLink>
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCwzEatX-eSOy0Hl5hG8AbS8G8ixmBLKeH2xpQfUJ4V-k-eBiY8478gVi7FTMoD-GcNrt3z3W4JBjo5rgfeWrRej9s2w6Lad_evDMJva2qeXeA3jy93gd7gT4oR6mZOxFdQ8AVHmdcKUGXUA_iUsCWEiZxiIgtFuaFD0pRcI_0vYVfH6PScBYf-3CQa-lDQEP5GwX2aIzc_3_6Lb62hzi4XQRcmD1gx4kFugIFsu-Avc0ima0UWSC7DPvoudodFjbXh7nlDzdHCaw")'}}></div>
          <div className="flex flex-col">
            <p className="text-secondary dark:text-gray-100 text-sm font-bold leading-normal">Aarav Sharma</p>
            <p className="text-accent-gray dark:text-gray-400 text-sm font-normal leading-normal">@aaravsharma</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
