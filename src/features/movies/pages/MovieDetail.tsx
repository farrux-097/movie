import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useMovie } from '../service/useMovie';
import Imagecontainer from '../../../shared/components/image/Image';
import MovieView from '../components/movie-view/MovieView';
import { Image } from 'antd';

const MovieDetail = () => {
  const { id } = useParams();
  const { 
    getMovieById, 
    getMovieByItems, 
    getMovieSimilar, 
    getMovieVideos, 
    getMovieCredits 
  } = useMovie();

  const { data, isLoading } = getMovieById(Number(id));
  const { data: images } = getMovieByItems(Number(id), "images");
  const { data: similarData } = getMovieSimilar(Number(id), "similar");
  const { data: videos } = getMovieVideos(Number(id));
  const { data: credits } = getMovieCredits(Number(id));

  if (isLoading) {
    return <div className="text-center text-4xl text-white">Loading...</div>;
  }

  return (
    <div className="MovieDetail bg-[#141414] text-white min-h-screen">
      <div className="relative w-full h-[60vh] md:h-[75vh]">
        {/* 🎬 Background Image + Overlay */}
        <Imagecontainer
          src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/60 to-transparent"></div>

        {/* 🎬 Movie Info Overlay */}
        <div className="absolute bottom-10 left-6 md:left-16 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold">{data?.title}</h2>
          <p className="text-lg text-gray-300 mt-3">{data?.overview}</p>
          <p className="text-green-400 font-semibold mt-2">{data?.status}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">

        {/* 🖼️ 1. Kino rasmlari */}
        <h3 className="text-2xl font-semibold mb-4">Gallery</h3>
        <div className="container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-12">
          {images?.backdrops?.slice(0, 10)?.map((item: any, index: number) => (
            <Image
              key={index}
              src={`https://image.tmdb.org/t/p/w500${item.file_path}`}
              className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              alt=""
            />
          ))}
        </div>

        {/* 🎭 2. Aktyorlar */}
        {credits?.cast?.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4">Cast</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-6">
              {credits.cast.slice(0, 10).map((actor: any) => (
                <div 
                  key={actor.cast_id || actor.credit_id} 
                  className="text-center group"
                >
                  <img
                    src={
                      actor.profile_path
                        ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                        : "https://via.placeholder.com/200x300?text=No+Image"
                    }
                    alt={actor.name}
                    className="w-full h-[200px] object-cover rounded-lg shadow-md group-hover:scale-105 transition-transform"
                  />
                  <p className="mt-2 text-sm font-semibold">{actor.name}</p>
                  <p className="text-gray-400 text-xs">as {actor.character}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 🎥 3. Kino Videosi (trailer / teaser) */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Trailer</h3>
          <div className="flex justify-center">
            {(() => {
              let video = videos?.results?.find(
                (v: any) => v.site === "YouTube" && v.type === "Trailer"
              );
              if (!video) {
                video = videos?.results?.find(
                  (v: any) => v.site === "YouTube" && (v.type === "Teaser" || v.type === "Clip")
                );
              }
              return (
                video && (
                  <div className="w-full max-w-4xl aspect-video rounded-lg overflow-hidden shadow-lg">
                    <iframe
                      key={video.id}
                      src={`https://www.youtube.com/embed/${video.key}`}
                      title={video.name}
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                )
              );
            })()}
          </div>
        </div>

        {/* 📌 4. O‘xshash kinolar */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Similar Movies</h3>
          <MovieView isLoading={isLoading} data={similarData?.results?.slice(0, 8)} />
        </div>
      </div>
    </div>
  );
};

export default memo(MovieDetail);
