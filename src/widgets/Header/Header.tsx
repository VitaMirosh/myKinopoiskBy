import { Path } from "@/shared/lib/constants"
import s from "./Header.module.css"
import { NavLink } from "react-router"
import { Logo } from "@/app/logo"
import { ThemeButton } from "@/shared/ui/theme"
import { useGlobalLoading } from "@/app/utils/useGlobalLoading.ts"
import { Loading } from "@/shared/ui/Loading/Loading.tsx"

export const Header = () => {
  const isGlobalLoading = useGlobalLoading()

  return (
    <div className={s.container}>
      <NavLink to={Path.Main}>
        <Logo />
      </NavLink>
      <nav className={s.navContainer}>
        <NavLink to={Path.Main}>Main</NavLink>
        <NavLink to={Path.Popular}>Category movies</NavLink>
        <NavLink to={Path.FilteredMovies}>Filtered movies</NavLink>
        <NavLink to={Path.Search}>Search</NavLink>
        <NavLink to={Path.Favorites}>Favorites</NavLink>
      </nav>
      {isGlobalLoading && <Loading />}

      <ThemeButton />
    </div>
  )
}
