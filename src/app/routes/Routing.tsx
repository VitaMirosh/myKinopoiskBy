import { Route, Routes } from "react-router"
import { MovieLists } from "@/widgets/MovieLists/MovieLists.tsx"
import { Path } from "@/shared/lib/constants"
import { Main } from "@/widgets/Main"
import { FilteredMovies } from "@/widgets/FilteredMovies"
import { Search } from "@/widgets/Search"
import { Favorites } from "@/widgets/Favorites"
import { TopRatedMovies } from "@/pages/TopRatedMovies/TopRatedMovies.tsx"
import { PopularMovies } from "@/pages/PopularMovies/PopularMovies.tsx"
import { UpcomingMovies } from "@/pages/UpcomingMovies/UpcomingMovies.tsx"
import { NowPlayingMovies } from "@/pages/NowPlayingMovies/NowPlayingMovies.tsx"
import { Details } from "@/pages/Details/Details.tsx"

export const Routing = () => (
  <Routes>
    <Route path={Path.Main} element={<Main />} />
    <Route path={Path.MovieLists} element={<MovieLists />}>
      <Route path={Path.Popular} element={<PopularMovies />} />
      <Route path={Path.Top} element={<TopRatedMovies />} />
      <Route path={Path.Upcoming} element={<UpcomingMovies />} />
      <Route path={Path.Now} element={<NowPlayingMovies />} />
    </Route>
    <Route path={Path.FilteredMovies} element={<FilteredMovies />} />
    <Route path={Path.Search} element={<Search />} />
    <Route path={Path.Favorites} element={<Favorites />} />
    <Route path={Path.Details} element={<Details />} />
  </Routes>
)
