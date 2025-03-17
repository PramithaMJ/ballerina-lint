import * as vscode from "vscode";
// Change this import
import { ballerinaBestPractices, BallerinaRule } from "../rules/index";
export interface DiagnosticInfo {
  range: vscode.Range;
  message: string;
  severity: vscode.DiagnosticSeverity;
  code?: string;
}

export function createDiagnostic(info: DiagnosticInfo): vscode.Diagnostic {
  const diagnostic = new vscode.Diagnostic(
    info.range,
    info.message,
    info.severity
  );

  if (info.code) {
    diagnostic.code = info.code;
  }

  return diagnostic;
}

export function checkDocument(
  document: vscode.TextDocument,
  diagnosticCollection: vscode.DiagnosticCollection
) {
  if (document.languageId !== "ballerina") {
    return;
  }

  let diagnostics: vscode.Diagnostic[] = [];

  // Add type annotation for rule
  ballerinaBestPractices.forEach(
    (rule: { pattern: RegExp; message: string }) => {
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
    }
  );

  diagnosticCollection.set(document.uri, diagnostics);
}
