import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const baseApi = createApi({
  reducerPath: "api",
  tagTypes: ["PopularMovies"],
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: async (headers) => {
      if (!window.__tmdbToken) {
        const res = await fetch("/api/key")
        const data = await res.json()
        window.__tmdbToken = data.token
      }

      headers.set("Authorization", `Bearer ${window.__tmdbToken}`)
      return headers
    },
  }),
  endpoints: () => ({}),
})
