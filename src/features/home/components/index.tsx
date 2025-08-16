import { memo,useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination,Thumbs,FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


type MovieType = {
  id: number;
  title: string;
  backdrop_path: string;
  release_date: string;
  original_language: string;
};

type CaruselProps = {
  movies: MovieType[];
};

const Carusel = ({ movies }: CaruselProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  return (
    <div className="Carusel container">
      <Swiper
        modules={[Navigation, Pagination,Thumbs,FreeMode]}
        navigation
        pagination={{ clickable: true }}
        thumbs={{ swiper: thumbsSwiper }}
        className="w-full h-[640px]"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div
              className="w-full h-[640px] bg-cover bg-center bg-no-repeat relative"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
              }}
            >
            
              <div className="absolute inset-0 flex justify-center items-end pb-10">
                <div className="w-[90%] sm:w-[380px] flex flex-col items-center text-center">
                  <h1 className="font-medium text-2xl sm:text-[32px] text-white mb-2">
                    {movie.title}
                  </h1>

                  <ul className="flex flex-wrap items-center gap-2 text-white text-xs sm:text-sm mb-4 justify-center">
                    <li>{movie.release_date}</li>
                    <li>•</li>
                    <li>{movie.original_language.toUpperCase()}</li>
                    <li>•</li>
                    <li>HD</li>
                  </ul>

                  <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white text-red-600 font-medium hover:bg-gray-100 transition">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="red" stroke="#da1010" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-play-icon lucide-play"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"/></svg>
                     Смотреть
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
           <Swiper
        onSwiper={setThumbsSwiper} 
        spaceBetween={0}
        slidesPerView={10}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[Thumbs,FreeMode]}
        className="mySwiper mt-4"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id} >
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.backdrop_path}`}
              alt={movie.title}
              className="rounded-2xl cursor-pointer w-[80px] sm:w-[100px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default memo(Carusel);
