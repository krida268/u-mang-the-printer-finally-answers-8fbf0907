// The Printer Finally Answers — hand-in program (Node 22, standard library only).
// Writes one line, the office printer's comeback, to /output/entry.txt.
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The printer speaks: weary, literal, faintly passive-aggressive —
// a device that has counted every sheet it ever fed, answering the
// thump it gets for the one sheet that jammed.
const entry =
  "I've fed you 48,210 sheets without a single thank-you, and you thump me for the one that jammed.";

mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), entry, 'utf8');
