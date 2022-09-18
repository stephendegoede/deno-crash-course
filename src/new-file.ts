import { copy } from "https://deno.land/std/streams/conversion.ts";

const file = await Deno.open("greet.txt");

await copy(file, Deno.stdout);
file.close();
