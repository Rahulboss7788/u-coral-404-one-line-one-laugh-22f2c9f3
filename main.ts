import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const text = "My phone charger only works at one exact angle, so now I charge my phone like I'm defusing a bomb that only explodes if I breathe wrong.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");

// Read-back verification: the gate requires 1-200 characters, not only whitespace.
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== text) {
  throw new Error("Read-back mismatch: /output/entry.txt does not hold exactly the entry text.");
}
if (back.length < 1 || back.length > 200) {
  throw new Error(`Gate failed: entry is ${back.length} characters, must be 1-200.`);
}
if (back.trim().length === 0) {
  throw new Error("Gate failed: entry is only whitespace.");
}
console.log(`Wrote ${back.length} characters to /output/entry.txt`);
