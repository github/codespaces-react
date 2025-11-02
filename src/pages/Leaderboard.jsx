import React from 'react';

const Leaderboard = () => {
  const tabs = [
    { key: 'global', label: 'Global' },
    { key: 'friends', label: 'Friends' },
    { key: 'local', label: 'Local' },
    { key: 'weekly', label: 'Weekly' },
    { key: 'monthly', label: 'Monthly' },
  ];

  const activeTab = 'global';

  const topThree = [
    { rank: 1, name: 'Aisha Khan', points: 12840, avatar: 'AK', badge: '🥇' },
    { rank: 2, name: 'Ravi Sharma', points: 11790, avatar: 'RS', badge: '🥈' },
    { rank: 3, name: 'Maya Patel', points: 11015, avatar: 'MP', badge: '🥉' },
  ];

  const rows = [
    { rank: 4, name: 'Carlos Diaz', username: '@carlos', points: 10450, streak: 12 },
    { rank: 5, name: 'Emily Chen', username: '@emc', points: 9975, streak: 9 },
    { rank: 6, name: 'Noah Williams', username: '@noahw', points: 9650, streak: 7 },
    { rank: 7, name: 'Sofia Rossi', username: '@srossi', points: 9420, streak: 5 },
    { rank: 8, name: 'Liam O\'Brien', username: '@liamob', points: 9305, streak: 4 },
    { rank: 9, name: 'Zara Ahmed', username: '@zaraa', points: 9180, streak: 3 },
    { rank: 10, name: 'Ethan Park', username: '@epark', points: 9050, streak: 2 },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 sticky top-0 z-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 p-[2px]">
                <div className="h-full w-full rounded-[10px] bg-slate-900 grid place-items-center text-xl">🏆</div>
              </div>
              <div>
                <p className="text-sm text-slate-400">Impact Platform</p>
                <h1 className="text-lg font-semibold tracking-tight">Leaderboard</h1>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-sm text-slate-200 hover:border-slate-700 hover:bg-slate-800">
                <span className="i-heroicons-arrow-up-on-square text-base">⬆️</span>
                Share
              </button>
              <button className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-3 py-2 text-sm font-medium text-emerald-950 hover:bg-emerald-400">
                <span className="i-heroicons-plus-small-20-solid">＋</span>
                New Challenge
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Hero / KPIs */}
        <section className="grid gap-6 md:grid-cols-3">
          <div className="col-span-2 rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold tracking-tight">Top Performers</h2>
              <div className="flex items-center gap-1 rounded-full border border-slate-800 bg-slate-900 p-1 text-xs">
                {tabs.map(t => (
                  <button
                    key={t.key}
                    className={`px-3 py-1 rounded-full transition-colors ${
                      activeTab === t.key
                        ? 'bg-slate-800 text-slate-100'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Podium */}
            <div className="grid grid-cols-3 items-end gap-4">
              {topThree.map((p) => (
                <div key={p.rank} className={`relative rounded-2xl border border-slate-800 bg-slate-900 p-4 text-center ${
                  p.rank === 1 ? 'order-2 translate-y-[-10%]' : p.rank === 2 ? 'order-1' : 'order-3'
                }`}>
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-2xl" aria-label={`badge-${p.rank}`}>
                    {p.badge}
                  </div>
                  <div className={`mx-auto grid h-16 w-16 place-items-center rounded-full text-sm font-semibold ${
                    p.rank === 1
                      ? 'bg-gradient-to-br from-yellow-400 to-amber-500 text-amber-950'
                      : p.rank === 2
                      ? 'bg-gradient-to-br from-zinc-200 to-zinc-400 text-slate-900'
                      : 'bg-gradient-to-br from-orange-400 to-amber-600 text-amber-950'
                  }`}>
                    {p.avatar}
                  </div>
                  <div className="mt-3 text-sm text-slate-400">Rank #{p.rank}</div>
                  <div className="text-base font-medium">{p.name}</div>
                  <div className="mt-1 text-sm text-emerald-400">{p.points.toLocaleString()} pts</div>
                </div>
              ))}
            </div>
          </div>

          {/* Your Stats */}
          <aside className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-base font-semibold">Your Stats</h3>
            <div className="mt-4 space-y-4">
              <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950 p-3">
                <div>
                  <p className="text-sm text-slate-400">Current Rank</p>
                  <p className="text-lg font-semibold">#237</p>
                </div>
                <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-sm text-emerald-400">+12</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950 p-3">
                <div>
                  <p className="text-sm text-slate-400">Total Points</p>
                  <p className="text-lg font-semibold">3,420</p>
                </div>
                <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-sm text-emerald-400">+180</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950 p-3">
                <div>
                  <p className="text-sm text-slate-400">Streak</p>
                  <p className="text-lg font-semibold">6 days</p>
                </div>
                <span className="rounded-full bg-cyan-500/15 px-3 py-1 text-sm text-cyan-300">On fire</span>
              </div>
            </div>
            <button className="mt-5 w-full rounded-xl bg-emerald-500 px-4 py-2 text-sm font-medium text-emerald-950 hover:bg-emerald-400">View Profile</button>
          </aside>
        </section>

        {/* Table */}
        <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900">
          <div className="flex items-center justify-between border-b border-slate-800 px-4 py-3">
            <h3 className="text-base font-semibold">Leaderboard</h3>
            <div className="flex items-center gap-2">
              <label className="sr-only" htmlFor="search">Search</label>
              <input id="search" placeholder="Search users" className="w-40 rounded-lg border border-slate-800 bg-slate-950 px-3 py-1.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/30" />
              <select className="rounded-lg border border-slate-800 bg-slate-950 px-3 py-1.5 text-sm text-slate-200 focus:outline-none">
                <option>All time</option>
                <option>Past 30 days</option>
                <option>Past 7 days</option>
              </select>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-800">
              <thead className="bg-slate-900/50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">Rank</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">User</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">Points</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">Streak</th>
                  <th className="px-4 py-3"/>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {rows.map((r) => (
                  <tr key={r.rank} className="hover:bg-slate-800/40">
                    <td className="whitespace-nowrap px-4 py-3 text-slate-300">#{r.rank}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="grid h-9 w-9 place-items-center rounded-full bg-slate-800 text-sm font-semibold text-slate-200">
                          {r.name.split(' ').map(s=>s[0]).slice(0,2).join('')}
                        </div>
                        <div>
                          <div className="text-sm font-medium">{r.name}</div>
                          <div className="text-xs text-slate-400">{r.username}</div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 text-emerald-400">{r.points.toLocaleString()}</td>
                    <td className="whitespace-nowrap px-4 py-3 text-slate-300">{r.streak}🔥</td>
                    <td className="px-4 py-3 text-right">
                      <button className="rounded-lg border border-slate-700 px-3 py-1.5 text-sm text-slate-200 hover:bg-slate-800">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-8 rounded-2xl border border-slate-800 bg-gradient-to-br from-emerald-600/10 to-cyan-600/10 p-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div>
              <h4 className="text-lg font-semibold">Compete in community challenges</h4>
              <p className="mt-1 text-sm text-slate-300">Join weekly events, earn badges, and climb the ranks faster.</p>
            </div>
            <div className="flex gap-3">
              <button className="rounded-lg border border-emerald-500/30 px-4 py-2 text-sm text-emerald-300 hover:bg-emerald-500/10">Learn more</button>
              <button className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-emerald-950 hover:bg-emerald-400">Join now</button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-4 py-6 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} Impact Platform. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Leaderboard;
