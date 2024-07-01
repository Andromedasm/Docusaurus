---
id: docusaurus-guide
title: Docusaurusマニュアル
---

# Docusaurus 使用マニュアル

このマニュアルでは、Docusaurusの基本的な使用方法から応用的な設定までを詳細に説明します。Docusaurusは、静的サイトジェネレーターで、主に技術文書の作成に使用されます。このガイドはTypeScriptを使用しています。

## 目次
1. [インストール](#インストール)
2. [プロジェクトの作成と起動](#プロジェクトの作成と起動)
3. [サイドバーの設定](#サイドバーの設定)
4. [文書の保存場所](#文書の保存場所)
5. [画像の保存場所](#画像の保存場所)
6. [検索プラグインの導入](#検索プラグインの導入)

## インストール

まず、Docusaurusをインストールするために、Node.jsが必要です。Node.jsがインストールされていない場合は、[公式サイト](https://nodejs.org/)からインストールしてください。

その後、以下のコマンドを実行してDocusaurusをインストールします。

```bash
npx create-docusaurus@latest my-website classic --typescript
cd my-website
```

## プロジェクトの作成と起動
Docusaurusプロジェクトを作成した後、以下のコマンドで開発サーバーを起動します。

```bash
npm start
```

ブラウザで`http://localhost:3000`にアクセスすると、Docusaurusのデフォルトサイトが表示されます。

## サイドバーの設定
サイドバーを追加するには、`sidebars.ts`ファイルを編集します。このファイルは、通常、`my-website`ディレクトリの直下にあります。

以下は、`docs`ディレクトリにある文書のサイドバー設定の例です。

```javascript
module.exports = {
    docs: [
        {
            type: 'category',
            label: '入門',
            items: ['intro', 'tutorial-basics/create-a-page', 'tutorial-basics/create-a-document'],
        },
    ],
};
```

### `sidebars.ts`とMarkdownファイルの関係
`sidebars.ts`ファイルの設定は、`docs`ディレクトリ内のMarkdownファイルの構造に基づいています。各Markdownファイルのフロントマター（例：`id`, `title`）は、サイドバーで表示される順序やカテゴリーを決定します。

例えば、docs/intro.mdファイルのフロントマター：

```md
---
id: intro
title: はじめに
---
```
このフロントマターに基づいて、introというIDでサイドバーに表示されます。

## 文書の保存場所
デフォルトでは、文書は`docs`ディレクトリに保存されます。このディレクトリ内にMarkdownファイルを作成し、文書を記述します。

文書ファイル名には特定の規則はありませんが、ファイル名と`id`は一貫性を持たせると管理が楽になります。

例えば、`docs/intro.md`というファイルを作成し、以下のように記述します。

```md
---
id: intro
title: はじめに
---

# Docusaurusの紹介

Docusaurusは、静的サイトジェネレーターです。
```

## 画像の保存場所
画像は通常、`static/img`ディレクトリに保存されます。このディレクトリ内に画像ファイルを保存し、Markdownファイル内で使用できます。

例えば、`static/img/logo.png`という画像を使用する場合、Markdownファイル内で以下のように記述します。

```md
![ロゴ](../static/img/logo.png)
```

### 画像の引用とサイズ変更の例
画像を引用する際にサイズを変更することも可能です。以下にいくつかの例を示します。

```md
<img src="/img/logo.png" alt="ロゴ" width="200" height="200" />
```

## 検索プラグインの導入
Docusaurusには検索機能を追加するためのプラグインがあります。例えば、Algoliaの検索プラグインを導入するには、`docusaurus.config.ts`ファイルを編集します。

以下は、Algolia検索プラグインを導入する例です。

```javascript
module.exports = {
    // ...他の設定
    themeConfig: {
        algolia: {
            apiKey: 'YOUR_API_KEY',
            indexName: 'YOUR_INDEX_NAME',
            appId: 'YOUR_APP_ID', // Algoliaの無料プランを使用している場合は省略可能
        },
    },
    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'search',
                path: 'docs',
                routeBasePath: 'docs',
            },
        ],
    ],
};
```
プラグインのインストールが必要な場合は、npmを使用してインストールします。

```bash
npm install @docusaurus/theme-search-algolia
```

## Algoliaの登録方法とAPIキーの取得
### Algoliaの登録方法
1. Algoliaの公式サイト`https://www.algolia.com`にアクセスし、アカウントを作成します。
2. アカウント作成後、ダッシュボードにログインします。

### APIキー、インデックス名、アプリIDの取得方法
1. ダッシュボードの左側のメニューから「API Keys」を選択します。
2. 「API Key」セクションで、「Search-Only API Key」をコピーします。これがapiKeyになります。
3. 「Indices」セクションで、インデックスを作成します。作成したインデックスの名前をindexNameとして使用します。
4. 「Applications」セクションで、アプリケーションの詳細を確認します。「Application ID」をコピーして、appIdとして使用します。

これで、Docusaurusの設定に必要なAlgoliaの情報がすべて揃いました。先ほどの`docusaurus.config.ts`ファイルにこれらの情報を追加して設定を完了します。

## まとめ
以上で、Docusaurusの基本的な使用方法と設定についての説明を終わります。Docusaurusを使用すると、簡単に技術文書を作成し、公開することができます。さらに詳細な情報は、Docusaurus公式ドキュメントを参照してください。