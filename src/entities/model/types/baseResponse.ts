export type MoviesResponse = {
  adult?: boolean
  backdrop_path: string
  genre_ids: number[]
  id?: number
  original_language: string
  original_title: string
  overview: string
  popularity?: number
  poster_path: string
  release_date: string
  title: string
  video?: boolean
  vote_average?: number
  vote_count?: number
}
export type KewordResponse = {
  adult: boolean
  backdrop_path: string
  id: number
  name: string
  original_language: string
  original_name: string
  overview: string
  poster_path: string
}

export type BaseResponse<T> = {
  page?: number
  results: T[]
  total_pages: number
  total_results: number
}

export type GenreItem = {
  id: number
  name: string
}

export type GenreResponse = {
  genres: GenreItem[]
}
