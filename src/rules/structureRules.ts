export const structureRules = [
  {
    pattern: /\bpublic\s+function\s+\w+\s*\(\)/g,
    message: "Public functions should have meaningful parameter names.",
    fix: "Ensure the function parameters are descriptive.",
  },
  {
    pattern: /\bservice\s+on\s+new\s+http:Listener\(\d+\)/g,
    message: "Avoid hardcoding port numbers in services.",
    fix: "Use configurable values instead of hardcoded numbers.",
  },
  {
    pattern: /\bmodule-level\s+variables\s+are\s+not\s+recommended\b/g,
    message: "Avoid unnecessary global variables; use service objects instead.",
    fix: "Refactor to use encapsulated services or records.",
  },
];
