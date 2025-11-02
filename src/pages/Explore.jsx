import React from 'react';

const Explore = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-gray-200">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="/" className="text-xl font-semibold text-indigo-600">CivicConnect</a>
            <div className="hidden md:flex items-center gap-4 text-sm text-gray-600">
              <a href="/explore" className="hover:text-gray-900">Explore</a>
              <a href="/feed" className="hover:text-gray-900">Feed</a>
              <a href="/fundraisers" className="hover:text-gray-900">Fundraisers</a>
              <a href="/issues" className="hover:text-gray-900">Issues</a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <input type="text" placeholder="Search causes, people, topics..." className="hidden sm:block w-72 rounded-md border border-gray-300 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            <button className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700">Post</button>
            <button aria-label="Notifications" className="rounded-full p-2 hover:bg-gray-100">🔔</button>
            <img src="https://avatars.githubusercontent.com/u/1?v=4" alt="User avatar" className="h-8 w-8 rounded-full" />
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        <aside className="lg:col-span-3 space-y-6">
          <section className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-4 py-3 border-b border-gray-200">
              <h2 className="text-sm font-semibold text-gray-800">Quick Navigation</h2>
            </div>
            <ul className="p-2">
              {[
                { label: 'My Circles', href: '/circles' },
                { label: 'Local Actions', href: '/local' },
                { label: 'Volunteer', href: '/volunteer' },
                { label: 'Petitions', href: '/petitions' },
                { label: 'Town Halls', href: '/events' },
              ].map((item) => (
                <li key={item.href}>
                  <a className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-50" href={item.href}>
                    <span className="text-gray-700">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-4 py-3 border-b border-gray-200">
              <h2 className="text-sm font-semibold text-gray-800">Filters</h2>
            </div>
            <div className="p-4 space-y-4 text-sm">
              <div>
                <label className="block text-gray-600 mb-1">Location</label>
                <select className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option>Worldwide</option>
                  <option>Near Me</option>
                  <option>Custom...</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-600 mb-1">Category</label>
                <div className="flex flex-wrap gap-2">
                  {['Environment', 'Human Rights', 'Education', 'Health', 'Democracy'].map((tag) => (
                    <button key={tag} className="rounded-full border border-gray-300 px-3 py-1 hover:bg-gray-50">{tag}</button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-gray-600 mb-1">Time</label>
                <div className="flex items-center gap-3">
                  {['Today', 'This Week', 'This Month'].map((t) => (
                    <label key={t} className="inline-flex items-center gap-2">
                      <input type="radio" name="time" />
                      <span>{t}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between pt-2">
                <button className="text-sm text-gray-600 hover:text-gray-900">Clear</button>
                <button className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700">Apply</button>
              </div>
            </div>
          </section>
        </aside>

        <section className="lg:col-span-6 space-y-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-sm font-semibold text-gray-800">Featured Fundraisers</h2>
              <a href="/fundraisers" className="text-sm text-indigo-600 hover:text-indigo-700">View all</a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
              {[1, 2, 3, 4].map((i) => (
                <article key={i} className="rounded-md border border-gray-200 overflow-hidden">
                  <div className="h-28 bg-gray-100" style={{ backgroundImage: `url(https://picsum.photos/seed/f${i}/400/200)`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                  <div className="p-3 space-y-1">
                    <h3 className="font-medium">Community Green Drive #{i}</h3>
                    <p className="text-xs text-gray-600">Raising funds for local tree plantation and park cleanup.</p>
                    <div className="flex items-center justify-between pt-1">
                      <div className="text-xs text-gray-600">$ {i * 2}.5k raised</div>
                      <button className="text-xs rounded-md bg-indigo-600 px-2 py-1 text-white hover:bg-indigo-700">Donate</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-sm font-semibold text-gray-800">Curated Feed</h2>
              <div className="flex items-center gap-2 text-xs">
                <button className="rounded-full border border-gray-300 px-3 py-1 hover:bg-gray-50">Top</button>
                <button className="rounded-full border border-gray-300 px-3 py-1 hover:bg-gray-50">New</button>
                <button className="rounded-full border border-gray-300 px-3 py-1 hover:bg-gray-50">Rising</button>
              </div>
            </div>
            <ul className="divide-y divide-gray-200">
              {[1, 2, 3, 4, 5].map((i) => (
                <li key={i} className="p-4 hover:bg-gray-50">
                  <div className="flex gap-3">
                    <img src={`https://i.pravatar.cc/40?img=${i}`} alt="avatar" className="h-10 w-10 rounded-full" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">Activist {i} • <span className="text-gray-600 font-normal">2h ago</span></div>
                        <button className="text-gray-500 hover:text-gray-700">•••</button>
                      </div>
                      <p className="text-sm text-gray-800 mt-1">We are organizing a neighborhood cleanup this weekend. Join us and make a difference!</p>
                      <div className="mt-2 flex items-center gap-4 text-xs text-gray-600">
                        <button className="hover:text-gray-900">👍 124</button>
                        <button className="hover:text-gray-900">💬 18</button>
                        <button className="hover:text-gray-900">↗ Share</button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <aside className="lg:col-span-3 space-y-6">
          <section className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-4 py-3 border-b border-gray-200">
              <h2 className="text-sm font-semibold text-gray-800">Trending Topics</h2>
            </div>
            <ul className="p-3 text-sm space-y-2">
              {['#CleanAir', '#VoteLocal', '#SaveThePark', '#Water4All', '#OpenData'].map((t) => (
                <li key={t} className="flex items-center justify-between">
                  <a href={`/topic/${t.slice(1)}`} className="text-gray-800 hover:text-indigo-600">{t}</a>
                  <span className="text-xs text-gray-500">{Math.floor(Math.random() * 9) + 1}k posts</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-4 py-3 border-b border-gray-200">
              <h2 className="text-sm font-semibold text-gray-800">Issues</h2>
            </div>
            <div className="p-3 flex flex-wrap gap-2">
              {['Climate', 'Education', 'Healthcare', 'Housing', 'Justice', 'Transport'].map((chip) => (
                <a key={chip} href={`/issues/${chip.toLowerCase()}`} className="text-xs rounded-full bg-gray-100 px-3 py-1 hover:bg-gray-200">{chip}</a>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-4 py-3 border-b border-gray-200">
              <h2 className="text-sm font-semibold text-gray-800">Suggested Activists</h2>
            </div>
            <ul className="p-3 space-y-3">
              {[1, 2, 3].map((i) => (
                <li key={i} className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <img src={`https://i.pravatar.cc/40?img=${i + 5}`} alt="avatar" className="h-9 w-9 rounded-full" />
                    <div>
                      <div className="text-sm font-medium">Change Maker {i}</div>
                      <div className="text-xs text-gray-600">Community • Nearby</div>
                    </div>
                  </div>
                  <button className="rounded-md border border-gray-300 px-2 py-1 text-xs hover:bg-gray-50">Follow</button>
                </li>
              ))}
            </ul>
          </section>
        </aside>
      </main>
    </div>
  );
};

export default Explore;
