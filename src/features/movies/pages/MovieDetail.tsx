import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useMovie } from '../service/useMovie';
import Image from '../../../shared/components/image/Image';
import MovieView from '../components/movie-view/MovieView';

const MovieDetail = () => {
  const {id} = useParams()
    const{getMovieById ,getMovieByItems,getMovieSimilar} = useMovie()
    const {data,isLoading} = getMovieById(Number(id))
    const {data:images} =getMovieByItems(Number(id), "images")
    const {data:similarData} =getMovieSimilar(Number(id), "similar")
   
    
    if(isLoading){
      return <div className='text-center text-4xl'>Loading...</div>
    }
  return (
    <div className="MovieDetail">
      <div className='container'>
          <div >
            <Image src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}/>
              <h2 className='text-3xl text-white'>{data?.title}</h2>
              <p className='text-2xl text-white'>{data?.status}</p>
              <p className='text-xl text-gray-400'>{data?.overview}</p>
          </div>
          <div className='flex items-center justify-center flex-wrap gap-4 mb-[50px]'>
            {
              images?.backdrops?.slice(0,10)?.map((item:any , index:number) => (
                <img key={index} src={`https://image.tmdb.org/t/p/original${item.file_path}`} width={150} alt="" />
              ))
            }
          </div>
          <div>
            <MovieView data={similarData?.results?.slice(0,8)}/>
          </div>
      </div>
    </div>
  );
};

export default memo(MovieDetail);