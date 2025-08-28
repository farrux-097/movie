import { memo } from "react";
import { NavLink } from "react-router-dom";
import { TvMinimal, GalleryHorizontal, Bookmark, LogIn, Search } from "lucide-react";
import MovieLogo from "../../shared/assets/movie.svg";

const Header = () => {
  return (
    <>
      {/* ==== Desktop & Tablet Header ==== */}
      <header className="w-full h-[80px] shadow-md fixed top-0 left-0 z-50 bg-black">
        <div className="container mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <NavLink to={"/"}>
            <img className="w-[112px] h-[36px]" src={MovieLogo} alt="Movie logo" />
          </NavLink>

          {/* Desktop Nav Menu */}
          <ul className="hidden md:flex items-center gap-[37px]">
            {[
              { to: "/", icon: <TvMinimal className="w-6 h-6" /> },
              { to: "/movies", icon: <GalleryHorizontal className="w-6 h-6" /> },
              { to: "/bookmark", icon: <Bookmark className="w-6 h-6" /> },
              { to: "/search", icon: <Search className="w-6 h-6" /> },
            ].map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `flex flex-col items-center text-[12px] transition-colors duration-200 ${
                      isActive ? "text-[#C61F1F]" : "text-[#A1A1A1]"
                    }`
                  }
                >
                  {item.icon}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Language + Login */}
          <div className="flex items-center gap-3">
            <select className="w-[72px] bg-[#1D1D1D80] py-2 px-2 text-white rounded-lg border-none text-sm">
              <option value="uz">UZ</option>
              <option value="ru">RU</option>
              <option value="en">EN</option>
            </select>
            <button className="text-[#A1A1A1] hover:text-white transition-colors duration-200">
              <LogIn className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* ==== Mobile Bottom Navigation ==== */}
      <div className="fixed bottom-0 left-0 w-full bg-black border-t border-gray-800 md:hidden z-50">
        <ul className="flex items-center justify-around py-2">
          {[
            { to: "/", icon: <TvMinimal className="w-6 h-6" /> },
            { to: "/movies", icon: <GalleryHorizontal className="w-6 h-6" /> },
            { to: "/bookmark", icon: <Bookmark className="w-6 h-6" /> },
            { to: "/search", icon: <Search className="w-6 h-6" /> },
          ].map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `flex flex-col items-center text-xs transition-colors duration-200 ${
                    isActive ? "text-[#C61F1F]" : "text-[#A1A1A1]"
                  }`
                }
              >
                {item.icon}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default memo(Header);
