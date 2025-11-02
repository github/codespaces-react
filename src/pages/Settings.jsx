import React, { useState } from 'react';

const Settings = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    language: 'en',
    privacy: 'public'
  });

  const handleToggle = (setting) => {
    setSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="settings-container">
      <header className="settings-header">
        <h1>Settings</h1>
      </header>
      <main className="settings-content">
        <div className="settings-section">
          <h2>Preferences</h2>
          <div className="setting-item">
            <label>
              <input
                type="checkbox"
                checked={settings.notifications}
                onChange={() => handleToggle('notifications')}
              />
              Enable Notifications
            </label>
          </div>
          <div className="setting-item">
            <label>
              <input
                type="checkbox"
                checked={settings.darkMode}
                onChange={() => handleToggle('darkMode')}
              />
              Dark Mode
            </label>
          </div>
          <div className="setting-item">
            <label htmlFor="language">Language:</label>
            <select
              id="language"
              name="language"
              value={settings.language}
              onChange={handleChange}
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
            </select>
          </div>
          <div className="setting-item">
            <label htmlFor="privacy">Privacy:</label>
            <select
              id="privacy"
              name="privacy"
              value={settings.privacy}
              onChange={handleChange}
            >
              <option value="public">Public</option>
              <option value="private">Private</option>
              <option value="friends">Friends Only</option>
            </select>
          </div>
        </div>
        <div className="settings-section">
          <h2>Account</h2>
          <button className="btn-primary">Change Password</button>
          <button className="btn-secondary">Manage Account</button>
        </div>
      </main>
    </div>
  );
};

export default Settings;