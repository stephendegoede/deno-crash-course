import { Server } from "https://deno.land/std/http/server.ts";

const port = 8000;

const handler = (request: Request) => {
  const body = `Hello World!`;

  return new Response(body, { status: 200 });
};

const server = new Server({ port, handler });

console.log("server listening on http://localhost:8000");

await server.listenAndServe();
