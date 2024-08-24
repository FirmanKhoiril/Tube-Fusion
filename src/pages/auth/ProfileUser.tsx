import { useUser } from "@clerk/clerk-react";
import WithMetaTag from "../../utils/withMetaTag";

const ProfileUser = () => {
  const { user } = useUser();

  return (
    <WithMetaTag
      title="Fusioner: Your Ultimate Cryptocurrency Companion"
      keywords="Fusioner, cryptocurrency, crypto market, real-time data, investment tracking, market trends, crypto insights, cryptocurrency statistics, crypto charts, cryptocurrency analysis"
      link="https://fusioner.vercel.app/profile"
      desc="Fusioner is your go-to platform for real-time cryptocurrency insights, market trends, and investment tracking. Stay informed with up-to-date data and intuitive charts to make smarter financial decisions."
    >
      <div className="min-h-screen container mx-auto pt-24  sm:px-0 px-2 bg-darkPrimary-0 text-white">
        <header className="flex items-center justify-between p-6 bg-gradient-to-r from-green-400/50 via-blue-500/40 to-purple-600/20 shadow-lg rounded-lg">
          <div className="flex items-center">
            <img
              src={user?.imageUrl || '/default-profile.png'}
              alt="Profile"
              className="w-16 h-16 rounded-full border-4 border-white"
            />
            <div className="ml-4">
              <h1 className="text-3xl font-bold">Welcome, {user?.firstName}!</h1>
              <p className="text-lg">Your cryptocurrency dashboard</p>
            </div>
          </div>
        </header>

        <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
          <div className="bg-dark-0 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Profile Information</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Email:</span>
                <span className="text-secondary-0">{user?.emailAddresses[0].emailAddress}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Full Name:</span>
                <span className="text-secondary-0">{user?.fullName}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Username:</span>
                <span className="text-secondary-0">{user?.username || user?.firstName}</span>
              </div>
            </div>
          </div>

          <div className="bg-dark-0 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Account Activity</h2>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="font-medium">Last Login:</span>
                <span className="text-secondary-0">Just now</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Total Trades:</span>
                <span className="text-secondary-0">42</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Active Subscriptions:</span>
                <span className="text-secondary-0">2</span>
              </li>
            </ul>
          </div>

          <div className="bg-dark-0 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Portfolio Overview</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Total Value:</span>
                <span className="text-secondary-0">$10,000</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Invested:</span>
                <span className="text-secondary-0">$7,500</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Profit/Loss:</span>
                <span className="text-secondary-0">+$2,500</span>
              </div>
            </div>
          </div>

          <div className="bg-dark-0 p-6 rounded-lg shadow-lg col-span-1 sm:col-span-2 lg:col-span-3">
            <h2 className="text-2xl font-semibold mb-4">Settings</h2>
            <div className="flex justify-end">
              <button className="bg-primary-0 hover:bg-green-500 text-dark-0 px-4 py-2 rounded-md transition duration-300 shadow-md">
                Edit Profile
              </button>
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition duration-300 shadow-md ml-4">
                Log Out
              </button>
            </div>
          </div>
        </main>
      </div>
    </WithMetaTag>
  );
};

export default ProfileUser;
