import { memo } from 'react';
import { useMovie } from '../../movies/service/useMovie';
import MovieView from '../../movies/components/movie-view/MovieView';
import { Pagination, Select } from 'antd';
import { useSearchParams } from 'react-router-dom';
import { useGenre } from '../service/useGenre';

const Movies = () => {
  const { getMovies } = useMovie();
  const { getGenres } = useGenre();

  const [params, setParams] = useSearchParams();

  const page = params.get("page") || "1";
  const genre = params.get("genre") || "";

  const { data, isLoading } = getMovies({ page: page, with_genres: genre });
  const { data: genreData } = getGenres();

  const options = genreData?.genres?.map(({ id, name }: any) => ({
    value: id.toString(),
    label: name,
  }));

  const handleChangePage = (value: number) => {
    params.set("page", value.toString());
    setParams(params);
  };

  const handleChangeGenre = (value: string) => {
    params.set("genre", value);
    params.set("page", "1"); // genre o'zgarganda sahifa 1 ga qaytariladi
    setParams(params);
  };

  return (
    <div className="Movies mt-10  min-h-screen text-white">
      <div className="container mx-auto px-4">
        {/* Genre Select */}
        <div className="mb-6 flex justify-start">
          <Select
            onChange={handleChangeGenre}
            className="w-60 bg-[#1a1a1a] text-white [&_.ant-select-selector]:!bg-[#1a1a1a] [&_.ant-select-selector]:!text-white [&_.ant-select-selection-placeholder]:!text-gray-400"
            placeholder="Select Genre"
            options={options}
            allowClear
          />
        </div>

        {/* Movie Grid */}
        <MovieView isLoading={isLoading} data={data?.results} />

        {/* Pagination */}
        <div className="flex justify-center mt-6 mb-10">
<Pagination
        current={Number(page)}
         onChange={handleChangePage}
         total={data?.total_pages}
         showSizeChanger={false}
         />
        </div>
      </div>
    </div>
  );
};

export default memo(Movies);
