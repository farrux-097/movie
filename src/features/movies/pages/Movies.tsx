import { memo } from 'react';
import { useMovie } from '../../movies/service/useMovie';
import MovieView from '../../movies/components/movie-view/MovieView';
import { Pagination, Select } from 'antd';
import { useSearchParams } from 'react-router-dom';
import { useGenre } from '../service/useGenre';

const Movies = () => {
  const {getMovies} = useMovie()
  const {getGenres} = useGenre()


  const[params,setParams] = useSearchParams()

  // const limit = params.get("limit")  
  // const [page, setpage] =useState(1)

  const  page = params.get("page") || "1"
  const genre =   params.get("genre") || ""

  const {data} = getMovies({page:page,with_genres:genre})
  const {data:genreData } = getGenres()
  const options = genreData?.genres?.map(({id,name}:any) => ({value: id.toString(),label:name}))


  const handleChange = (value:number) => {
      // setpage(value)
      params.set("page", value.toString())
      setParams(params)


      // params.set("limit","10")
      // params.set("skip","5")
      // params.set("genre","animation")
      
  }
  const handleChaneGenre = (value:string) => {
      params.set("genre",value)
      setParams(params)
  }
  return (
    <div className="Movies mt-[100px]">
      <div className='container'>
        <Select 
          onChange={handleChaneGenre}
          className='W-40 ' 
          placeholder="Genre"
          options={options}
          />
      <MovieView data={data?.results}/>
      <div className='flex justify-center'>
        <Pagination
        current={Number(page)}
         onChange={handleChange}
         total={data?.total_pages}
         showSizeChanger={false}
         />
      </div>
      </div>
    </div>
  );
};

export default memo(Movies);