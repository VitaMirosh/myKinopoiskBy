/// <reference types="node" />

import type { IncomingMessage, ServerResponse } from "http"

export default function handler(req: IncomingMessage, res: ServerResponse) {
  res.setHeader("Content-Type", "application/json")
  res.statusCode = 200

  res.end(
    JSON.stringify({
      token: process.env.TMDB_API_KEY,
    }),
  )
}
