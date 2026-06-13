import s from "./Search.module.css"
import { SearchInput } from "@/shared/ui/SearchInput/SearchInput.tsx"
import { useLazyGetSearchKeywordQuery } from "@/entities/api/cardsApi.ts"
import { type ChangeEvent, useEffect, useState } from "react"
import { getImageUrl } from "@/app/baseApi/baseImageApi.ts"
import { Btn } from "@/shared/ui/Btn"
import { useSearchParams } from "react-router"
import remove from "./../../assets/img/remove.svg"
import { Pagination } from "@/shared/ui/Pagination/Pagination.tsx"
import { Skeletons } from "@/shared/ui/Skeletons/Skeletons.tsx"

export const Search = () => {
  const [params, setParams] = useSearchParams()
  const query = params.get("query") ?? ""
  const [search, setSearch] = useState(query)
  const [currentPage, setCurrentPage] = useState(1)
  const [trigger, { data, isLoading, isFetching }] = useLazyGetSearchKeywordQuery()

  const searchMovies = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }
  const sendTitle = () => {
    if (search.trim()) {
      setParams({ query: search })
      trigger({ search })
    } else {
      setParams({})
    }
  }
  const deleteTitle = () => {
    if (search) {
      setParams({})
      setSearch("")
      trigger({ search: "" })
    }
  }

  useEffect(() => {
    if (query) trigger({ search })
  }, [])

  useEffect(() => {
    trigger({ search, page: currentPage })
  }, [currentPage])

  return (
    <div className={s.container}>
      <h1 className={s.searchTitle}>Search results</h1>
      <div className={s.inputButton}>
        <div className={s.input}>
          <SearchInput query={search} changeHandler={searchMovies} />
          <Btn onClick={deleteTitle} className={!search ? s.hidden : s.show}>
            <img src={remove}></img>
          </Btn>
        </div>
        <Btn onClick={sendTitle} className={!search ? s.disabled : s.button} disabled={!search}>
          Send
        </Btn>
      </div>
      {!query && <p className={s.title}>Enter a movie title to start searching</p>}
      <div className={s.containerCardS}>
        {query && data?.results?.length === 0 && (
          <div>
            <h4 className={s.result}>Results for "{search}"</h4>
            <p className={s.title}>No matches for "{search}"</p>
          </div>
        )}
        <div className={s.paginationConteiner}>
          {!isLoading && isFetching ? (
            <Skeletons />
          ) : (
            data?.results &&
            data?.results.map((keyWord) => (
              <ul key={keyWord.id}>
                <li className={s.cart}>
                  <div className={s.imgWrap}>
                    <img src={getImageUrl(keyWord.poster_path, "w500")} className={s.img} />
                    <p className={s.noposter}>No poster</p>
                  </div>
                </li>
                {keyWord.name}
              </ul>
            ))
          )}
        </div>
        <div className={s.pagination}>
          <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} pagesCount={data?.total_pages || 1} />
        </div>
      </div>
    </div>
  )
}
