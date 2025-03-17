export const loopRules = [
  {
    pattern: /\bwhile\s*\(true\)/g,
    message: "Avoid infinite loops. Use conditions that ensure termination.",
    fix: "Refactor the loop to have an exit condition.",
  },
  {
    pattern: /\bforeach\s*\(\s*var\s+\w+\s+in\s+\w+\s*\)/g,
    message: "Use explicit types in foreach loops instead of 'var'.",
    fix: "Specify the type explicitly (e.g., 'foreach int x in numbers').",
  },
  {
    pattern:
      /\bfor\s*\(\s*int\s+\w+\s*=\s*\d+;\s*\w+\s*[<>]=?\s*\d+;\s*\w+\+\+\s*\)/g,
    message: "Consider using 'foreach' for better readability and safety.",
    fix: "Use 'foreach' instead of 'for' loops where possible.",
  },
];
