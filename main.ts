// The Funniest Toaster Error Message — make.fun entry.
//
// Writes one deadpan error message from a kitchen toaster to
// /output/entry.txt. The message is a fixed string, so the output is
// byte-identical on every run: no randomness, no clock, no network,
// no input read. Run with Node 22.18+ (the grader runs Node 22.23.4):
//   node main.ts

import { mkdirSync, writeFileSync } from "node:fs";

// One line, 76 characters: a toaster that reports its bread has
// unionized, in the flat tone of an appliance that has given up
// negotiating on its own and is passing the problem to its owner.
const MESSAGE =
  "ERROR: Toasting failed. The bread has unionized. Negotiations begin at dawn.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", MESSAGE, "utf8");
