import React, { useState } from 'react';
import { Bell, Filter, CheckCircle, AlertCircle, TrendingUp, Users, Heart, MessageCircle, Share2, Award, ChevronDown, Settings } from 'lucide-react';

const Notifications = () => {
  const [filter, setFilter] = useState('all');
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'like',
      user: 'Priya Sharma',
      action: 'liked your post',
      content: '"Democracy thrives when citizens speak up"',
      time: '2 minutes ago',
      read: false,
      avatar: 'PS',
      icon: Heart,
      color: 'text-red-500'
    },
    {
      id: 2,
      type: 'comment',
      user: 'Rahul Verma',
      action: 'commented on your issue',
      content: '"Totally agree with your concerns about road safety"',
      time: '15 minutes ago',
      read: false,
      avatar: 'RV',
      icon: MessageCircle,
      color: 'text-blue-500'
    },
    {
      id: 3,
      type: 'follow',
      user: 'Anjali Gupta',
      action: 'started following you',
      content: '',
      time: '1 hour ago',
      read: false,
      avatar: 'AG',
      icon: Users,
      color: 'text-green-500'
    },
    {
      id: 4,
      type: 'trending',
      user: 'Voice Bharat',
      action: 'Your post is trending',
      content: '"Local infrastructure improvements" has 250+ upvotes',
      time: '3 hours ago',
      read: true,
      avatar: 'VB',
      icon: TrendingUp,
      color: 'text-orange-500'
    },
    {
      id: 5,
      type: 'share',
      user: 'Vikram Singh',
      action: 'shared your fundraiser',
      content: '"Help Build Community Library"',
      time: '5 hours ago',
      read: true,
      avatar: 'VS',
      icon: Share2,
      color: 'text-purple-500'
    },
    {
      id: 6,
      type: 'award',
      user: 'Voice Bharat',
      action: 'You earned a badge',
      content: 'Community Champion - 100 contributions',
      time: '1 day ago',
      read: true,
      avatar: 'VB',
      icon: Award,
      color: 'text-yellow-500'
    }
  ]);

  const filterOptions = [
    { value: 'all', label: 'All Notifications', count: notifications.length },
    { value: 'unread', label: 'Unread', count: notifications.filter(n => !n.read).length },
    { value: 'mentions', label: 'Mentions', count: 0 },
    { value: 'likes', label: 'Likes', count: notifications.filter(n => n.type === 'like').length },
    { value: 'comments', label: 'Comments', count: notifications.filter(n => n.type === 'comment').length }
  ];

  const markAsRead = (id) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notif => ({ ...notif, read: true })));
  };

  const filteredNotifications = filter === 'all' 
    ? notifications 
    : filter === 'unread'
    ? notifications.filter(n => !n.read)
    : notifications.filter(n => n.type === filter.slice(0, -1));

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">VB</span>
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
                    Voice Bharat
                  </h1>
                  <p className="text-xs text-gray-500">Notifications</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Settings className="w-5 h-5 text-gray-600" />
              </button>
              <button 
                onClick={markAllAsRead}
                className="px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all flex items-center space-x-2"
              >
                <CheckCircle className="w-4 h-4" />
                <span>Mark all as read</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filter Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <h2 className="text-lg font-semibold text-gray-900">Filter Notifications</h2>
            </div>
            <span className="text-sm text-gray-500">
              {notifications.filter(n => !n.read).length} unread
            </span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setFilter(option.value)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  filter === option.value
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {option.label}
                {option.count > 0 && (
                  <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                    filter === option.value
                      ? 'bg-white/20'
                      : 'bg-gray-300'
                  }`}>
                    {option.count}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Notifications List */}
        <div className="space-y-3">
          {filteredNotifications.length === 0 ? (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
              <Bell className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No notifications</h3>
              <p className="text-gray-500">You're all caught up! Check back later for updates.</p>
            </div>
          ) : (
            filteredNotifications.map((notification) => {
              const IconComponent = notification.icon;
              return (
                <div
                  key={notification.id}
                  onClick={() => markAsRead(notification.id)}
                  className={`bg-white rounded-xl shadow-sm border transition-all cursor-pointer ${
                    notification.read
                      ? 'border-gray-200 hover:border-gray-300'
                      : 'border-orange-200 bg-orange-50/30 hover:border-orange-300'
                  }`}
                >
                  <div className="p-4">
                    <div className="flex items-start space-x-4">
                      {/* Avatar */}
                      <div className="relative flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-green-500 rounded-full flex items-center justify-center text-white font-semibold">
                          {notification.avatar}
                        </div>
                        <div className={`absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md`}>
                          <IconComponent className={`w-3.5 h-3.5 ${notification.color}`} />
                        </div>
                        {!notification.read && (
                          <div className="absolute -top-1 -left-1 w-3 h-3 bg-orange-500 rounded-full border-2 border-white"></div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <p className="text-gray-900 font-medium">
                              <span className="font-semibold">{notification.user}</span>
                              {' '}
                              <span className="font-normal text-gray-600">{notification.action}</span>
                            </p>
                            {notification.content && (
                              <p className="mt-1 text-sm text-gray-600 bg-gray-50 rounded-lg p-2 border border-gray-200">
                                {notification.content}
                              </p>
                            )}
                            <p className="mt-2 text-xs text-gray-500">{notification.time}</p>
                          </div>
                          {!notification.read && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                markAsRead(notification.id);
                              }}
                              className="ml-2 p-1 hover:bg-gray-100 rounded-full transition-colors"
                            >
                              <CheckCircle className="w-5 h-5 text-orange-500" />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Load More */}
        {filteredNotifications.length > 0 && (
          <div className="mt-6 text-center">
            <button className="px-6 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium text-gray-700 flex items-center space-x-2 mx-auto">
              <span>Load more notifications</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p className="flex items-center justify-center space-x-2">
              <Bell className="w-4 h-4" />
              <span>Stay updated with Voice Bharat notifications</span>
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Manage your notification preferences in Settings
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Notifications;