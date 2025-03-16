import * as vscode from "vscode";
import { ballerinaBestPractices } from "../rules";

export function applyFix(
  editor: vscode.TextEditor,
  diagnostic: vscode.Diagnostic
) {
  const edit = new vscode.WorkspaceEdit();
  ballerinaBestPractices.forEach((rule) => {
    if (diagnostic.message.includes(rule.message)) {
      edit.replace(editor.document.uri, diagnostic.range, rule.fix);
    }
  });

  return vscode.workspace.applyEdit(edit);
}
