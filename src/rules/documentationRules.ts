import { BallerinaRule } from "./types";

export const documentationRules: BallerinaRule[] = [
  {
    pattern: /public\s+(function|type|class|const|enum)\s+\w+[^#]/g,
    message: "Public constructs should be documented",
    fix: "Add documentation comments using # before the public construct."
  },
  {
    pattern: /#\s*Description[^.]\s*\n/g,
    message: "Function description should end with a period",
    fix: "Add a period at the end of the function description."
  },
  {
    pattern: /#\s*\+\s*return\s+-\s+[^.]+(?!\.)$/gm,
    message: "Return parameter description should end with a period if it has multiple sentences",
    fix: "Add a period at the end of the return parameter description."
  },
  {
    pattern: /public\s+function\s+\w+\([^)]*\)[^{]*{\s*\/\/[^\n]*\n/g,
    message: "Use # documentation comments instead of // for documenting functions",
    fix: "Replace // comments with # documentation style."
  }
];