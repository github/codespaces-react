import React, { useState } from 'react';

const AdminPanel = () => {
  const [selectedAction, setSelectedAction] = useState('');

  const stats = [
    { title: 'Total Users', value: '1.5M', icon: '👥', color: 'bg-blue-500' },
    { title: 'Active Protests', value: '2,345', icon: '✊', color: 'bg-red-500' },
    { title: 'Pending Moderations', value: '127', icon: '⚠️', color: 'bg-yellow-500' },
    { title: 'Reports Today', value: '89', icon: '📊', color: 'bg-green-500' },
  ];

  const moderationItems = [
    { id: 1, type: 'Post', user: 'user123', reason: 'Spam', status: 'Pending' },
    { id: 2, type: 'Comment', user: 'user456', reason: 'Hate Speech', status: 'Pending' },
    { id: 3, type: 'Profile', user: 'user789', reason: 'Fake Account', status: 'Under Review' },
    { id: 4, type: 'Post', user: 'user101', reason: 'Violence', status: 'Pending' },
    { id: 5, type: 'Comment', user: 'user202', reason: 'Harassment', status: 'Resolved' },
  ];

  const handleAction = (itemId, action) => {
    console.log(`Action ${action} performed on item ${itemId}`);
    // Add your action handling logic here
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-orange-600 to-orange-700 text-white shadow-xl">
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-2">Voice Bharat</h1>
          <p className="text-orange-200 text-sm">Admin Panel</p>
        </div>
        
        <nav className="mt-8">
          <a href="#" className="flex items-center px-6 py-3 bg-orange-800 bg-opacity-50 border-l-4 border-white">
            <span className="text-lg mr-3">📊</span>
            <span>Dashboard</span>
          </a>
          <a href="#" className="flex items-center px-6 py-3 hover:bg-orange-800 hover:bg-opacity-30 transition-colors">
            <span className="text-lg mr-3">👥</span>
            <span>User Management</span>
          </a>
          <a href="#" className="flex items-center px-6 py-3 hover:bg-orange-800 hover:bg-opacity-30 transition-colors">
            <span className="text-lg mr-3">⚠️</span>
            <span>Moderation</span>
          </a>
          <a href="#" className="flex items-center px-6 py-3 hover:bg-orange-800 hover:bg-opacity-30 transition-colors">
            <span className="text-lg mr-3">✊</span>
            <span>Protests</span>
          </a>
          <a href="#" className="flex items-center px-6 py-3 hover:bg-orange-800 hover:bg-opacity-30 transition-colors">
            <span className="text-lg mr-3">📢</span>
            <span>Announcements</span>
          </a>
          <a href="#" className="flex items-center px-6 py-3 hover:bg-orange-800 hover:bg-opacity-30 transition-colors">
            <span className="text-lg mr-3">📈</span>
            <span>Analytics</span>
          </a>
          <a href="#" className="flex items-center px-6 py-3 hover:bg-orange-800 hover:bg-opacity-30 transition-colors">
            <span className="text-lg mr-3">⚙️</span>
            <span>Settings</span>
          </a>
        </nav>
        
        <div className="absolute bottom-0 w-64 p-6 border-t border-orange-500">
          <a href="#" className="flex items-center hover:text-orange-200 transition-colors">
            <span className="text-lg mr-3">🚪</span>
            <span>Logout</span>
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <header className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Dashboard Overview</h2>
          <p className="text-gray-600">Welcome back, Admin! Here's what's happening today.</p>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.color} w-12 h-12 rounded-full flex items-center justify-center text-2xl`}>
                  {stat.icon}
                </div>
                <span className="text-3xl font-bold text-gray-800">{stat.value}</span>
              </div>
              <h3 className="text-gray-600 font-medium">{stat.title}</h3>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">User Growth</h3>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded">
              <p className="text-gray-400">Chart placeholder - Add your chart library here</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Protest Activity</h3>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded">
              <p className="text-gray-400">Chart placeholder - Add your chart library here</p>
            </div>
          </div>
        </div>

        {/* Moderation Actions Table */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-800">Pending Moderation Actions</h3>
            <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors">
              View All
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-gray-600 font-semibold">ID</th>
                  <th className="text-left py-3 px-4 text-gray-600 font-semibold">Type</th>
                  <th className="text-left py-3 px-4 text-gray-600 font-semibold">User</th>
                  <th className="text-left py-3 px-4 text-gray-600 font-semibold">Reason</th>
                  <th className="text-left py-3 px-4 text-gray-600 font-semibold">Status</th>
                  <th className="text-left py-3 px-4 text-gray-600 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {moderationItems.map((item) => (
                  <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-4 text-gray-700">#{item.id}</td>
                    <td className="py-4 px-4">
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        {item.type}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-gray-700">{item.user}</td>
                    <td className="py-4 px-4 text-gray-700">{item.reason}</td>
                    <td className="py-4 px-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                        item.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                        item.status === 'Under Review' ? 'bg-orange-100 text-orange-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex gap-2">
                        <button 
                          onClick={() => handleAction(item.id, 'approve')}
                          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition-colors text-sm"
                        >
                          Approve
                        </button>
                        <button 
                          onClick={() => handleAction(item.id, 'reject')}
                          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors text-sm"
                        >
                          Reject
                        </button>
                        <button 
                          onClick={() => handleAction(item.id, 'review')}
                          className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600 transition-colors text-sm"
                        >
                          Review
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminPanel;