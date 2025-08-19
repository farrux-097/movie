import { memo } from 'react';
import footerLogo from "../../shared/assets/movie.svg"
import playMarket from "../../shared/assets/playmarket.png"
import AppStore from "../../shared/assets/appstore.png"

const Footer = () => {
  return (
    <>
     <footer className='p-[30px]'>
        <div className="container bg-[#111111] h-[240px] p-[30px]">
           <div >
                <img src={footerLogo} className='mb-[48px]'  alt="" />
                <ul className='flex  flex-col gap-[8px]'>
             
              <li>
                <img src={playMarket} className='w-[150px] h-[44px] object-cover ' alt="" />
              </li>
              <li>
                <img src={AppStore} className='w-[150px] h-[44px] object-cover ' alt="" />
              </li>
            </ul>
              </div>
            
        </div>
     </footer>
    </>
  );
};

export default memo(Footer);