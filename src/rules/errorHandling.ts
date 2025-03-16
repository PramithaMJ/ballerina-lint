export const errorHandlingRules = [
  {
    pattern: /\breturn\s+error\b/g,
    message: "Do not return raw errors. Wrap them in error types.",
    fix: "Use 'return error(<message>)' instead.",
  },
  {
    pattern: /\bpanic\b/g,
    message: "Use 'check' instead of 'panic' where possible.",
    fix: "Refactor to use 'check' instead of 'panic'.",
  },
];
