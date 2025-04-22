import Link from 'next/link';
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* About */}
        <div className="sm:max-w-xl md:max-w-sm">
          <h3 className="text-3xl font-bold text-white mb-4">Webnexter</h3>
          <p className="leading-relaxed text-gray-400">
            A creative agency delivering stunning digital experiences through design,
            development, and marketing. We turn ideas into impact.
          </p>
        </div>

        {/* Quick Links */}
        <div className="max-w-xl">
          <h3 className="text-3xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/services" className="hover:text-white transition-colors duration-200">
                Services
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-white transition-colors duration-200">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition-colors duration-200">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition-colors duration-200">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-3xl font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-2">
            <li>Email: <a href="mailto:webnexter2024@gmail.com" className="hover:text-white">webnexter2024@gmail.com</a></li>
            <li>Phone: <a href="tel:+8801756680320" className="hover:text-white">+8801756680320</a></li>
            <li>Location: Khulna, Bangladesh</li>
          </ul>
        </div>

        {/* Newsletter & Socials */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">Stay Connected</h3>
          <p className="text-gray-400 mb-4">
            Follow us on social media to stay up to date.
          </p>
          <div className="flex space-x-4">
            <Link href="https://www.facebook.com/WebNexterofficial1/" className="text-3xl text-gray-400 hover:text-white transition hover:scale-110">
              <FaFacebook />
            </Link>
            <Link href="https://www.instagram.com/web_nexter/" className="text-3xl text-gray-400 hover:text-white transition hover:scale-110">
              <FaInstagram />
            </Link>
            <Link href="https://wa.me/+8801756680320" className="text-3xl text-gray-400 hover:text-white transition hover:scale-110">
              <FaWhatsapp />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} <span className="font-semibold text-white">Webnexter</span>. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
