import { BallerinaRule } from "./types";

export const formattingRules: BallerinaRule[] = [
  {
    pattern: /import\s+ballerina\/\w+;(?:[\r\n]+import\s+(?!ballerina\/)[^;]+;)+(?:[\r\n]+import\s+ballerina\/\w+;)/g,
    message: "Sort imports properly: 1) same package, 2) ballerina/ballerinax modules, 3) third-party modules",
    fix: "Reorder imports following the Ballerina convention."
  },
  {
    pattern: /import\s+[^;]+;\s*import\s+/g,
    message: "Add line breaks between import statements for better readability",
    fix: "Add a line break between import statements."
  },
  {
    pattern: /[\r\n]{3,}/g,
    message: "Avoid using more than one blank line",
    fix: "Reduce multiple blank lines to a single blank line."
  },
  {
    pattern: /[\t]+/g,
    message: "Use spaces instead of tabs for indentation",
    fix: "Replace tabs with 4 spaces."
  },
  {
    pattern: /.{121,}/g,
    message: "Line too long (exceeds 120 characters)",
    fix: "Break the line to maintain the 120-character limit."
  }
];