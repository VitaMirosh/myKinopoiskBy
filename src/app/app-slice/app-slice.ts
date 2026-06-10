import { createSlice } from "@reduxjs/toolkit"
import type { MoviesResponse } from "@/entities/model/types/baseResponse.ts"

const savedTheme = (localStorage.getItem("themeMode") as ThemeMode) ?? "light"
const savedfavorite = JSON.parse(localStorage.getItem("movie") || "[]") as MoviesResponse[]

export const appSlice = createSlice({
  name: "app",
  initialState: {
    themeMode: savedTheme,
    movie: savedfavorite,
  },
  selectors: {
    selectedThemeMode: (state) => state.themeMode,
    selectedFavoriteMovie: (state) => state.movie,
  },
  reducers: (create) => ({
    changeThemeModeAC: create.reducer<{ themeMode: ThemeMode }>((state, action) => {
      state.themeMode = action.payload.themeMode
      localStorage.setItem("themeMode", action.payload.themeMode)
    }),
    toggleFavoriteMovieAC: create.reducer<{ movie: MoviesResponse }>((state, action) => {
      const exists = state.movie.some((m) => m.id === action.payload.movie.id)
      if (exists) {
        state.movie = state.movie.filter((m) => m.id !== action.payload.movie.id)
      } else {
        state.movie.push(action.payload.movie)
      }
      localStorage.setItem("movie", JSON.stringify(state.movie))
    }),
  }),
})
export const { selectedThemeMode, selectedFavoriteMovie } = appSlice.selectors
export const { changeThemeModeAC, toggleFavoriteMovieAC } = appSlice.actions
export const appReducer = appSlice.reducer

export type ThemeMode = "light" | "dark"
