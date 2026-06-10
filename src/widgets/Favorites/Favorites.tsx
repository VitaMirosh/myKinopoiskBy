import { Cards } from "@/shared/ui/cards/Cards"
import { useAppSelector } from "@/app/hooks/useSelectorType.ts"
import { selectedFavoriteMovie } from "@/app/app-slice/app-slice.ts"
import s from "./Favorite.module.css"

export const Favorites = () => {
  const favorites = useAppSelector(selectedFavoriteMovie)

  return (
    <div className={s.container}>
      <h2 className={s.title}>Favorites</h2>
      {favorites.length > 0 ? (
        <Cards filtered={favorites} />
      ) : (
        <div className={s.text}>Add movies to favorites to see them on this page.</div>
      )}
    </div>
  )
}
