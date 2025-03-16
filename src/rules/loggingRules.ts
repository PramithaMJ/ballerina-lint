export const loggingRules = [
  {
    pattern: /\bprint\(/g,
    message: "Use 'log:printInfo()' instead of 'print()' for proper logging.",
    fix: "Replace 'print()' with 'log:printInfo()'.",
  },
  {
    pattern: /\blog:printDebug\(/g,
    message: "Avoid using 'log:printDebug()' in production code.",
    fix: "Remove or replace with 'log:printInfo()' if necessary.",
  },
  {
    pattern: /\blog:printError\(\s*".*"\s*\)/g,
    message: "Use structured error logging with error objects.",
    fix: "Use 'log:printError(\"Message\", err)' instead.",
  },
];
