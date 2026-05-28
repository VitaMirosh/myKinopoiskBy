import {NavLink, Outlet} from 'react-router';
import {Path} from '@/shared/lib/constants';
import s from './MovieLists.module.css'


export const MovieLists=()=>{

  return (
    <div>
      <nav className={s.container}>
        <NavLink to={Path.Popular} className={({isActive})=> isActive ? s.active: s.calm}>Popular Movies</NavLink>
        <NavLink to={Path.Top} className={({isActive})=> isActive ? s.active: s.calm}>Top rated Movies</NavLink>
        <NavLink to={Path.Upcoming} className={({isActive})=> isActive ? s.active: s.calm}>Upcoming Movies</NavLink>
        <NavLink to={Path.Now} className={({isActive})=> isActive ? s.active: s.calm}>Now Playing Movies</NavLink>
      </nav>
<Outlet/>
    </div>

  )}
