const Welcome = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-darkPrimary-0 text-white text-center px-6 py-12 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2a2829] via-[#1f1e20] to-[#0f0f10] opacity-90"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(0,0,0,0.5)] to-[#0f0f10] opacity-75"></div>

      {/* Floating gradient circles */}
      <div className="absolute w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[550px] lg:h-[550px] bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-50 blur-3xl top-[-50px] sm:top-[-75px] lg:top-[-100px] left-[-50px] sm:left-[-100px] lg:left-[-150px] animate-pulse"></div>
      <div className="absolute w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[450px] lg:h-[450px] bg-gradient-to-r from-green-400 to-blue-600 rounded-full opacity-50 blur-3xl bottom-[-50px] sm:bottom-[-75px] lg:bottom-[-100px] right-[-50px] sm:right-[-100px] lg:right-[-150px] animate-pulse"></div>

      {/* Content */}
      <h1 className="relative text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 pb-8 z-10">
        Unlock the Future of Trading
      </h1>
      <p className="relative text-sm sm:text-lg lg:text-2xl text-secondary-0 pb-10 max-w-3xl leading-relaxed z-10">
        Fusioner empowers you with advanced tools and insights to navigate the dynamic world of cryptocurrencies. Take your trading to the next level with real-time data, expert analysis, and innovative strategies.
      </p>
      <div className="relative flex flex-col sm:flex-row gap-6 z-10">
        <button className="bg-primary-0 hover:bg-green-500 text-dark-0 px-8 py-4 rounded-full font-semibold text-lg shadow-lg transition transform hover:scale-105">
          Start Trading Now
        </button>
        <button className="bg-dark-0 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg border border-primary-0 transition transform hover:scale-105">
          Explore Insights
        </button>
      </div>
    </div>
  );
};

export default Welcome;
