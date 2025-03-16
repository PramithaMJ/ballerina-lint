import * as vscode from "vscode";
import { parseDocument } from "./utils/parser";

let diagnosticCollection: vscode.DiagnosticCollection;

/**
 * Activates the VS Code extension.
 * @param context The VS Code extension context.
 */
export function activate(context: vscode.ExtensionContext) {
  diagnosticCollection = vscode.languages.createDiagnosticCollection(
    "ballerinaBestPractices"
  );

  if (vscode.window.activeTextEditor) {
    updateDiagnostics(vscode.window.activeTextEditor.document);
  }

  context.subscriptions.push(
    vscode.workspace.onDidChangeTextDocument((event) =>
      updateDiagnostics(event.document)
    ),
    vscode.workspace.onDidOpenTextDocument(updateDiagnostics),
    vscode.workspace.onDidCloseTextDocument((document) =>
      diagnosticCollection.delete(document.uri)
    )
  );
}

/**
 * Deactivates the extension.
 */
export function deactivate() {
  diagnosticCollection.clear();
  diagnosticCollection.dispose();
}

/**
 * Updates diagnostics for the given document.
 * @param document The active text document in VS Code.
 */
function updateDiagnostics(document: vscode.TextDocument) {
  if (document.languageId !== "ballerina") {
    return;
  }

  const diagnostics = parseDocument(document);
  diagnosticCollection.set(document.uri, diagnostics);
}
