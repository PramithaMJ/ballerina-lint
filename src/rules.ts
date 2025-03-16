import * as vscode from "vscode";
import { ballerinaBestPractices } from "./rules/index";
import { DiagnosticInfo } from "./utils/diagnostics";

export function executeAllRules(
  document: vscode.TextDocument
): DiagnosticInfo[] {
  if (document.languageId !== "ballerina") {
    return [];
  }

  const text = document.getText();
  const violations: DiagnosticInfo[] = [];

  ballerinaBestPractices.forEach((rule) => {
    const regex = new RegExp(rule.pattern, "g");
    let match;

    while ((match = regex.exec(text)) !== null) {
      const range = new vscode.Range(
        document.positionAt(match.index),
        document.positionAt(match.index + match[0].length)
      );

      violations.push({
        range: range,
        message: rule.message,
        severity: vscode.DiagnosticSeverity.Warning,
        code: rule.pattern.toString(),
      });
    }
  });

  return violations;
}
