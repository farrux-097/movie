import { memo } from "react";
import { NavLink } from "react-router-dom";
import {
  TvMinimal,
  GalleryHorizontal,
  Bookmark,
  LogIn,
  Search,
} from "lucide-react";
import MovieLogo from "../../shared/assets/movie.svg";

const Header = () => {
  return (
    <>
      {/* ==== Header (desktop + mobile) ==== */}
      <header className="w-full h-[80px] shadow-md pt-[22px] pb-[22px] fixed top-0 left-0 z-50 bg-black">
        <div className="container">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <NavLink to={"/"}>
              <img
                className="w-[112px] h-[36px]"
                src={MovieLogo}
                alt="Movie logo"
              />
            </NavLink>

            {/* Nav menu (faqat desktop/tabletda ko‘rinadi) */}
            <ul className="hidden md:flex items-center justify-center gap-[37px]">
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-[#C61F1F]" : "text-[#A1A1A1]"
                    } text-[12px] flex items-center flex-col`
                  }
                >
                  <TvMinimal className="w-[24px] h-[24px]" />
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/movies"}
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-[#C61F1F]" : "text-[#A1A1A1]"
                    } text-[12px] flex items-center flex-col`
                  }
                >
                  <GalleryHorizontal className="w-[24px] h-[24px]" />
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/bookmark"}
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-[#C61F1F]" : "text-[#A1A1A1]"
                    } text-[12px] flex items-center flex-col`
                  }
                >
                  <Bookmark className="w-[24px] h-[24px]" />
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/search"}
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-[#C61F1F]" : "text-[#A1A1A1]"
                    } text-[12px] flex items-center flex-col`
                  }
                >
                  <Search className="w-[24px] h-[24px]" />
                </NavLink>
              </li>
            </ul>

            {/* Language + Login (har doim ko‘rinadi) */}
            <div className="flex items-center gap-[12px]">
              <select className="w-[72px] bg-[#1D1D1D80] py-2 px-2 text-white rounded-[8px] border-none text-sm">
                <option value="uz">UZ</option>
                <option value="ru">RU</option>
                <option value="en">EN</option>
              </select>
              <button className="text-[#A1A1A1]">
                <LogIn className="w-[22px] h-[22px]" />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* ==== Mobile Bottom Nav (faqat icon menyular) ==== */}
      <div className="fixed bottom-0 left-0 w-full bg-black border-t border-gray-800 md:hidden z-50">
        <ul className="flex items-center justify-around py-2">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex flex-col items-center text-xs ${
                  isActive ? "text-[#C61F1F]" : "text-[#A1A1A1]"
                }`
              }
            >
              <TvMinimal className="w-6 h-6" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/movies"
              className={({ isActive }) =>
                `flex flex-col items-center text-xs ${
                  isActive ? "text-[#C61F1F]" : "text-[#A1A1A1]"
                }`
              }
            >
              <GalleryHorizontal className="w-6 h-6" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/bookmark"
              className={({ isActive }) =>
                `flex flex-col items-center text-xs ${
                  isActive ? "text-[#C61F1F]" : "text-[#A1A1A1]"
                }`
              }
            >
              <Bookmark className="w-6 h-6" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/search"
              className={({ isActive }) =>
                `flex flex-col items-center text-xs ${
                  isActive ? "text-[#C61F1F]" : "text-[#A1A1A1]"
                }`
              }
            >
              <Search className="w-6 h-6" />
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default memo(Header);
