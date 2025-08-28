import { memo } from "react";
import { useQuery } from "@tanstack/react-query";
import { api } from "../../../shared/api";
import Carusel from "../../../shared/components/carousel";
import { useMovie } from "../../movies/service/useMovie";
import MovieCarusel from "../../movies/components/movieCarusel";
import HomeSkeleton from "../pages/HomeSkileton";

type MovieType = {
  id: number;
  title: string;
  backdrop_path: string;
  release_date: string;
  original_language: string;
};

const Home = () => {
  const { data, isLoading, isError } = useQuery<MovieType[]>({
    queryKey: ["movies"],
    queryFn: async () => {
      const res = await api.get("/movie/popular?language=en-US&page=1");
      return res.data.results as MovieType[];
    },
  });

  const { getMovies } = useMovie();
  const { data: movies, isLoading: isLoadingMovies } = getMovies();

  if (isError)
    return <div className="text-red-500 text-center">Xatolik yuz berdi</div>;

  return (
    <div className="Home pt-[30px]">
      {/* Popular movies carousel */}
      {isLoading ? <HomeSkeleton /> : <Carusel movies={data || []} />}

      {/* Another carousel */}
      <div className="mt-[50px]">
        {isLoadingMovies ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="w-full h-[180px] sm:h-[220px] md:h-[260px] lg:h-[300px] bg-gray-700 rounded-lg"></div>
                <div className="mt-2 h-4 bg-gray-600 rounded w-3/4"></div>
                <div className="mt-1 h-4 bg-gray-600 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        ) : (
          <MovieCarusel movies={movies?.results} />
        )}
      </div>
    </div>
  );
};

export default memo(Home);


