import { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";

type MovieType = {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  original_language: string;
  genres:string
};

type CaruselProps = {
  movies: MovieType[];
};

const MovieCarusel = ({ movies }: CaruselProps) => {
    const navigate = useNavigate()
  return (
    <div className="w-full container bg-black text-white py-6">
      <div className="flex justify-between items-center px-4 mb-4">
        <h2 className="text-lg font-semibold">На неделе</h2>
        <button className="text-red-500 hover:underline">
          Показать все &gt;
        </button>
      </div>
      <Swiper
        spaceBetween={20}
        navigation
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },  
          1024: { slidesPerView: 4 },  
        }}
        modules={[Navigation]}
        className="px-4"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className="flex flex-col items-start cursor-pointer">
              <div onClick={() => navigate(`/movie/${movie.id}`)} className="bg-neutral-800 rounded-lg overflow-hidden w-full aspect-[2/3]">
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-2 text-sm font-semibold">
                {movie.title} – {movie.original_language.toUpperCase()}
              </h3>
              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default memo(MovieCarusel);
