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

  const {data,isLoading} = getMovies({page:page,with_genres:genre})
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
    <div className="Movies mt-[40px]">
      <div className='container'>
        <div className='mb-[20px]'>
        <Select 
          onChange={handleChaneGenre}
          className='w-60  bg-[#1a1a1a] [&_.ant-select-selection-placeholder]:!text-gray-400  text-white [&_.ant-select-selector]:!bg-[#1a1a1a] [&_.ant-select-selector]:!text-white activeBorderColor hoverBorderColor multipleItemColorDisabled optionSelectedColor onFocus  ' 
          placeholder="Genre"
          options={options}
          />
        </div>

      <MovieView isLoading={isLoading} data={data?.results}/>
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