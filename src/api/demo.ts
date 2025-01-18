import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { z } from "zod";

interface Env {
  DATABASE_URL: string;
}

export interface Book {
  id: string;
  title: string;
  author: string;
}

const demo = new Hono<{ Bindings: Env }>()

demo.get("/", (c) => {
  return c.json({
    message: "This is a demo path",
  });
});

export default demo;
