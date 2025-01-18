import { createMiddleware } from 'hono/factory'

export const customLogger = createMiddleware(async (c, next) => {
  console.log(`[${c.req.method}] ${c.req.url} ->`)
  await next()
  console.log(`<- [${c.req.method}] ${c.req.url}`)
});