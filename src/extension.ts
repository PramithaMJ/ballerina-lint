import * as vscode from "vscode";
import { parseDocument } from "./utils/parser";

let diagnosticCollection: vscode.DiagnosticCollection;

/**
 * Updates the diagnostics for the given document.
 * @param document The document to analyze
 */
function updateDiagnostics(document: vscode.TextDocument) {
  if (document.languageId === "ballerina") {
    const diagnostics = parseDocument(document);
    diagnosticCollection.set(document.uri, diagnostics);
  }
}

const outputChannel = vscode.window.createOutputChannel("Ballerina Lint");


/**
 * Activates the VS Code extension.
 * @param context The VS Code extension context.
 */
export function activate(context: vscode.ExtensionContext) {
  outputChannel.appendLine("Ballerina Lint extension activated");
  
  // Add this in your updateDiagnostics function
  function updateDiagnostics(document: vscode.TextDocument) {
    outputChannel.appendLine(`Analyzing document: ${document.fileName}`);
    if (document.languageId === "ballerina") {
      outputChannel.appendLine("Document is a Ballerina file");
      const diagnostics = parseDocument(document);
      outputChannel.appendLine(`Found ${diagnostics.length} issues`);
      diagnosticCollection.set(document.uri, diagnostics);
    }
  }

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
    ),
    diagnosticCollection
  );
}

/**
 * Deactivates the extension.
 */
export function deactivate() {
  if (diagnosticCollection) {
    diagnosticCollection.clear();
    diagnosticCollection.dispose();
  }
}
