import { BallerinaRule } from "./types";

export const returnValueRules: BallerinaRule[] = [
  {
    pattern: /function\s+\w+\([^)]*\)\s+returns\s+\w+\s*{[\s\n]*.*\s*if\s+[^{]+\s*{\s*return\s+[^;]+;\s*}\s*else\s*{\s*return\s+[^;]+;\s*}/g,
    message: "Use early returns to avoid nested if statements.",
    fix: "Return early to reduce nesting and improve readability.",
  },
  {
    pattern: /\w+\s*\|\s*error\s+\w+\s*=/g,
    message: "Avoid T|error in variable declarations. Use check instead.",
    fix: "Use 'check' and add error to the return type of the function.",
  },
  {
    pattern: /\bpanic\b/g,
    message: "Avoid unnecessary usage of panic. Return errors instead.",
    fix: "Return errors and use 'check' instead of panicking.",
  }
];