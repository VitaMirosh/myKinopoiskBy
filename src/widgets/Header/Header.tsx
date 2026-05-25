import {Path} from '@/shared/lib/constants';
import s from './Header.module.css'
import {NavLink} from 'react-router';
import {Logo} from '@/app/logo';
import {Theme} from '@/shared/ui/theme';



export const Header = () => {



  return (
    <div className={s.container}>
      <NavLink to={Path.Main}><Logo/></NavLink>
      <nav className={s.navContainer}>
        <NavLink to={Path.Main}>Main</NavLink>
        <NavLink to={Path.CardsList}>Category movies</NavLink>
        <NavLink to={Path.Favorites}>Filtered movies</NavLink>
        <NavLink to={Path.Search}>Search</NavLink>
      </nav>
        <Theme/>
    </div>
  )
}