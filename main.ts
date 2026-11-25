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

// The bounty rules: the entry must be a single line of 1-120 chars.
// Validate the fixed message against those rules so a future typo
// fails loudly here instead of silently producing a bad entry.
function validate(message: string): void {
  if (message.length < 1 || message.length > 120) {
    throw new Error(`entry must be 1-120 chars, got ${message.length}`);
  }
  if (message.includes("\n") || message.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

validate(MESSAGE);
mkdirSync("/output", { recursive: true });
// Write the message as explicit UTF-8 bytes (no trailing newline):
// the entry is exactly one line, so the file content is the message
// and nothing else. Assert the known length so any accidental edit
// to the text is caught before it can change the output bytes.
if (MESSAGE.length !== 76) {
  throw new Error(`unexpected entry length ${MESSAGE.length}, expected 76`);
}
writeFileSync("/output/entry.txt", Buffer.from(MESSAGE, "utf8"));
