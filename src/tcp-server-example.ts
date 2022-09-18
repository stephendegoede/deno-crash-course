import { copy } from "https://deno.land/std@0.156.0/streams/conversion.ts";
const hostname = "0.0.0.0";
const port = 8080;
const listener = Deno.listen({ hostname, port });
console.log(`Listening on ${hostname}:${port}`);
for await (const conn of listener) {
  console.log(conn);
  copy(conn, conn);
}
