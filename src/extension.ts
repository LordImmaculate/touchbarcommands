// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

const config = vscode.workspace.getConfiguration('touchBarCommands');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	/*const test = vscode.commands.registerCommand('extension.test', () => {
		const showUploadIcon = config.get<boolean>('uploadIcon.enabled');
		if (showUploadIcon) {
		vscode.window.showInformationMessage("showUploadIcon is true");
		}
		else {
			vscode.window.showInformationMessage("showUploadIcon is false");
		}
	});
	context.subscriptions.push(test);*/
}
// This method is called when your extension is deactivated
export function deactivate() { }
