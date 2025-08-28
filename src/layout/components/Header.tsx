import { memo } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { TvMinimal, GalleryHorizontal, Bookmark, LogIn, Search } from "lucide-react";
import MovieLogo from "../../shared/assets/movie.svg";

const navItems = [
  { to: "/", icon: TvMinimal, label: "Home" },
  { to: "/movies", icon: GalleryHorizontal, label: "Movies" },
  { to: "/bookmark", icon: Bookmark, label: "Bookmark" },
  { to: "/search", icon: Search, label: "Search" },
];

const Header = () => {
  const location = useLocation(); // active path olish uchun

  return (
    <>
      {/* Desktop & Tablet Header */}
      <header className="w-full h-[80px] fixed top-0 left-0 z-50 bg-black shadow-md">
        <div className="container mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/">
            <img className="w-[112px] h-[36px]" src={MovieLogo} alt="Movie Logo" />
          </NavLink>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map(({ to, icon: Icon, label }) => {
              const isActive = location.pathname === to;
              return (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={`flex flex-col items-center text-[12px] transition-transform duration-200 ${
                      isActive ? "text-[#C61F1F] scale-110" : "text-[#A1A1A1] hover:text-white hover:scale-105"
                    }`}
                  >
                    <Icon className="w-6 h-6 mb-1" />
                    <span className="hidden md:block">{label}</span>
                    {/* Active underline */}
                    <span
                      className={`h-[2px] w-full rounded-full mt-1 transition-all duration-300 ${
                        isActive ? "bg-[#C61F1F]" : "bg-transparent"
                      }`}
                    />
                  </NavLink>
                </li>
              );
            })}
          </ul>

          {/* Language + Login */}
          <div className="flex items-center gap-3">
            <select className="w-[72px] bg-[#1D1D1D80] py-2 px-2 text-white rounded-lg border-none text-sm">
              <option value="uz">UZ</option>
              <option value="ru">RU</option>
              <option value="en">EN</option>
            </select>
            <button className="text-[#A1A1A1] hover:text-white transition duration-200">
              <LogIn className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Nav */}
      <div className="fixed bottom-0 left-0 w-full bg-black border-t border-gray-800 md:hidden z-50">
        <ul className="flex items-center justify-around py-2">
          {navItems.map(({ to, icon: Icon }) => {
            const isActive = location.pathname === to;
            return (
              <li key={to}>
                <NavLink
                  to={to}
                  className={`flex flex-col items-center text-xs transition-transform duration-200 ${
                    isActive ? "text-[#C61F1F] scale-110" : "text-[#A1A1A1] hover:text-white hover:scale-105"
                  }`}
                >
                  <Icon className="w-6 h-6" />
                  <span
                    className={`h-[2px] w-full rounded-full mt-1 transition-all duration-300 ${
                      isActive ? "bg-[#C61F1F]" : "bg-transparent"
                    }`}
                  />
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default memo(Header);
