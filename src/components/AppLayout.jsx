import React from 'react';

const AppLayout = ({ left, middle, right }) => {
  return (
    <div className="flex-grow w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-10 gap-x-6">
        <aside className="col-span-2 sticky top-0 h-screen flex flex-col py-5 pr-4">
          {left}
        </aside>
        <main className="col-span-5 border-x border-border-light dark:border-border-dark min-h-screen">
          {middle}
        </main>
        <aside className="col-span-3 sticky top-0 h-screen flex flex-col py-5 pl-4 gap-6">
          {right}
        </aside>
      </div>
    </div>
  );
};

export default AppLayout;
