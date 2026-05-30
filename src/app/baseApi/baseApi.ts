import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const baseApi = createApi({
  reducerPath: "api",
  tagTypes: ["PopularMovies"],
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (headers) => {
      const tmdbToken = import.meta.env.VITE_API_KEY

      if (tmdbToken) {
        headers.set("Authorization", `Bearer ${tmdbToken}`)
      }

      return headers
    },
  }),
  endpoints: () => ({}),
})
