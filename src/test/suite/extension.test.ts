import * as assert from "assert";
import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";
import { activate } from "../../extension";

suite("Extension Test Suite", () => {
  vscode.window.showInformationMessage("Start all tests.");

  test("Test import formatting", async () => {
    // Read bad-import.tsx and good-import.tsx file contents
    const badImportPath = path.join(
      __dirname,
      "..",
      "examples",
      "bad-import.tsx"
    );
    const goodImportPath = path.join(
      __dirname,
      "..",
      "examples",
      "good-import.tsx"
    );
    const badImportContent = fs.readFileSync(badImportPath, "utf8");
    const goodImportContent = fs.readFileSync(goodImportPath, "utf8");

    // Open a new untitled document with bad import content
    const document = await vscode.workspace.openTextDocument({
      content: badImportContent,
      language: "typescriptreact",
    });

    // Create a TextEditor for the document
    const editor = await vscode.window.showTextDocument(document);

    // Execute the formatting command
    await vscode.commands.executeCommand("tsx-import-formatter.formatImports");

    // Get the formatted content from the editor
    const formattedContent = editor.document.getText();

    // Compare the formatted content with the good import content
    assert.strictEqual(formattedContent, goodImportContent);
  });
});
