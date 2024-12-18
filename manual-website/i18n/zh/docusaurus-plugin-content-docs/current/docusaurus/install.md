---
id: docusaurus-install
title: Docusaurusインストール
---

# インストール

Docusaurus は、npm パッケージの集まりで構成されています。

## ヒント
お急ぎコースを利用して、Docusaurus を 5 分⏱で理解しましょう！

手元のブラウザーですぐに Docusaurus を試すには、[docusaurus.new](https://docusaurus.new) を使いましょう！

## 要件
- Node.ts バージョン 18.0 以上（`node -v` を実行することで確認できます）。 
- `nvm` をインストール・使用すると、単一のコンピューター上で複数バージョンの Node を管理することができます。
- Node.ts をインストールする際、依存関係に関連するすべてのチェックボックスをチェックすることをお勧めします。

## プロジェクトの足場作り

Docusaurusをインストールする最も簡単な方法は、骨格となるDocusaurusウェブサイトの足場作りを支援するコマンドラインツールを使用することです。このコマンドは、新しい空のリポジトリ内でも、既存のリポジトリ内でも、どこでも実行でき、雛形ファイルを含む新しいディレクトリが作成されます。

```bash
npx create-docusaurus@latest my-website classic
```

すぐに始められるように、classicテンプレートをお勧めします。このテンプレートには、Docusaurus 1から搭載されている機能が含まれています。classicテンプレートには、`@docusaurus/preset-classic`が含まれており、その中には標準ドキュメント、ブログ、カスタムページ、CSSフレームワーク（ダークモード対応）などが含まれています。標準的（classic）なテンプレートを使えばすぐに使い始めて、Docusaurusに慣れてきた頃にはカスタマイズをすることができます。

また、`--typescript`フラグを指定することで、テンプレートのTypeScript版を使用することができます。 詳しくは[TypeScriptサポート](https://docusaurus.io/docs/typescript-support)をご覧ください。

```bash
npx create-docusaurus@latest my-website classic --typescript
```

### Meta関係者専用
Metaオープンソースプロジェクトのために新しいDocusaurusウェブサイトをセットアップする場合、以下のコマンドを内部リポジトリ内で実行すると、Meta固有の便利な初期設定がいくつか付属してきます。

```bash
scarf static-docs-bootstrap
```

### 代替インストールコマンド
利用可能なすべてのフラグの詳細については、`npx create-docusaurus@latest --help`を実行するか、[APIドキュメント](https://docusaurus.io/docs/cli#create-docusaurus)を参照してください。

## プロジェクト構造

標準テンプレートを選択し、サイト名を`my-website`とした場合、新しいディレクトリ`my-website/`の下に以下のファイルが生成されることが確認できます。

```
my-website
├── blog
│   ├── 2019-05-28-hola.md
│   ├── 2019-05-29-hello-world.md
│   └── 2020-05-30-welcome.md
├── docs
│   ├── doc1.md
│   ├── doc2.md
│   ├── doc3.md
│   └── mdx.md
├── src
│   ├── css
│   │   └── custom.css
│   └── pages
│       ├── styles.module.css
│       └── index.ts
├── static
│   └── img
├── docusaurus.config.ts
├── package.tson
├── README.md
├── sidebars.ts
└── yarn.lock
```

### プロジェクト構造の概要

- `/blog/` - ブログのMarkdownファイルが格納されています。ブログプラグインを無効にしている場合は、このディレクトリを削除できます。また、`path`オプションを設定した後は、その名前を変更することができます。詳細は[ブログガイド](https://docusaurus.io/docs/blog)に記載されています。
- `/docs/` - ドキュメントのMarkdownファイルが格納されています。`sidebars.ts`でドキュメントのサイドバーの並び順をカスタマイズできます。ドキュメントプラグインを無効にしている場合は、このディレクトリを削除できます。また、`path`オプションを設定した後は、その名前を変更することができます。詳細は[ドキュメントガイド](https://docusaurus.io/docs/docs-introduction)に記載されています。
- `/src/` - ページやカスタムReactコンポーネントのようなドキュメンテーション以外のファイルです。ドキュメント以外のファイルを厳密にここに置く必要はありませんが、一元化されたディレクトリの下に置くことで、何らかのリントまたは処理を行う必要がある場合に指定しやすくなります。
- `/src/pages` - このディレクトリ内のJSX/TSX/MDXファイルは、ウェブサイトページに変換されます。 詳細は[ページガイド](https://docusaurus.io/docs/creating-pages)に記載されています。
- `/static/` - 静的ディレクトリです。この中にあるコンテンツは、最終的には`build`ディレクトリのルートにコピーされます。
- `/docusaurus.config.ts` - サイトの設定を含む設定ファイルです。Docusaurus v1で言うところの`siteConfig.ts`に相当します。
- `/package.tson` - Docusaurusのウェブサイトは、Reactアプリです。その中に好きなnpmパッケージをインストールして使うことができます。
- `/sidebars.ts` - サイドバーのドキュメントの順序を指定するためにドキュメントで使用されます。

### 単一リポジトリ（Monorepo・モノレポ）

既存のプロジェクトのドキュメント作成にDocusaurusを使用している場合、モノレポが解決策になるかもしれません。モノレポは、類似のプロジェクト間で依存関係を共有することを可能にします。例えば、ウェブサイトでは、リリースされたバージョンに依存する代わりに、ローカルパッケージを使用して最新の機能を紹介することができます。そうすれば、コントリビューターは機能を実装するたびにドキュメントを更新することができます。モノレポのフォルダー構造の例を以下に示します。

```
my-monorepo
├── package-a # 別パッケージ（本体プロジェクト）
│   ├── src
│   └── package.tson # パッケージAの依存関係
├── website # Docusaurusのルート
│   ├── docs
│   ├── src
│   └── package.tson # Docusaurusの依存関係
└── package.tson # モノレポ内で共有された依存関係
```

この場合、`./my-monorepo`フォルダ内で`npx create-docusaurus`を実行する必要があります。

NetlifyやVercelなどのホスティングプロバイダを使用している場合は、サイトのBase directoryをDocusaurusのルートがある場所に変更する必要があります。この場合、`./website`となります。無視コマンドの設定については、[デプロイドキュメント](https://docusaurus.io/docs/deployment)を参照してください。

モノレポについては[Yarnのドキュメント](https://classic.yarnpkg.com/en/docs/workspaces/)を参照してください（モノレポを構築する手段はYarnだけではなく、一般的なソリューションです）。また、[DocusaurusとJestの実例](https://docusaurus.io/docs/integration-testing)もご覧ください。

## 開発サーバーの実行

ファイルを編集しながら変更点を確認するには、Webサイトを配信し、最新の変更点を反映させるローカル開発サーバーを実行するとよいでしょう。

```bash
cd my-website
npm run start
```

初期設定では、`http://localhost:3000`を開くブラウザ画

面が起動します。

おめでとうございます！最初のDocusaurusサイトを作成できました！サイト内を閲覧して何があるかを確認しましょう。

## ビルド

Docusaurusは最新の静的ウェブサイトジェネレータなので、ウェブサイトを静的コンテンツのディレクトリ内にビルドし、ウェブサーバに置いて閲覧できるようにする必要があります。ウェブサイトをビルドするには以下のコマンドを実行します。

```bash
npm run build
```

すると、`/build`ディレクトリ内にコンテンツが生成されます。このディレクトリはGitHub pagesやVercel、Netlifyなどの静的ファイルホスティングサービスにコピーすることができます。デプロイに関するドキュメントをご覧ください。

## Docusaurusバージョンの更新

Docusaurusのバージョンアップには、様々な方法があります。 確実な方法の1つとしては、`package.tson`内のバージョン番号を手動で目的のバージョンに変更することが挙げられます。ただし、`@docusaurus/`で始まる名前空間のパッケージはすべて同じバージョンを使用する必要があることに注意してください。

> 警告  
> アーカイブされたバージョンを参照しているため、以下のスニペットは古くなっています。 [メインサイト](https://docusaurus.io/)に従って最新バージョンにアップグレードしてください。

```json
package.tson
{
  "dependencies": {
    "@docusaurus/core": "current",
    "@docusaurus/preset-classic": "current",
    // ...
  }
}
```

次に、`package.tson`のあるディレクトリで、以下のようなパッケージマネージャのinstallコマンドを実行します。

```bash
npm install
```

アップデートが正常に行われたことを確認するために、以下のコマンドを実行します。

```bash
npx docusaurus --version
```

出力として正しいバージョンが表示されるはずです。

また、Yarnを使っている場合は、以下のようにすることもできます。

```bash
yarn add @docusaurus/core @docusaurus/preset-classic
```

## ヒント

Docusaurusの未リリースの新機能を`@canary` npm distタグで使用することができます。