import { BallerinaRule } from "./types";

export const typeHandlingRules: BallerinaRule[] = [
  {
    pattern: /\bjson\b\s+\w+/g,
    message: "Use application-defined types instead of json for better type safety.",
    fix: "Define a record type that represents your data structure.",
  },
  {
    pattern: /\bany\b\s+\w+/g,
    message: "Avoid using 'any' type. Use more specific types for better safety.",
    fix: "Define a specific type or use a union type instead.",
  },
  {
    pattern: /const\s+\w+\s+\w+\s*=/g,
    message: "Type is not required for constants, it can be inferred.",
    fix: "Remove the explicit type for constants.",
  },
  {
    pattern: /\bforeach\s+\w+\s+\w+\s+in\s+\w+\s*\{/g,
    message: "Consider using query expressions for iterations with filtering/mapping.",
    fix: "Use 'from var item in items where/select' instead of foreach.",
  }
];