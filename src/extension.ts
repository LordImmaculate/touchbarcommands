// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	const verify = vscode.commands.registerCommand('extension.verify', () => {
		vscode.commands.executeCommand('arduino.verify');
	});
	const upload = vscode.commands.registerCommand('extension.upload', () => {
		vscode.commands.executeCommand('arduino.upload');
	});
	const format = vscode.commands.registerCommand('extension.format', () => {
		vscode.commands.executeCommand('editor.action.formatDocument');
	});
	context.subscriptions.push(verify, upload, format);
}

// This method is called when your extension is deactivated
export function deactivate() { }
