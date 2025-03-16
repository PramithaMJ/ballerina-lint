import * as vscode from "vscode";
import { ballerinaBestPractices } from "../rules";

export function checkDocument(
  document: vscode.TextDocument,
  diagnosticCollection: vscode.DiagnosticCollection
) {
  if (document.languageId !== "ballerina") {
    return;
  }

  let diagnostics: vscode.Diagnostic[] = [];

  ballerinaBestPractices.forEach((rule) => {
    let match;
    while ((match = rule.pattern.exec(document.getText())) !== null) {
      let diagnostic = new vscode.Diagnostic(
        new vscode.Range(
          document.positionAt(match.index),
          document.positionAt(match.index + match[0].length)
        ),
        rule.message,
        vscode.DiagnosticSeverity.Warning
      );
      diagnostics.push(diagnostic);
    }
  });

  diagnosticCollection.set(document.uri, diagnostics);
}
