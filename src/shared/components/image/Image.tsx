import { memo, useState, type FC } from 'react';
import Loading from './loading';

interface Props {
    src: string
    alt?:string
    className?: string
}

const Image:FC<Props> = ({src, alt,className = ""}) => {
    const [loading , setLoading] = useState(true)
  return (
   <>
    <img src={src} className={className} onLoad={() => setLoading(false)} alt={alt} />
    {
        loading && <Loading/>
    }
   </>
  );
};

export default memo(Image);