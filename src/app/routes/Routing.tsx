import {Route, Routes} from 'react-router';
import {CardsList} from '@/widgets/CartsList/CartsList.tsx';
import {Path} from '@/shared/lib/constants';
import {Main} from '@/widgets/Main';
import {FilteredMovies} from '@/widgets/FilteredMovies';
import {Search} from '@/widgets/Search';
import {Favorites} from '@/widgets/Favorites';



export const Routing = () => (
  <Routes>
    <Route path={Path.Main} element={<Main/>}/>
    <Route path={Path.CardsList} element={<CardsList/>}/>
    <Route path={Path.FilteredMovies} element={<FilteredMovies/>}/>
    <Route path={Path.Search} element={<Search/>}/>
    <Route path={Path.Favorites} element={< Favorites/>}/>
  </Routes>

)

