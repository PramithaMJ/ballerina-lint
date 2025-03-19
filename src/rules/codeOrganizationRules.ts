import { BallerinaRule } from "./types";

export const codeOrganizationRules: BallerinaRule[] = [
  {
    pattern: /.{121,}/g,
    message: "Line exceeds 120 characters. Consider wrapping or refactoring.",
    fix: "Split the line or refactor the code to improve readability.",
  },
  {
    pattern: /\/\/\s+[A-Z][^.!?]*[.!?]/g,
    message: "Avoid unnecessary comments that repeat what the code already says.",
    fix: "Remove or improve the comment to provide additional context.",
  },
  {
    pattern: /\w+\s+\w+\s*=\s*[^;]+;\s*return\s+\w+;/g,
    message: "Avoid redundant variables used only once.",
    fix: "Return the expression directly instead of storing it in a variable.",
  }
];