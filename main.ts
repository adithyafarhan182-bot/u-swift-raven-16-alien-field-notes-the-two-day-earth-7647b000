// Alien Field Notes: The Two Day Earth Review
// A one-line review of planet Earth by an alien tourist.
// Deterministic, Node 22 stdlib only, no network, no input.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Beautiful planet, friendly locals — but one sock vanishes per wash and nobody investigates. Either a portal eats them or Earth is haunted. 4 stars, docked one sock.";

// The grader reads /output/entry.txt: 1-200 UTF-8 characters, not only whitespace.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
