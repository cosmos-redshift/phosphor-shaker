import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "tsx-import-formatter.formatImports",
    () => {
      const editor = vscode.window.activeTextEditor;

      if (!editor) {
        vscode.window.showInformationMessage("No active editor found");
        return;
      }

      const document = editor.document;
      const text = document.getText();
      const importRegex =
        /import\s*{([^}]+)}\s*from\s*['"]phosphor-react-native['"]/g;

      if (!importRegex.test(text)) {
        vscode.window.showInformationMessage("No matching imports found");
        return;
      }

      const formattedText = text.replace(importRegex, (_, imports) => {
        return imports
          .split(",")
          .map((imp: string) => {
            const iconName = imp.trim();
            return `import ${iconName} from 'phosphor-react-native/src/icons/${iconName}'`;
          })
          .join("\n");
      });

      editor.edit((editBuilder) => {
        const startPos = new vscode.Position(0, 0);
        const endPos = new vscode.Position(document.lineCount, 0);
        const range = new vscode.Range(startPos, endPos);

        editBuilder.replace(range, formattedText);
      });
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
