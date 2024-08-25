import { LazyLoadImage } from 'react-lazy-load-image-component';
import ContactImage from '../assets/icon/Contact.svg';
import WithMetaTag from "../utils/withMetaTag";
import { useContactForm } from '../hooks/useContactForm';

const Contact = () => {
  const {handleChange, handleSubmit, form, errors} = useContactForm()

  return (
    <WithMetaTag title="Fusioner: Contact Us" keywords="Fusioner, crypto support, contact Fusioner, cryptocurrency inquiries, crypto help, Fusioner customer service" link="https://fusioner.vercel.app/contact" desc="Reach out to Fusioner for any inquiries or support. We're here to help with all your cryptocurrency needs, providing expert assistance and guidance on your crypto journey.">
      <div className="min-h-screen relative w-full flex flex-col pt-[72px] px-2 md:pt-0 md:flex-row-reverse items-center justify-around">
        <div className="absolute top-32 -left-8 md:left-auto right-0 md:right-20 blur-xl -z-10 h-44 w-32 md:h-56 md:w-48 rounded-full bg-gradient-to-tr bg-[#10b981] via-[#B2DBDB] to-[#34d399] animate-spin-slow"></div>
        <div className="w-full mx-auto flex items-center justify-center max-w-1/2">
          <div className="bg-dark-0/70 p-8 max-w-[620px] rounded-lg shadow-lg w-full">
            <h1 className="text-2xl font-semibold text-primary mb-6 text-center">Contact Us</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-secondary mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-dark text-white rounded focus:outline-none focus:ring-2 focus:ring-primary-0 border border-white/5 bg-black/5"
                  required
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-secondary mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-dark text-white rounded focus:outline-none focus:ring-2 focus:ring-primary-0 border border-white/5 bg-black/5"
                  required
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-secondary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 h-32 bg-black/5 text-white rounded focus:outline-none focus:ring-2 focus:ring-primary-0 border border-white/5"
                  required
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-primary-0 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="w-full md:flex items-center justify-center hidden min-h-screen max-w-1/2">
          <LazyLoadImage src={ContactImage} className="max-w-[350px] lg:max-w-[440px] xl:max-w-[500px] w-full" />
        </div>
      </div>
    </WithMetaTag>
  );
};

export default Contact;
