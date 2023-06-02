// import std server
import { serve } from 'https://deno.land/std@0.187.0/http/server.ts'
// import Hono
import { Hono } from 'https://deno.land/x/hono@v3.2.0-rc.3/mod.ts'
import { serveStatic } from 'https://deno.land/x/hono@v3.2.0-rc.3/middleware.ts'

// new Hono instance
const app = new Hono()

app.get(
  '/github',
  (context) => {
    context.response.redirect('https://github.com/Liberluna/liberluna.github.io/')
  }
)

app.use(
  serveStatic({
    root: './dist',
  })
)

serve(app.fetch)
