import { SearchInput } from "@/shared/ui/SearchInput/SearchInput.tsx"
import { Btn } from "@/shared/ui/Btn"
import s from "./Welcome.module.css"
import { useNavigate, useSearchParams } from "react-router"
import type { ChangeEvent } from "react"

export const Welcome = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()
  const query = searchParams.get("query") ?? ""

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value
    if (newQuery) {
      setSearchParams({ query: newQuery })
    } else {
      setSearchParams({})
    }
  }
  const goToSearch = () => {
    if (query.trim()) {
      navigate(`/search?query=${query}`)
    }
  }
  return (
    <div className={s.containerWelcome}>
      <h1 className={s.mainTitle}>Welcome</h1>
      <p className={s.welcomeText}>Browser highlighted title from TMDB</p>
      <div className={s.inputButton}>
        <SearchInput query={query ?? ""} changeHandler={changeHandler} />
        <Btn className={!query ? s.disabled : s.button} onClick={goToSearch} disabled={!query}>
          Search
        </Btn>
      </div>
    </div>
  )
}
