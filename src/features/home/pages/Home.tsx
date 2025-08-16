import { memo } from "react";
import { useQuery } from "@tanstack/react-query";
import { api } from "../../../shared/api";
import Carusel from "../components";

type MovieType = {
  id: number;
  title: string;
  backdrop_path: string;
  release_date: string;
  original_language: string;
};

const Home = () => {
  const { data, isLoading, isError } = useQuery<MovieType[]>({
    queryKey: ["movies"],
    queryFn: async () => {
      const res = await api.get("/movie/popular?language=en-US&page=1");
      return res.data.results as MovieType[];
    },
  });

  if (isLoading) return <div className="text-white text-center">Loading...</div>;
  if (isError) return <div className="text-red-500 text-center">Xatolik yuz berdi</div>;

  return (
    <div className="Home">
      <Carusel movies={data || []} />
    </div>
  );
};

export default memo(Home);
