import React from 'react';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';

const Layout = ({ children }) => {
  return (
    <div className="flex-grow w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-10 gap-x-6">
        <LeftSidebar />
        <main className="col-span-5 border-x border-border-light dark:border-border-dark min-h-screen">
          {children}
        </main>
        <RightSidebar />
      </div>
    </div>
  );
};

export default Layout;
