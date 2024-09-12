import { useState } from 'react';
import { AiOutlineUser,  AiOutlineLock, AiOutlineBell, AiOutlineSecurityScan } from 'react-icons/ai';
import { BiMoon, BiSun } from 'react-icons/bi';
import WithMetaTag from '../utils/withMetaTag';

const Settings = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSave = () => {

    setSuccessMessage('Settings saved successfully!');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  return (
    <WithMetaTag
      title="Fusioner: Settings"
      keywords="Fusioner, settings, user preferences, profile settings, notification settings, security settings"
      link="https://fusioner.vercel.app/settings"
      desc="Manage your account settings, including profile, notifications, and security preferences."
    >
      <div className={`min-h-screen text-white px-4 pt-20 pb-6`}>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center">Settings</h1>
          
          {successMessage && (
            <div className="bg-green-500 text-white p-2 rounded-md mb-4 text-center">
              {successMessage}
            </div>
          )}

          <div className="bg-dark-0 rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <AiOutlineUser className="mr-2" />
              Profile Settings
            </h2>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 justify-between">
                <label className="font-medium">Full Name:</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="bg-dark-0 text-white border border-gray-700 rounded-md p-2"
                  placeholder="Enter your name"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 justify-between">
                <label className="font-medium">Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-dark-0 text-white border border-gray-700 rounded-md p-2"
                  placeholder="Enter your email"
                />
              </div>
            </div>
          </div>

          <div className="bg-dark-0 rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <AiOutlineBell className="mr-2" />
              Notification Settings
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-medium">Email Notifications</span>
                <input
                  type="checkbox"
                  checked={emailNotifications}
                  onChange={() => setEmailNotifications(!emailNotifications)}
                  className="rounded"
                />
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">SMS Notifications</span>
                <input
                  type="checkbox"
                  checked={smsNotifications}
                  onChange={() => setSmsNotifications(!smsNotifications)}
                  className="rounded"
                />
              </div>
            </div>
          </div>

          <div className="bg-dark-0 rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <AiOutlineLock className="mr-2" />
              Security Settings
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-medium">Change Password</span>
                <button className="bg-primary-0 hover:bg-green-500 text-dark-0 px-4 py-2 rounded-md transition duration-300">
                  Change
                </button>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Two-Factor Authentication</span>
                <input
                  type="checkbox"
                  checked={twoFactorAuth}
                  onChange={() => setTwoFactorAuth(!twoFactorAuth)}
                  className="rounded"
                />
              </div>
            </div>
          </div>

          <div className="bg-dark-0 rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <AiOutlineSecurityScan className="mr-2" />
              Display Settings
            </h2>
            <div className="flex justify-between items-center">
              <span className="font-medium">Dark Mode</span>
              <input
                type="checkbox"
                checked={isDarkMode}
                onChange={() => setIsDarkMode(!isDarkMode)}
                className="rounded"
              />
              {isDarkMode ? <BiSun className="ml-2 text-yellow-500" /> : <BiMoon className="ml-2 text-gray-700" />}
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              onClick={handleSave}
              className="bg-primary-0 hover:bg-green-500 text-dark-0 px-6 py-3 rounded-lg shadow-md transition duration-300"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </WithMetaTag>
  );
};

export default Settings;
