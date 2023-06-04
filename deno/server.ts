import { serve } from 'https://deno.land/std@0.187.0/http/server.ts'
import { Hono } from 'https://deno.land/x/hono@v3.2.0-rc.3/mod.ts'
import { serveStatic } from 'https://deno.land/x/hono@v3.2.0-rc.3/middleware.ts'

const app = new Hono()

app.get( '/*', serveStatic({ root: './dist', }) )

app.use( '/private/*', (req, res) => {
  if (req.url === '/private' && req.method === 'POST') {
    res.status = 200;
    res.body = "world";
  }
})

serve(app.fetch)
