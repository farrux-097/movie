import { memo, useState, type FC } from "react";
import Image from "../../../../shared/components/image/Image";
import { useNavigate } from "react-router-dom";
import { Flex, Rate } from "antd";
import MovieViewSkeleton from "./MovieViewSkeleton";

interface Props {
  data: any[] | undefined;
  isLoading: boolean; // ⬅️ qo‘shdik
}

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

const MovieView: FC<Props> = ({ data, isLoading }) => {
  const navigate = useNavigate();
  const [value, setValue] = useState(3);

  // ⬅️ Agar yuklanayotgan bo‘lsa skeleton qaytaradi
  if (isLoading) {
    return <MovieViewSkeleton />;
  }

  return (
    <div className="container grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3">
      {data?.map((movie: any) => (
        <div key={movie.id}>
          <div onClick={() => navigate(`/movie/${movie.id}`)}>
            <Image
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            />
          </div>
          <div className="p-2">
            <h3
              className="font-bold line-clamp-1"
              title={movie.title}
            >
              {movie.title}
            </h3>
            <Flex gap="middle" vertical>
              <Rate
                tooltips={desc}
                onChange={setValue}
                value={movie.vote_average}
              />
              {value ? <span>{desc[value - 1]}</span> : null}
              <p className="text-yellow-500 font-bold">
                {movie.vote_average}
              </p>
            </Flex>
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(MovieView);
