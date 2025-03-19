import { BallerinaRule } from "./types";

export const expressionStyleRules: BallerinaRule[] = [
  {
    pattern:
      /function\s+\w+\([^)]*\)\s+returns\s+\w+\s*{[\s\n]*return\s+[^;]+;[\s\n]*}/g,
    message: "Consider using expression-bodied functions for simple returns.",
    fix: "Replace with 'function name() returns type => expression;'",
  },
  {
    pattern: /if\s*\([^)]+\)\s*{/g,
    message: "Avoid unnecessary parentheses in if statements.",
    fix: "Remove parentheses: 'if condition {'",
  },
  {
    pattern: /\{\s*\w+\s*:\s*\w+\s*\}/g,
    message: "Simplify mapping constructor when variable name equals the key.",
    fix: "Use '{fieldName}' instead of '{fieldName: fieldName}'",
  },
  {
    pattern: /\bvar\s+\w+\s*=\s*[^;]+;/g,
    message: "Avoid overuse of var. Use explicit types for clarity.",
    fix: "Specify the type explicitly instead of using var.",
  },
];
