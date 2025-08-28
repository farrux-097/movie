import { memo, useState, type FC, useEffect } from "react";
import Image from "../../../../shared/components/image/Image";
import { useNavigate } from "react-router-dom";
import { Rate } from "antd";
import MovieViewSkeleton from "./MovieViewSkeleton";

interface Props {
  data: any[] | undefined;
  isLoading: boolean;
}

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

const MovieView: FC<Props> = ({ data, isLoading }) => {
  const navigate = useNavigate();

  // Har bir film uchun rating state
  const [ratings, setRatings] = useState<number[]>([]);

  // data o'zgarganda ratingsni yangilash
  useEffect(() => {
    const initialRatings = data?.map(movie => Math.round(movie.vote_average / 2)) || [];
    setRatings(initialRatings);
  }, [data]);

  if (isLoading) {
    return <MovieViewSkeleton />;
  }

  const handleRateChange = (index: number, value: number) => {
    setRatings(prev => {
      const newRatings = [...prev];
      newRatings[index] = value;
      return newRatings;
    });
  };

  return (
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4 mb-10">
        {data?.map((movie: any, index: number) => (
          <div
            key={movie.id}
            className="group relative cursor-pointer bg-gray-900 rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-300"
            onClick={() => navigate(`/movie/${movie.id}`)}
          >
            {/* Poster */}
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover"
            />

            {/* Hover overlay: faqat desktopda ishlaydi, pointer-events-none bilan */}
            <div className="absolute inset-0 bg-[#00000097] opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 pointer-events-none">
              <h3
                className="font-bold text-white text-sm line-clamp-2 mb-2"
                title={movie.title}
              >
                {movie.title}
              </h3>
              <div className="flex items-center gap-2">
                <Rate
                  tooltips={desc}
                  onChange={(value) => handleRateChange(index, value)}
                  value={ratings[index]}
                  count={5}
                />
                {ratings[index] ? (
                  <span className="text-gray-300 text-xs">{desc[ratings[index] - 1]}</span>
                ) : null}
                <p className="text-yellow-400 font-bold text-sm ml-auto">
                  {movie.vote_average.toFixed(1)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(MovieView);
