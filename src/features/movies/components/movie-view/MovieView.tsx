import { memo, type FC } from "react";
import Image from "../../../../shared/components/image/Image";
import { useNavigate } from "react-router-dom";

interface Props {
  data: any[] | undefined;
}

const MovieView: FC<Props> = ({ data }) => {
  const navigate = useNavigate()
  return (
    <div className="container grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3">
      {data?.map((movie: any) => (
        <div key={movie.id}>
            <div onClick={() => navigate(`/movie/${movie.id}`)}>
                <Image src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
            </div>
            <div className="p-2">
                <h3 className="font-bold line-clamp-1" title={movie.title}>{movie.title}</h3>
                <p className="text-yellow-500 font-bold">⭐ {movie.vote_average}</p>
            </div>
        </div>
      ))}
    </div>
  );
};

export default memo(MovieView);
