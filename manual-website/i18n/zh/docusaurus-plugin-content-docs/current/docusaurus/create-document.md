---
id: docusaurus-create-document
title: Docusaurusドキュメント作成
---

# ドキュメントを作成する

Markdown ファイル `greeting.md` を作成し、`docs` ディレクトリーの配下に配置しましょう。

```
website # あなたのサイトのルートディレクトリー
├── docs
│   └── greeting.md
├── src
│   └── pages
├── docusaurus.config.ts
├── ...
```

---

description: リッチなコンテンツを含むドキュメントを作成する

---

# Docusaurus へようこそ

オープンソースプロジェクトのドキュメンテーションサイトを作成する用意はいいですか？

## ヘッダー

は、右上の目次に表示されます。

このページがどんなページなのか把握したいユーザーが、下へスクロールしたり、本文をたくさん読んだりしなくていいようにするためです。

## デフォルトでは h2 と h3 のみが目次に載ります。

目次の見出しレベルは、ドキュメントごとに設定するか、テーマ設定から設定できます。

ヘッダーは、階層を明確にするためのスペースでよく整理されています。

- lists will help you
- present the key points
- that you want your users to remember
  - and you may nest them
    - multiple times

> メモ
>
> docs ディレクトリー配下で、名前の先頭にアンダースコア（ _ ）が付いたすべてのファイルは「部分的な」ページとして扱われ、デフォルトでは無視されます。詳しくは、[部分ページのインポート](https://docusaurus.io/docs/sidebar)をご覧ください。

## ドキュメントのフロントマター（前付け）

フロントマター（前付け）は、あなたのドキュメントページについて、追加のメタデータを提供するために使用されます。フロントマターの記載は任意であり、Docusaurusでは、フロントマター無しでもすべての必須なメタデータを推論できます。For example, the doc tags feature introduced below requires using front matter. 使用できるすべての項目については、[API ドキュメント](https://docusaurus.io/docs/api)を参照してください。

## ドキュメントタグ

Tags are declared in the front matter and introduce another dimension of categorization in addition to the docs sidebar.

It is possible to define tags inline, or to reference predefined tags declared in a tags file (optional, usually `docs/tags.yml`).

In the following example:

- `docusaurus` references a predefined tag key declared in `docs/tags.yml`
- `Releases` is an inline tag, because it does not exist in `docs/tags.yml`

```markdown
docs/my-doc.md
---
tags:
  - Releases
  - docusaurus
---

# Title

Content
```

```yaml
docs/tags.yml
docusaurus:
  label: 'Docusaurus'
  permalink: '/docusaurus'
  description: 'Docs related to the Docusaurus framework'
```

> ヒント
>
> タグの定義は、`tags: [デモ, 作業の開始]`のように記述することもできます。詳しくは、使用できるすべての YAML 配列構文をご覧ください。

## フォルダ構造を整理する

`docs` フォルダ下での Markdown ファイルの配置は、Docusaurus のコンテンツ生成に様々な影響を及ぼします。ですが、そうした影響のほとんどはファイル構造から分離することができます。

### ドキュメント ID

すべてのドキュメントには固有の id があります。デフォルトでは、ドキュメント id は、`docs` のルートディレクトリから見たドキュメントの名前です（拡張子は除く）。

例えば、`greeting.md` の ID は `greeting`、`guide/hello.md` の ID は `guide/hello` です。

```
website # あなたのサイトのルートディレクトリー
└── docs
   ├── greeting.md
   └── guide
      └── hello.md
```

ただし、id の末尾は、ユーザーがフロントマターで定義できます。例えば、`guide/hello.md` の内容が以下のように定義されている場合、その id は最終的に `guide/part1` になります。

```markdown
---
id: part1
---

ダミーの本文です。
```

ID が使われるのは、サイドバーを手動作成する際のドキュメントへの参照や、ドキュメントに関連付けられたコンポーネントやフックの使用時です。

### ドキュメント URL

By default, a document's URL location is its file path relative to the `docs` folder, with a few exceptions. Namely, if a file is named one the following, the file name won't be included in the URL:

- Named as `index` (case-insensitive): `docs/Guides/index.md`
- Named as `README` (case-insensitive): `docs/Guides/README.mdx`
- Same name as parent folder: `docs/Guides/Guides.md`

In all cases, the default slug would only be `/Guides`, without the `/index`, `/README`, or duplicate `/Guides` segment.

> メモ
>
> This convention is exactly the same as the category index convention. However, the `isCategoryIndex` configuration does not affect the document URL.

ドキュメントの URL を変更するには、`slug` フロントマターを使用します。

例えば、サイトの構造が以下のようだったとします。

```
website # あなたのサイトのルートディレクトリー
└── docs
    └── guide
        └── hello.md
```

デフォルトでは、`hello.md` は `/docs/guide/hello` で利用できるでしょう。 あなたは、この URL ロケーションを `/docs/bonjour` に変更できます。

```markdown
---
slug: /bonjour
---

ダミーの本文です。
```

`slug` は doc プラグインの `routeBasePath`（経路の基底パス） の後ろに連結されます。これはデフォルトでは `/docs` です。See [Docs-only mode](https://docusaurus.io/docs/docs-introduction) for how to remove the `/docs` part from the URL.

> メモ
>
> It is possible to use:
>
> - absolute slugs: `slug: /mySlug`, `slug: /...`
> - relative slugs: `slug: mySlug`, `slug: ./../mySlug...`
>
> あるドキュメントをルートで表示できるようにして、`https://docusaurus.io/docs/` のようなパスを与えたい場合、`slug` フロントマターが使用できます。

```markdown
---
id: my-home-doc
slug: /
---

ダミーの本文です。
```

## サイドバー

[自動生成のサイドバー](https://docusaurus.io/docs/sidebar) を使用すると、サイドバーの構造はファイル構造によって決定されます。

ファイルシステムの整理について、以下のことが推奨されます。ファイルシステムはサイドバーの構造と一致させましょう（そうすると `sidebars.ts` ファイルを手書きする必要が無くなります）。また、各ドキュメントの URL をカスタマイズするには `slug` フロントマターを使用しましょう。