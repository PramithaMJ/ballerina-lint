import { BallerinaRule } from "./types";

export const configurationRules: BallerinaRule[] = [
  {
    pattern: /configurable\s+(?:string|int|float|decimal|boolean)\s+\w*(?:password|secret|key|token|credential)\w*\s*=\s*"[^"]+"/gi,
    message: "Don't hardcode sensitive configuration values",
    fix: "Move sensitive configuration to a separate file that is not committed to version control."
  },
  {
    pattern: /configurable\s+(?:string|int|float|decimal|boolean)\s+\w+\s*=\s*\?/g,
    message: "Provide default values for non-sensitive configurable variables",
    fix: "Add a sensible default value instead of using '?'."
  },
  {
    pattern: /configurable\s+(?:string|int|float|decimal|boolean)\s+(?:val|var|param|prop|config|cfg)\b/g,
    message: "Use descriptive names for configurable variables",
    fix: "Rename to a more descriptive name that explains the purpose of the configuration."
  }
];