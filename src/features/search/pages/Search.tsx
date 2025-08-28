import { Input } from "antd";
import { memo, useState } from "react";
import { useSearch } from "../service/useSearch";
import MovieView from "../../movies/components/movie-view/MovieView";
import useDebounce from "../../../shared/hooks/useDebounce";

const Search = () => {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 500); // 500ms debounce

  const { getMoviesBySearch } = useSearch();
  const { data, isLoading } = getMoviesBySearch({ query: debouncedValue });

  return (
    <div className="container mx-auto px-4 mt-10 mb-10">
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search for movies..."
        className="w-full md:w-1/2 bg-[#1a1a1a] text-white placeholder-gray-400 border-none rounded-lg focus:border-red-600 focus:ring-1 focus:ring-red-600"
      />
      
      <div className="mt-6">
        <MovieView isLoading={isLoading} data={data?.results} />
      </div>
    </div>
  );
};

export default memo(Search);
