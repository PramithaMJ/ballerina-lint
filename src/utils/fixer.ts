import * as vscode from "vscode";
// Change this import
import { ballerinaBestPractices, BallerinaRule } from "../rules/index";

export function applyFix(
  editor: vscode.TextEditor,
  diagnostic: vscode.Diagnostic
) {
  const edit = new vscode.WorkspaceEdit();
  // Add type annotation for rule
  ballerinaBestPractices.forEach((rule: { message: string; fix: string }) => {
    if (diagnostic.message.includes(rule.message)) {
      edit.replace(editor.document.uri, diagnostic.range, rule.fix);
    }
  });

  return vscode.workspace.applyEdit(edit);
}
