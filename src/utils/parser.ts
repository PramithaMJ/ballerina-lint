import * as vscode from "vscode";
import { ballerinaBestPractices } from "../rules/index";

/**
 * Parses the Ballerina document and applies best practice rules.
 * @param document The active text document in VS Code.
 */
export function parseDocument(document: vscode.TextDocument) {
  const text = document.getText();
  const diagnostics: vscode.Diagnostic[] = [];

  ballerinaBestPractices.forEach((rule) => {
    let match;
    const regex = new RegExp(rule.pattern, "g");

    while ((match = regex.exec(text)) !== null) {
      const startPos = document.positionAt(match.index);
      const endPos = document.positionAt(match.index + match[0].length);
      const range = new vscode.Range(startPos, endPos);

      const diagnostic = new vscode.Diagnostic(
        range,
        rule.message,
        vscode.DiagnosticSeverity.Warning
      );
      diagnostics.push(diagnostic);
    }
  });

  return diagnostics;
}
