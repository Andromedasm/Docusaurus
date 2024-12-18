---
id: electron-manual
title: Electronの使用マニュアル
sidebar_label: Electronの使用マニュアル
---

# Electronの使用マニュアル

## はじめに

Electronは、JavaScript、HTML、CSSを使用してクロスプラットフォームのデスクトップアプリケーションを作成するためのフレームワークです。本マニュアルでは、Electronの基本的な使い方から高度な機能までを網羅します。

## 目次

1. [Electronのインストール](#electronのインストール)
2. [基本プロジェクト構造](#基本プロジェクト構造)
3. [主な機能の実装](#主な機能の実装)
4. [高度な機能](#高度な機能)
5. [デバッグとデプロイ](#デバッグとデプロイ)

## Electronのインストール

### 必要なツール

- Node.js
- npmまたはyarn

### インストール手順

1. Node.jsをインストールします（https://nodejs.org/ からダウンロード可能）。
2. npmまたはyarnを使用してElectronをインストールします。

```bash
# npmを使用する場合
npm install -g electron

# yarnを使用する場合
yarn global add electron
```

基本プロジェクト構造
Electronプロジェクトの基本的なディレクトリ構造は以下のようになります：

```css
my-electron-app

/
├── package.json
├── main.js
├── index.html
└── renderer.js
```

`package.json`

プロジェクトの設定や依存関係を管理するファイルです。

```json
{
  "name": "my-electron-app",
  "version": "1.0.0",
  "main": "main.js",
  "scripts": {
    "start": "electron ."
  },
  "dependencies": {
    "electron": "^13.1.7"
  }
}
```

`main.js`

メインプロセスを制御するスクリプトです。

```javascript
const {app, BrowserWindow} = require('electron');

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
```

`index.html`

レンダラープロセスで使用されるHTMLファイルです。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Hello Electron</title>
</head>
<body>
<h1>Hello Electron</h1>
<script src="renderer.js"></script>
</body>
</html>
```

`renderer.js`

レンダラープロセスで実行されるJavaScriptファイルです。

```javascript
console.log('Hello from renderer process');
```

## 主な機能の実装
### メニューの作成
カスタムメニューを作成するには、`Menu`モジュールを使用します。

```javascript
const {app, BrowserWindow, Menu} = require('electron');

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadFile('index.html');

    const menu = Menu.buildFromTemplate([
        {
            label: 'File',
            submenu: [
                {role: 'quit'}
            ]
        }
    ]);
    Menu.setApplicationMenu(menu);
}

app.whenReady().then(createWindow);
```

### ダイアログの表示
ダイアログを表示するには、`dialog`モジュールを使用します。

```javascript
const {dialog} = require('electron');

function showDialog() {
    dialog.showMessageBox({
        type: 'info',
        title: 'Information',
        message: 'This is an information dialog',
        buttons: ['OK']
    });
}
```

### ファイル操作
ファイルシステム操作には、Node.jsの`fs`モジュールを使用します。

```javascript
const fs = require('fs');

function readFile(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('An error occurred reading the file:', err);
            return;
        }
        console.log('File contents:', data);
    });
}
```

## 高度な機能
### 自動更新
Electronには、自動更新機能を実装するための`autoUpdater`モジュールがあります。

```javascript
const {autoUpdater} = require('electron-updater');

autoUpdater.on('update-available', () => {
    console.log('Update available');
});

autoUpdater.on('update-downloaded', () => {
    autoUpdater.quitAndInstall();
});

app.on('ready', () => {
    autoUpdater.checkForUpdates();
});
```

### ネイティブモジュールの使用
Electronは、ネイティブモジュール（C/C++で書かれたモジュール）の使用をサポートしています。

```javascript
const myNativeModule = require('my-native-module');

myNativeModule.doSomething();
```

## デバッグとデプロイ
### デバッグ
Electronアプリのデバッグには、Chrome DevToolsを使用します。

```javascript
const {BrowserWindow} = require('electron');

const win = new BrowserWindow({
    webPreferences: {
        devTools: true
    }
});

win.webContents.openDevTools();
```

### デプロイ
Electronアプリをパッケージ化してデプロイするには、`electron-builder`を使用します。

```bash
# インストール
npm install electron-builder --save-dev

# パッケージ化
npx electron-builder
```

`electron-builder`の設定は、`package.json`に追加します。

```json
"build": {
"appId": "com.example.app", 
"mac": {
"category": "public.app-category.utilities"
}, 
"win": {
"target": "nsis"
},
"linux": {
"target": "AppImage"
}
}
```
