export const namingConventions = [
  {
    pattern: /\bvar\b/g,
    message: "Avoid using 'var'. Use explicit types instead.",
    fix: "Replace 'var' with explicit type (e.g., 'int', 'string').",
  },
  {
    pattern: /\b[A-Z]+(_[A-Z]+)*\b/g,
    message: "Use UPPER_CASE_WITH_UNDERSCORES for constants.",
    fix: "Rename to match constant naming convention.",
  },
  {
    pattern: /\bfunction\s+[a-z]+\d*\b/g,
    message: "Use descriptive function names.",
    fix: "Rename function to be more meaningful.",
  },
];
