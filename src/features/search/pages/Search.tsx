import { Input } from 'antd';
import { memo, useState } from 'react';
import { useSearch } from '../service/useSearch';
import MovieView from '../../movies/components/movie-view/MovieView';
import useDebounce from '../../../shared/hooks/useDebounce';

const Search = () => {
    const [value,setValue] = useState("")
    const debouncedValue = useDebounce(value)
    
    const {getMoviesBySearch} = useSearch()
    const {data} = getMoviesBySearch({query:debouncedValue})
  return (
    <div className="container mt-3">
        <div>
          <Input value={value} onChange={(e) => setValue(e.target.value)} placeholder='Search...'/>
          <div className='mt-6'>
            <MovieView data = {data?.results}/>
          </div>
        </div>
    </div>
  );
};

export default memo(Search);