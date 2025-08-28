import { useMutation, useQuery } from "@tanstack/react-query"
import { api } from "../../../shared/api"

interface IParams{
    page?: string
    with_genres?: string
}

export const useMovie = () => {

    const getMovies = (params?: IParams) => useQuery({
        queryKey: ["movie-key",params],
        queryFn: ()=> 
            api
                .get("/discover/movie",{
                    params:{...params}
                })
                .then(res => res.data)
    })

    const getMovieById  = (id:number ) => useQuery({
        queryKey: ["movie-key",id],
        queryFn: ()=> api.get(`/movie/${id}`).then(res => res.data)
    })
    const getMovieByItems  = (id:number, path: string) => useQuery({
        queryKey: ["movie-key",id, path],
        queryFn: ()=> api.get(`/movie/${id}/${path }`).then(res => res.data)
    })
    const getMovieSimilar  = (id:number, path: string) => useQuery({
        queryKey: ["movie-key",id, path],
        queryFn: ()=> api.get(`/movie/${id}/${path }`).then(res => res.data)
    })

    const createMovie = useMutation({
        mutationFn: (data: any)=> api.post("/discover/movie", data)
    })


    return {getMovies, createMovie,getMovieById,getMovieByItems,getMovieSimilar}
}