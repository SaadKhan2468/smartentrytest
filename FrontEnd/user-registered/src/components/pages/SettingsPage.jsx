import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const SettingsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // Determine the correct back path based on instructions
  // For Home > Test Interface > View Settings, back goes to Home
  // For Test > View Settings, back goes to Test
  // Defaulting to /home for now, might need refinement if /test path is implemented differently
  const fromPath = location.state?.from || 
                   (location.pathname.startsWith('/test/') ? '/test' : '/home');

  const [textSize, setTextSize] = useState("Medium");
  const [soundEffects, setSoundEffects] = useState(false);
  const [timerAlerts, setTimerAlerts] = useState({
    tenMinutes: false,
    fiveMinutes: false,
    oneMinute: false,
  });
  const [navigationStyle, setNavigationStyle] = useState('Sidebar');
  const [themePreference, setThemePreference] = useState('Light');

  const handleTimerAlertChange = (event) => {
    const { name, checked } = event.target;
    setTimerAlerts((prevAlerts) => ({
      ...prevAlerts,
      [name]: checked,
    }));
  };

  const handleResetDefaults = () => {
    setTextSize('Medium');
    setSoundEffects(false);
    setTimerAlerts({ tenMinutes: false, fiveMinutes: false, oneMinute: false });
    setNavigationStyle('Sidebar');
    setThemePreference('Light');
  };

  const handleSaveSettings = () => {
    // Placeholder for save logic - in a real app, this would likely save to localStorage or a backend
    console.log('Settings saved:', {
      textSize,
      soundEffects,
      timerAlerts,
      navigationStyle,
      themePreference,
    });
    alert('Settings saved!'); // Simple confirmation for now
  };

  return (
    <div className="px-[3%] py-7">
       <h1 className="text-xl text-black font-semibold poppins capitalize text-center mb-5">
          PROCTOR AI - Settings
        </h1>
        <hr className="mb-7" />
      <div className="max-w-2xl mx-auto p-5 border border-border-clr rounded-lg space-y-6">
        <h2 className="text-2xl font-semibold text-black poppins">Settings</h2>
        <p className="text-gray-600">
          Customize your test experience. These preferences affect only your interface and not the exam rules or results.
        </p>

        {/* Text Size */}
        <div className="space-y-2">
          <label htmlFor="text-size" className="block font-medium text-black">Text Size</label>
          <select
            id="text-size"
            value={textSize}
            onChange={(e) => setTextSize(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>

        {/* Sound Effects */}
        <div className="flex items-center justify-between">
          <label className="font-medium text-black">Sound Effects</label>
          <label htmlFor="sound-toggle" className="inline-flex relative items-center cursor-pointer">
            <input
              type="checkbox"
              checked={soundEffects}
              onChange={() => setSoundEffects(!soundEffects)}
              id="sound-toggle"
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{soundEffects ? 'On' : 'Off'}</span>
          </label>
        </div>

        {/* Timer Alerts */}
        <div className="space-y-2">
          <label className="block font-medium text-black">Timer Alerts</label>
          <div className="space-y-1">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="tenMinutes"
                name="tenMinutes"
                checked={timerAlerts.tenMinutes}
                onChange={handleTimerAlertChange}
                className="mr-2 accent-black"
              />
              <label htmlFor="tenMinutes">Notify at 10 minutes left</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="fiveMinutes"
                name="fiveMinutes"
                checked={timerAlerts.fiveMinutes}
                onChange={handleTimerAlertChange}
                className="mr-2 accent-black"
              />
              <label htmlFor="fiveMinutes">Notify at 5 minutes left</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="oneMinute"
                name="oneMinute"
                checked={timerAlerts.oneMinute}
                onChange={handleTimerAlertChange}
                className="mr-2 accent-black"
              />
              <label htmlFor="oneMinute">Notify at 1 minute left</label>
            </div>
          </div>
        </div>

        {/* Navigation Style */}
        <div className="space-y-2">
          <label className="block font-medium text-black">Navigation Style</label>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <input
                type="radio"
                id="sidebar"
                name="navigationStyle"
                value="Sidebar"
                checked={navigationStyle === 'Sidebar'}
                onChange={(e) => setNavigationStyle(e.target.value)}
                className="mr-2 accent-black"
              />
              <label htmlFor="sidebar">Sidebar</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="popupGrid"
                name="navigationStyle"
                value="Popup Grid"
                checked={navigationStyle === 'Popup Grid'}
                onChange={(e) => setNavigationStyle(e.target.value)}
                className="mr-2 accent-black"
              />
              <label htmlFor="popupGrid">Popup Grid</label>
            </div>
          </div>
        </div>

        {/* Theme Preference */}
        <div className="space-y-2">
          <label htmlFor="theme-preference" className="block font-medium text-black">Theme Preference</label>
          <select
            id="theme-preference"
            value={themePreference}
            onChange={(e) => setThemePreference(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="Light">Light</option>
            <option value="Sepia">Sepia</option>
            <option value="Soft Blue">Soft Blue</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="flex justify-between items-center pt-4 border-t border-border-clr">
          <button
            onClick={() => navigate("/")}
            className="py-2 px-4 bg-gray-300 text-black rounded hover:bg-gray-400"
          >
            Back
          </button>
          <div className="flex space-x-4">
            <button
              onClick={handleResetDefaults}
              className="py-2 px-4 bg-gray-200 text-black rounded hover:bg-gray-300"
            >
              Reset to Default
            </button>
            <button
              onClick={handleSaveSettings}
              className="py-2 px-4 bg-black text-white rounded hover:bg-gray-800"
            >
              Save Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;

