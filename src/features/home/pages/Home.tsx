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
  // 🔥 Popular movies
  const { data, isLoading, isError } = useQuery<MovieType[]>({
    queryKey: ["movies"],
    queryFn: async () => {
      const res = await api.get("/movie/popular?language=en-US&page=1");
      return res.data.results as MovieType[];
    },
  });

  // 🔥 Latest / other movies
  const { getMovies } = useMovie();
  const { data: movies, isLoading: isLoadingMovies } = getMovies();

  if (isError)
    return (
      <div className="text-red-500 text-center mt-10 text-lg">
        ❌ Xatolik yuz berdi
      </div>
    );

  return (
    <div className="Home bg-black min-h-screen text-white">
      <div className="container mx-auto px-3 sm:px-6 lg:px-12 pt-6">
        
        {/* 🎬 1. Popular Movies */}
        <section>
          {isLoading ? <HomeSkeleton /> : <Carusel movies={data || []} />}
        </section>

        {/* 🎬 2. Recommended / Other Movies */}
        <section className="mt-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">Recommended</h2>

          {isLoadingMovies ? (
            // Skeleton loading grid
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="w-full h-[180px] sm:h-[220px] md:h-[260px] lg:h-[300px] bg-gray-800 rounded-lg"></div>
                  <div className="mt-2 h-3 bg-gray-700 rounded w-3/4"></div>
                  <div className="mt-1 h-3 bg-gray-700 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          ) : (
            <MovieCarusel movies={movies?.results} />
          )}
        </section>
      </div>
    </div>
  );
};

export default memo(Home);
