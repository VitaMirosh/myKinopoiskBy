import { Cards } from "@/shared/ui/cards/Cards"
import { useAppSelector } from "@/app/hooks/useSelectorType.ts"
import { selectedFavoriteMovie } from "@/app/app-slice/app-slice.ts"

export const Favorites = () => {
  const favorites = useAppSelector(selectedFavoriteMovie)

  return <Cards filtered={favorites} />
}
