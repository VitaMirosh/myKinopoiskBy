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

export type DetailsResponse = {
  backdrop_path: string
  belongs_to_collection: Belongs[]
  genres: GenreItem[]
  homepage: string
  id: number
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  vote_average: number
  runtime: number
}
type Cast = {
  adult: boolean
  gender: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: string
  cast_id: number
  character: string
  credit_id: string
  order: number
}
type Crew = {
  name: string
  job: string
}
export type CreditsResponse = {
  id: number
  cast: Cast[]
  crew: Crew[]
}
