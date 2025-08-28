import { memo } from "react";
import footerLogo from "../../shared/assets/movie.svg";
import playMarket from "../../shared/assets/playmarket.png";
import AppStore from "../../shared/assets/appstore.png";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-gray-300 pt-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo & Apps */}
        <div>
          <img src={footerLogo} alt="Logo" className="mb-6 w-[150px]" />
          <p className="text-sm mb-4">
            Your favorite movies, trailers, and reviews in one place.
          </p>
          <div className="flex gap-3">
            <img
              src={playMarket}
              className="w-[140px] h-[44px] object-contain cursor-pointer hover:opacity-80 transition duration-200"
              alt="Play Market"
            />
            <img
              src={AppStore}
              className="w-[140px] h-[44px] object-contain cursor-pointer hover:opacity-80 transition duration-200"
              alt="App Store"
            />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
          <ul className="flex flex-col gap-2 text-sm">
            {["Home", "Movies", "Genres", "Contact"].map((link) => (
              <li key={link}>
                <NavLink
                  to={`/${link.toLowerCase()}`}
                  className={({ isActive }) =>
                    `transition-colors duration-200 hover:text-white ${
                      isActive ? "text-white font-semibold" : "text-gray-300"
                    }`
                  }
                >
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Follow Us</h3>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook size={22} className="hover:text-white transition-colors duration-200" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter size={22} className="hover:text-white transition-colors duration-200" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram size={22} className="hover:text-white transition-colors duration-200" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <Youtube size={22} className="hover:text-white transition-colors duration-200" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-8 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} MovieApp. All rights reserved.
      </div>
    </footer>
  );
};

export default memo(Footer);
