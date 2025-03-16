import * as vscode from 'vscode';

export class IssueItem extends vscode.TreeItem {
  constructor(
    public readonly label: string,
    public readonly collapsibleState: vscode.TreeItemCollapsibleState,
    public readonly diagnostic?: vscode.Diagnostic,
    public readonly file?: vscode.Uri
  ) {
    super(label, collapsibleState);
    
    if (diagnostic) {
      this.description = `Line ${diagnostic.range.start.line + 1}`;
      this.tooltip = diagnostic.message;
      this.command = {
        command: 'vscode.open',
        arguments: [
          file,
          {
            selection: new vscode.Range(
              diagnostic.range.start,
              diagnostic.range.end
            ),
          },
        ],
        title: 'Go to Issue',
      };

      // Set icon based on severity
      switch (diagnostic.severity) {
        case vscode.DiagnosticSeverity.Error:
          this.iconPath = new vscode.ThemeIcon('error');
          break;
        case vscode.DiagnosticSeverity.Warning:
          this.iconPath = new vscode.ThemeIcon('warning');
          break;
        case vscode.DiagnosticSeverity.Information:
          this.iconPath = new vscode.ThemeIcon('info');
          break;
        case vscode.DiagnosticSeverity.Hint:
          this.iconPath = new vscode.ThemeIcon('lightbulb');
          break;
      }
    }
  }
}

export class IssueTreeDataProvider implements vscode.TreeDataProvider<IssueItem> {
  private _onDidChangeTreeData: vscode.EventEmitter<IssueItem | undefined | null | void> = new vscode.EventEmitter<IssueItem | undefined | null | void>();
  readonly onDidChangeTreeData: vscode.Event<IssueItem | undefined | null | void> = this._onDidChangeTreeData.event;

  private diagnosticCollection: vscode.DiagnosticCollection;

  constructor(diagnosticCollection: vscode.DiagnosticCollection) {
    this.diagnosticCollection = diagnosticCollection;
  }

  refresh(): void {
    this._onDidChangeTreeData.fire();
  }

  getTreeItem(element: IssueItem): vscode.TreeItem {
    return element;
  }

  getChildren(element?: IssueItem): Thenable<IssueItem[]> {
    if (!element) {
      // Root level - show files with issues
      const fileItems: IssueItem[] = [];
      this.diagnosticCollection.forEach((uri, diagnostics) => {
        if (diagnostics.length > 0) {
          const fileName = uri.fsPath.split('/').pop() || uri.fsPath;
          fileItems.push(
            new IssueItem(
              fileName,
              vscode.TreeItemCollapsibleState.Collapsed
            )
          );
        }
      });

      if (fileItems.length === 0) {
        return Promise.resolve([
          new IssueItem(
            "No issues found",
            vscode.TreeItemCollapsibleState.None
          )
        ]);
      }
      
      return Promise.resolve(fileItems);
    } else {
      // Show issues for the selected file
      const fileName = element.label;
      const issues: IssueItem[] = [];
      
      this.diagnosticCollection.forEach((uri, diagnostics) => {
        if (uri.fsPath.split('/').pop() === fileName || uri.fsPath === fileName) {
          diagnostics.forEach((diag) => {
            const ruleId = diag.code ? 
              (typeof diag.code === 'object' ? diag.code.value : diag.code.toString()) : 
              'Unknown rule';
            
            issues.push(
              new IssueItem(
                `${diag.message}`,
                vscode.TreeItemCollapsibleState.None,
                diag,
                uri
              )
            );
          });
        }
      });
      
      return Promise.resolve(issues);
    }
  }
}
