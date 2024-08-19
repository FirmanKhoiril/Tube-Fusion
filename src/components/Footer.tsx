import { FaFacebookF, FaInstagram, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full container mx-auto py-6 border-t border-white/5 flex justify-between items-center text-secondary">
      <div className="text-sm">
        © {new Date().getFullYear()} Fusioner. All rights reserved.
      </div>
      <div className="flex space-x-4">
        <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-transform duration-200 transform hover:scale-110"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-transform duration-200 transform hover:scale-110"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-transform duration-200 transform hover:scale-110"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-transform duration-200 transform hover:scale-110"
          >
            <FaTwitter size={20} />
          </a>
          <Link
          to="/contact-us"
          className="hover:text-primary transition-transform duration-200 transform hover:scale-110"
        >
          <FaEnvelope size={20} />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
