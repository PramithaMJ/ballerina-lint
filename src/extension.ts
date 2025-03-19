import * as vscode from "vscode";
import * as path from "path";
import { DiagnosticInfo, createDiagnostic } from "./utils/diagnostics";
import { executeAllRules } from "./rules";
import { IssueTreeDataProvider } from "./views/issueTreeDataProvider";
import { registerCodeActions } from "./utils/fixer";

let diagnosticCollection: vscode.DiagnosticCollection;

const outputChannel = vscode.window.createOutputChannel("Ballerina Lint");

/**
 * Activates the VS Code extension.
 * @param context The VS Code extension context.
 */
export function activate(context: vscode.ExtensionContext) {
  console.log("Ballerina Lint extension is now active");
  outputChannel.appendLine("Ballerina Lint extension activated");

  // Create diagnostic collection
  diagnosticCollection =
    vscode.languages.createDiagnosticCollection("ballerina-lint");
  context.subscriptions.push(diagnosticCollection);

  // Register code actions
  registerCodeActions(context);

  // Create issue tree data provider
  const issueTreeDataProvider = new IssueTreeDataProvider(diagnosticCollection);
  vscode.window.registerTreeDataProvider(
    "ballerina-lint-issues",
    issueTreeDataProvider
  );

  // Function to analyze the current document
  const analyzeDocument = (document: vscode.TextDocument) => {
    outputChannel.appendLine(`Analyzing document: ${document.fileName}`);
    if (document.languageId === "ballerina") {
      outputChannel.appendLine("Document is a Ballerina file");
      diagnosticCollection.delete(document.uri);

      const diagnostics: vscode.Diagnostic[] = [];
      const violations = executeAllRules(document);

      outputChannel.appendLine(`Found ${violations.length} issues`);
      violations.forEach((violation) => {
        diagnostics.push(createDiagnostic(violation));
      });

      diagnosticCollection.set(document.uri, diagnostics);

      // Update the tree view
      issueTreeDataProvider.refresh();
    }
  };

  // Add inside activate function
  context.subscriptions.push(
    vscode.commands.registerCommand("ballerina-lint.showIssuesPanel", () => {
      vscode.commands.executeCommand("workbench.view.extension.ballerina-lint");
    })
  );

  // Register commands
  context.subscriptions.push(
    vscode.commands.registerCommand("ballerina-lint.refreshIssues", () => {
      const editor = vscode.window.activeTextEditor;
      if (editor) {
        analyzeDocument(editor.document);
      }
    })
  );

  // Analyze document on open and save
  context.subscriptions.push(
    vscode.workspace.onDidOpenTextDocument(analyzeDocument),
    vscode.workspace.onDidSaveTextDocument(analyzeDocument),
    vscode.window.onDidChangeActiveTextEditor((editor) => {
      if (editor) {
        analyzeDocument(editor.document);
      }
    })
  );

  // Analyze currently open document if exists
  if (vscode.window.activeTextEditor) {
    analyzeDocument(vscode.window.activeTextEditor.document);
  }
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
