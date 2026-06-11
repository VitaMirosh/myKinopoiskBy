export type MoviesResponse = {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
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
  page: number
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
export type Belongs = {
  id: number
  name: string
  poster_path: string
  backdrop_path: string
}

export type Companies = {
  id: number
  logo_path: string
  name: string
  origin_country: string
}
export type Countries = {
  iso_3166_1: string
  name: string
}
export type DetailsResponse = {
  backdrop_path: string
  belongs_to_collection: Belongs[]
  genres: GenreItem[]
  homepage: string
  id: number
  imdb_id: string
  origin_country: string[]
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: Companies[]
  production_countries: Countries[]
  release_date: string
  title: string
  vote_average: number
  vote_count: number
  runtime: number
}
