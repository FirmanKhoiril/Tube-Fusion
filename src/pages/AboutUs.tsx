
import { Link } from 'react-router-dom';
import WithMetaTag from '../utils/withMetaTag';
import Marquee from "react-fast-marquee";
import { coreValues, supportedCompanies } from '../context/dummyData';

const AboutUs = () => {

  return (
    <WithMetaTag 
        title="Fusioner: About-Us | Revolutionizing Cryptocurrency Trading"
        desc="Discover Fusioner, where innovation meets security in cryptocurrency trading. Learn more about our mission to empower traders with cutting-edge tools, expert insights, and a secure platform."
        keywords="Fusioner, cryptocurrency trading, secure trading, crypto platform, trading innovation, crypto community"
        link="https://fusioner.vercel.app/about"
    >
        <div className="pt-20 px-2 min-h-screen w-full pb-4 container mx-auto bg-darkPrimary-0 text-white">
        {/* Hero Section */}
        <div className="text-center py-12">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 from-20% to-purple-600">
            About Fusioner
            </h1>
            <p className="mt-4 text-lg sm:text-2xl max-w-2xl mx-auto text-secondary-0">
           We're committed to revolutionizing the way you trade cryptocurrencies. Our mission is to empower traders with innovative tools, expert insights, and a secure platform.
            </p>
        </div>

        {/* Core Values Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-12">
            {coreValues.map(({ icon: Icon, title, description }, index) => (
            <div key={index} className="bg-dark-0 p-8 border-transparent hover:border-primary-0 border rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
                <Icon className="text-4xl text-primary-0 mb-4" />
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-400">{description}</p>
            </div>
            ))}
        </div>

         {/* Supported Companies Section */}
         <div className="relative w-full overflow-hidden py-12">
          <Marquee speed={50}>
            <div className="flex items-center justify-center gap-12">
              {supportedCompanies.concat(supportedCompanies).map(({ name, icon: Icon }, index) => (
                <div key={index} className="flex flex-col items-center">
                  <Icon className="text-6xl text-gray-300 mb-2 transition-colors duration-300 hover:text-current" />
                  <span className="text-lg text-secondary-0">{name}</span>
                </div>
              ))}
            </div>
          </Marquee>
        </div>

       
        <section className="text-center pt-20">
            <h2 className="text-3xl font-bold mb-6">
                Ready to dive into the world of cryptocurrencies?
            </h2>
            <Link to={"/"}>
            <button name='CallToAction' className="bg-primary-0 hover:bg-green-500 text-dark-0 px-8 py-4 rounded-full font-semibold text-lg shadow-lg transition transform hover:scale-105">
                Join Fusioner Today
            </button>
            </Link>
            </section>
        </div>
    </WithMetaTag>
  );
};

export default AboutUs;

  

  
