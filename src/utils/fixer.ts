import * as vscode from "vscode";
import { ballerinaBestPractices, BallerinaRule } from "../rules/index";

export function applyFix(
  editor: vscode.TextEditor,
  diagnostic: vscode.Diagnostic
) {
  const edit = new vscode.WorkspaceEdit();
  const matchedRule = findMatchingRule(diagnostic);

  if (matchedRule) {
    // Apply the fix from the matched rule
    edit.replace(
      editor.document.uri,
      diagnostic.range,
      generateFixedCode(editor.document, diagnostic.range, matchedRule)
    );
    return vscode.workspace.applyEdit(edit);
  }

  return Promise.resolve(false);
}

function findMatchingRule(
  diagnostic: vscode.Diagnostic
): BallerinaRule | undefined {
  return ballerinaBestPractices.find((rule) =>
    diagnostic.message.includes(rule.message)
  );
}

function generateFixedCode(
  document: vscode.TextDocument,
  range: vscode.Range,
  rule: BallerinaRule
): string {
  // Get the original code
  const originalCode = document.getText(range);

  // For simple replacements, just return the fix instruction
  // For more complex cases, we would need specific handling logic

  // If the fix contains actual code to use (rather than instructions)
  if (rule.fix.startsWith("Use") || rule.fix.startsWith("Replace")) {
    // This is an instruction for the user, not actual code
    return originalCode;
  }

  return rule.fix;
}

export function registerCodeActions(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.languages.registerCodeActionsProvider("ballerina", {
      provideCodeActions(document, range, context) {
        const actions: vscode.CodeAction[] = [];

        for (const diagnostic of context.diagnostics) {
          if (diagnostic.code === "ballerina-best-practice") {
            const matchedRule = findMatchingRule(diagnostic);

            if (matchedRule) {
              const action = new vscode.CodeAction(
                `Fix: ${matchedRule.fix}`,
                vscode.CodeActionKind.QuickFix
              );

              action.command = {
                command: "ballerina-lint.applyFix",
                title: "Apply fix",
                arguments: [document, diagnostic],
              };

              action.diagnostics = [diagnostic];
              actions.push(action);
            }
          }
        }

        return actions;
      },
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand(
      "ballerina-lint.applyFix",
      (document: vscode.TextDocument, diagnostic: vscode.Diagnostic) => {
        const editor = vscode.window.visibleTextEditors.find(
          (e) => e.document === document
        );
        if (editor) {
          applyFix(editor, diagnostic);
        }
      }
    )
  );
}
