import { BallerinaRule } from "./types";

export const nilHandlingRules: BallerinaRule[] = [
  {
    pattern: /""\s*\/\/\s*.*is not specified/g,
    message:
      "Use nil (()) to represent optional values instead of empty strings.",
    fix: "Replace with string? fieldName = ();",
  },
  {
    pattern: /return\s+(-1|0|\[\]|""|{})\s*;\s*(\/\/|$)/g,
    message:
      "Return nil to indicate unavailability of value instead of sentinel values.",
    fix: "Use 'returns T?' in function signature and 'return ();' for absence of value.",
  },
  {
    pattern: /<\w+>\s*\w+\s*;/g,
    message:
      "Avoid unnecessary type casts. Use the Elvis operator or error handling.",
    fix: "Use 'variable ?: defaultValue' or 'check variable.ensureType(Type)'",
  },
];
