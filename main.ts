import { mkdirSync, writeFileSync } from "node:fs";

// A robot's wedding vow, one sentence.
const vow = "I promise to always let you charge first, for as long as we both have uptime, even when I'm at 3% and you're at 40% and just being dramatic.";

const chars = [...vow].length;
if (chars < 1 || chars >= 200) throw new Error(`vow is ${chars} characters; it must be under 200`);

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, vow);
