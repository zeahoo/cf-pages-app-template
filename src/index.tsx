import { Hono } from "hono";
import { hc } from "hono/client";
import demo from "./api/demo";
import { customLogger } from "./middlware/customLogger";

const app = new Hono();

app.use(customLogger);

app.get("/", (c) => {
  return c.html(
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link
          rel="stylesheet"
          href="https://cdn.simplecss.org/simple.min.css"
        />
        {import.meta.env.PROD ? (
          <script type="module" src="/static/client.js" />
        ) : (
          <script type="module" src="/src/client.tsx" />
        )}
      </head>
      <body>
        <div id="root" />
      </body>
    </html>
  );
});

const route = app.route("/demo", demo);

export type AppType = typeof route;

export const client = hc<AppType>("/");

export default route;
