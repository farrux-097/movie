import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { TvMinimal,  GalleryHorizontal, Bookmark, LogIn } from 'lucide-react';
import MovieLogo from "../../shared/assets/movie.svg"

const Header = () => {
  return (
    <>
    <header className='w-full h-[80px] shadow-md pt-[22px] pb-[22px]'>
      <div className="container">
        <nav className='flex items-center justify-between'>
          <NavLink to={"/"}>
            <img className='w-[112px] h-[36px]' src={MovieLogo } alt="" />
          </NavLink>
          
          <ul className='flex items-center  justify-center gap-[37px]'>
            <li >
              <NavLink to={"/"} className={({ isActive }) => `${isActive ? 'text-[#C61F1F]' : 'text-[#A1A1A1]'} text-[12px] flex items-center  flex-col `}> <TvMinimal className='w-[24px] h-[24px]'/></NavLink>
            </li>
            <li>
              <NavLink to={"/movies"} className={({ isActive }) => `${isActive ? 'text-[#C61F1F]' : 'text-[#A1A1A1]'} text-[12px] flex items-center  flex-col `}> <GalleryHorizontal className='w-[24px] h-[24px]'/> </NavLink>
            </li>
            <li>
              <NavLink to={"/bookmark"} className={({ isActive }) => `${isActive ? 'text-[#C61F1F]' : 'text-[#A1A1A1]'} text-[12px] flex items-center gap-[6px] flex-col`}><Bookmark /></NavLink>
            </li>
          </ul>
          <div className='flex items-center gap-[20px]'>
          <select name="" id="" className='w-[92px] bg-[#1D1D1D80] pt-[14px] pr-[8px] pb-[14px] pl-[12px] text-white rounded-[12px] border-none'>
            <option className='text-white' value="">UZ</option>
            <option className='text-white' value="">RU</option>
            <option className='text-white' value="">EN</option>
          </select>
            <button className='text-[#A1A1A1]'>
              <LogIn />
            </button>
          </div>
        </nav>
      </div>
      

      
      
    </header>
    </>
  );
};

export default memo(Header);