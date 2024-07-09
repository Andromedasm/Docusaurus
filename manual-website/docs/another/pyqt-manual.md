---
id: pyqt-manual
title: PyQt使用マニュアル
sidebar_label: PyQtの使用マニュアル
---

# PyQtの詳細使用マニュアル

## はじめに

PyQtは、Pythonでクロスプラットフォームのデスクトップアプリケーションを作成するためのフレームワークです。本マニュアルでは、PyQtの基本的な使い方から高度な機能までを網羅します。

## 目次

1. [PyQtのインストール](#pyqtのインストール)
2. [基本プロジェクト構造](#基本プロジェクト構造)
3. [主な機能の実装](#主な機能の実装)
4. [高度な機能](#高度な機能)
5. [デバッグとデプロイ](#デバッグとデプロイ)

## PyQtのインストール

### 必要なツール

- Python 3.x
- pip

### インストール手順

1. Python 3.xをインストールします（https://www.python.org/ からダウンロード可能）。
2. pipを使用してPyQtをインストールします。

```bash
# PyQt5をインストールする場合
pip install PyQt5

# PyQt6をインストールする場合
pip install PyQt6
```

## 基本プロジェクト構造

PyQtプロジェクトの基本的なディレクトリ構造は以下のようになります：

```css
my-pyqt-app

/
├── main.py
└── main.ui
```

### `main.py`

メインアプリケーションのエントリーポイントです。

```python
import sys
from PyQt5.QtWidgets import QApplication, QMainWindow
from PyQt5.uic import loadUi


class MyApp(QMainWindow):


    def __init__(self):


    super().__init__()
loadUi('main.ui', self)

if __name__ == "__main__":
    app = QApplication(sys.argv)
window = MyApp()
window.show()
sys.exit(app.exec_())
```

### `main.ui`

Qt Designerを使用して作成したユーザーインターフェースファイルです。

## 主な機能の実装

### シグナルとスロット

PyQtでは、シグナルとスロットを使用してイベント駆動型のプログラムを作成します。

```python
from PyQt5.QtWidgets import QPushButton, QLabel


class MyApp(QMainWindow):


    def __init__(self):


    super().__init__()
loadUi('main.ui', self)

self.button = self.findChild(QPushButton, 'myButton')
self.label = self.findChild(QLabel, 'myLabel')

self.button.clicked.connect(self.on_button_click)


def on_button_click(self):
    self.label.setText('ボタンがクリックされました')
```

### レイアウト管理

PyQtでは、レイアウトマネージャを使用してウィジェットの配置を管理します。

```python
from PyQt5.QtWidgets import QVBoxLayout, QPushButton


class MyApp(QMainWindow):


    def __init__(self):


    super().__init__()

self.setWindowTitle('レイアウト管理の例')
self.setGeometry(100, 100, 400, 300)

layout = QVBoxLayout()

button1 = QPushButton('ボタン1')
button2 = QPushButton('ボタン2')

layout.addWidget(button1)
layout.addWidget(button2)

container = self.centralWidget()
container.setLayout(layout)
```

### ダイアログの表示

PyQtでダイアログを表示するには、`QMessageBox`を使用します。

```python
from PyQt5.QtWidgets import QMessageBox


class MyApp(QMainWindow):


    def __init__(self):


    super().__init__()
loadUi('main.ui', self)

self.button = self.findChild(QPushButton, 'myButton')
self.button.clicked.connect(self.show_dialog)


def show_dialog(self):
    msg = QMessageBox()
    msg.setIcon(QMessageBox.Information)
    msg.setText('これは情報ダイアログです')
    msg.setInformativeText('追加情報をここに記入します')
    msg.setWindowTitle('情報')
    msg.exec_()
```

## 高度な機能

### カスタムウィジェットの作成

カスタムウィジェットを作成することで、独自の機能を持つウィジェットを作成できます。

```python
from PyQt5.QtWidgets import QWidget, QVBoxLayout, QLabel


class CustomWidget(QWidget):


    def __init__(self):


    super().__init__()
layout = QVBoxLayout()
self.label = QLabel('カスタムウィジェット')
layout.addWidget(self.label)
self.setLayout(layout)
```

### データベースとの連携

PyQtでSQLiteデータベースを使用する例です。

```python
import sqlite3
from PyQt5.QtWidgets import QTableWidget, QTableWidgetItem


class MyApp(QMainWindow):


    def __init__(self):


    super().__init__()
loadUi('main.ui', self)

self.tableWidget = self.findChild(QTableWidget, 'myTableWidget')
self.load_data()


def load_data(self):
    connection = sqlite3.connect('database.db')
    cursor = connection.cursor()
    cursor.execute('SELECT * FROM my_table')

    rows = cursor.fetchall()
    self.tableWidget.setRowCount(len(rows))
    self.tableWidget.setColumnCount(len(rows[0]))

    for i, row in enumerate(rows):
        for j, value in enumerate(row):
            self.tableWidget.setItem(i, j, QTableWidgetItem(str(value)))

    connection.close()
```

## デバッグとデプロイ

### デバッグ

PyQtアプリのデバッグには、標準のPythonデバッグツールを使用します。

```python
import pdb


def my_function():


    pdb.set_trace()
print('デバッグ中')

my_function()
```

### デプロイ

PyQtアプリをパッケージ化してデプロイするには、PyInstallerを使用します。

```bash
# インストール
pip install pyinstaller

# パッケージ化
pyinstaller --onefile --windowed main.py
```

生成された実行ファイルは、distディレクトリに保存されます。