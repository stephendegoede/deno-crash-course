const encoder = new TextEncoder();

const greetText = encoder.encode("Hello World\nMy Name is StephenDG");

await Deno.writeFile("greet.txt", greetText);
