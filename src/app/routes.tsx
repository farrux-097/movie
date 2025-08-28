import React, { lazy, Suspense, } from "react";
import { useRoutes } from "react-router-dom";
import LoadingForSuspens from "./LoadingForSuspens";

const MainLayout = lazy(()=> import("../layout/MainLayout"))
const Home = lazy(()=> import("../features/home/pages/Home"))
const Bookmark = lazy(()=> import("../features/bookmark/pages/Bookmark"))
const Movies = lazy(()=> import("../features/movies/pages/Movies"))
const MovieDetail = lazy(()=> import("../features/movies/pages/MovieDetail"))
const Search = lazy(()=> import("../features/search/pages/Search"))
const NotFound = lazy(() => import("../shared/components/NotFound/NotFound"))

const AppRoutes = () => {

  const routers = useRoutes([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
          {index:true, element:<Home/> },
          {path:"bookmark", element:<Bookmark/> },
          {path:"movies", element:<Movies/> },
          {path:"search", element:<Search/> },
          {path:"movie/:id", element:<MovieDetail/> },
          {path:"*",element:<NotFound/> },
        ]
    }
  ]);

  return (
     <Suspense fallback={<LoadingForSuspens/>}>
      {routers}
    </Suspense>
  )
  

 
    
    

};

export default React.memo(AppRoutes);
