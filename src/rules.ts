import * as vscode from "vscode";
import { ballerinaBestPractices, BallerinaRule } from "./rules/index";
import { DiagnosticInfo } from "./utils/diagnostics";

export function executeAllRules(
  document: vscode.TextDocument
): DiagnosticInfo[] {
  if (document.languageId !== "ballerina") {
    return [];
  }

  const text = document.getText();
  const violations: DiagnosticInfo[] = [];

  ballerinaBestPractices.forEach((rule: BallerinaRule) => {
    const regex = new RegExp(rule.pattern);
    let match;

    // Clone the regex to ensure we can reset it
    const clonedRegex = new RegExp(rule.pattern.source, rule.pattern.flags);

    while ((match = clonedRegex.exec(text)) !== null) {
      const range = new vscode.Range(
        document.positionAt(match.index),
        document.positionAt(match.index + match[0].length)
      );

      violations.push({
        range: range,
        message: rule.message,
        severity: vscode.DiagnosticSeverity.Warning,
        code: "ballerina-best-practice", // Add a consistent code for all best practices
      });

      // Prevent infinite loops for zero-length matches
      if (match.index === clonedRegex.lastIndex) {
        clonedRegex.lastIndex++;
      }
    }
  });

  return violations;
}
