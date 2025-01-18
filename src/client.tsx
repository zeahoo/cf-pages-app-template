import { hc } from "hono/client";
import { render, useEffect, useState } from "hono/jsx/dom";
import type { AppType } from ".";
const client = hc<AppType>("/");

function App() {
  return (
    <>
      <h1>This is a demo page</h1>
    </>
  );
}
const root = document.getElementById("root")!;
render(<App />, root);
