import { memo } from "react";
import footerLogo from "../../shared/assets/movie.svg";
import playMarket from "../../shared/assets/playmarket.png";
import AppStore from "../../shared/assets/appstore.png";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-gray-300">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo & Apps */}
        <div>
          <img src={footerLogo} alt="Logo" className="mb-6 w-[150px]" />
          <p className="text-sm mb-4">
            Your favorite movies, trailers, and reviews in one place.
          </p>
          <div className="flex gap-3">
            <img
              src={playMarket}
              className="w-[140px] h-[44px] object-contain cursor-pointer hover:opacity-80 transition"
              alt="Play Market"
            />
            <img
              src={AppStore}
              className="w-[140px] h-[44px] object-contain cursor-pointer hover:opacity-80 transition"
              alt="App Store"
            />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `transition hover:text-white ${
                    isActive ? "text-white font-semibold" : "text-gray-300"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/movies"
                className={({ isActive }) =>
                  `transition hover:text-white ${
                    isActive ? "text-white font-semibold" : "text-gray-300"
                  }`
                }
              >
                Movies
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/genres"
                className={({ isActive }) =>
                  `transition hover:text-white ${
                    isActive ? "text-white font-semibold" : "text-gray-300"
                  }`
                }
              >
                Genres
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `transition hover:text-white ${
                    isActive ? "text-white font-semibold" : "text-gray-300"
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Follow Us</h3>
          <div className="flex gap-4">
            <NavLink to="https://facebook.com" target="_blank">
              <Facebook size={22} className="hover:text-white transition" />
            </NavLink>
            <NavLink to="https://twitter.com" target="_blank">
              <Twitter size={22} className="hover:text-white transition" />
            </NavLink>
            <NavLink to="https://instagram.com" target="_blank">
              <Instagram size={22} className="hover:text-white transition" />
            </NavLink>
            <NavLink to="https://youtube.com" target="_blank">
              <Youtube size={22} className="hover:text-white transition" />
            </NavLink>
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
