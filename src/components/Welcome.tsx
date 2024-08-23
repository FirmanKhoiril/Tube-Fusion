const Welcome = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-darkPrimary-0 text-white text-center px-6">
      <h1 className="text-3xl xs:text-4xl sm:text-7xl font-bold text-primary-0 mb-6">
        Welcome to Fusioner
      </h1>
      <p className="text-base xs:text-lg sm:text-2xl text-secondary-0 mb-12 max-w-2xl">
        Discover the power of cryptocurrencies. Fusioner brings you the latest insights, market data, and tools to make informed decisions in the crypto world.
      </p>
      <div className="flex gap-4">
        <button className="bg-primary-0/60 hover:bg-primary-0/80 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-100 transition">
          Get Started
        </button>
        <button className="bg-transparent border border-primary-0 text-primary-0 px-6 py-3 rounded-lg font-semibold hover:bg-primary-0 hover:text-white transition">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Welcome;
