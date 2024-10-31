import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="w-full bg-slate-100 text-gray-800 py-10 mt-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Us */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Jive l</h2>
          <p className="text-sm text-gray-400">
            Providing high-quality dance training with passion and expertise.
          </p>
          <p className="text-sm text-gray-400 mt-2">
            &copy; {new Date().getFullYear()} Jive Dance School. All rights
            reserved.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
          <ul className="text-gray-400 space-y-2">
            <li className="flex items-center">
              <MdLocationOn className="mr-2" />
              <span>123 Dance St, Dance City, DC</span>
            </li>
            <li className="flex items-center">
              <MdPhone className="mr-2" />
              <span>+1 (123) 456-7890</span>
            </li>
            <li className="flex items-center">
              <MdEmail className="mr-2" />
              <span>contact@jivedance.com</span>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
          <ul className="text-gray-400 space-y-2">
            <li>
              <a href="#" className="hover:text-gray-200">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200">
                Classes
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200">
                Instructors
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200">
                Events
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
          <div className="flex space-x-4 text-gray-400">
            <a href="#" aria-label="Facebook" className="hover:text-blue-500">
              <FaFacebookF size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-400">
              <FaTwitter size={20} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-500">
              <FaInstagram size={20} />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-red-600">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
