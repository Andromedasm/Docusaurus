---
id: docusaurus-setting
title: Docusaurus設定
---

# 設定

## 情報

全てのオプションの一覧については、docusaurus.config.tsのAPIリファレンスを参照してください。

Docusaurusは、設定方法に独自の工夫をしています。私たちは、サイトに関する情報を1つの場所に集めることをお勧めします。私たちはこのファイルのフィールドを保護し、このデータオブジェクトがサイト全体でアクセスできるようにすることを促進します。

docusaurus.config.tsをきちんと管理することで、あなたや共著者、オープンソースの貢献者が、サイトをカスタマイズしながらもドキュメント作成に集中することができます。

## docusaurus.config.tsを宣言する構文

docusaurus.config.tsファイルはNode.tsで実行され、以下のいずれかをエクスポートする必要があります。

### 設定オブジェクト

### 設定オブジェクトを生成する関数

### 情報

The docusaurus.config.ts file supports:

- ES Modules
- CommonJS
- TypeScript

### 制限事項

- 必須: `export default /* your config*/` (or `module.exports` to export your Docusaurus config)
- 任意: Node.tsからパッケージをインポートするには、`import Lib from 'lib'` (または `require('lib')`) を使用します。

Docusaurusは設定を宣言するさまざまな方法を提供しており、以下のすべての設定例は同じ結果をもたらします：

```js
// docusaurus.config.ts
export default {
  title: 'Docusaurus',
  url: 'https://docusaurus.io',
  // your site config ...
};
```

```js
// docusaurus.config.ts
module.exports = {
  title: 'Docusaurus',
  url: 'https://docusaurus.io',
  // your site config ...
};
```

```ts
// docusaurus.config.ts
import type { Config } from '@docusaurus/types';

export default {
  title: 'Docusaurus',
  url: 'https://docusaurus.io',
  // your site config ...
} satisfies Config;
```

```js
// docusaurus.config.ts
const config = {
  title: 'Docusaurus',
  url: 'https://docusaurus.io',
  // サイト設定 ...
};

export default config;
```

```js
// docusaurus.config.ts
export default function configCreator() {
  return {
    title: 'Docusaurus',
    url: 'https://docusaurus.io',
    // your site config ...
  };
}
```

```js
// docusaurus.config.ts
export default async function createConfigAsync() {
  return {
    title: 'Docusaurus',
    url: 'https://docusaurus.io',
    // your site config ...
  };
}
```

### ESMのみのパッケージの使用

ESMのみのモジュール（特にほとんどのRemarkプラグイン）をインポートするには、非同期の設定作成関数を使用すると便利です。動的インポートのおかげで、このようなモジュールを次のようにインポートできます。

```js
// docusaurus.config.ts
export default async function createConfigAsync() {
  // Use a dynamic import instead of require('esm-lib')
  const lib = await import('lib');

  return {
    title: 'Docusaurus',
    url: 'https://docusaurus.io',
    // rest of your site config...
  };
}
```

## docusaurus.config.tsの中に含まれているもの

サイトを制作する場合でも、docusaurus.config.tsを一から書く必要はないはずです。すべてのテンプレートには、一般的なオプションの初期値を含むdocusaurus.config.tsが付属しています。

しかし、設定がどのように設計され、実装されているのかについて高い水準で理解しておくと役に立つことがあります。

Docusaurusの設定に関する高水準な概要は、以下のように分類されます。

### サイトのメタデータ

サイトメタデータには、title、url、baseUrl、faviconなどの必須グローバルメタデータが含まれます。これらは、サイトのタイトルや見出し、ブラウザのタブアイコン、ソーシャル共有（Facebook、Twitter）情報、あるいは静的ファイルを配信するための正しいパスの生成など、さまざまな場所で使用されます。

### デプロイの設定

projectName、organizationName、任意でdeploymentBranchなどのデプロイ設定は、deployコマンドでサイトをデプロイするときに使用されます。詳しくは、デプロイのドキュメントを参照することをお勧めします。

### テーマ・プラグイン・プリセット設定

themes、plugins、presets の欄に、それぞれ自分のサイトのテーマ、プラグイン、プリセットを記載します。これらは通常、以下に示す通りnpmパッケージです。

```js
// docusaurus.config.ts
export default {
  // ...
  plugins: [
    '@docusaurus/plugin-content-blog',
    '@docusaurus/plugin-content-pages',
  ],
  themes: ['@docusaurus/theme-classic'],
};
```

### ヒント

Docusaurusはモジュールの短縮表記をサポートしているので、上記の設定を次のように簡略化することができます。

```js
// docusaurus.config.ts
export default {
  // ...
  plugins: ['content-blog', 'content-pages'],
  themes: ['classic'],
};
```

また、次のようにローカルディレクトリから読み込むことも可能です。

```js
// docusaurus.config.ts
import path from 'path';

export default {
  // ...
  themes: [path.resolve(__dirname, '/path/to/docusaurus-local-theme')],
};
```

プラグインやテーマのオプションを指定するには、次のように、設定ファイルのプラグインやテーマの名前を、その名前とオプションオブジェクトを含む配列に置き換えます。

```js
// docusaurus.config.ts
export default {
  // ...
  plugins: [
    [
      'content-blog',
      {
        path: 'blog',
        routeBasePath: 'blog',
        include: ['*.md', '*.mdx'],
        // ...
      },
    ],
    'content-pages',
  ],
};
```

プリセットにバンドルされているプラグインやテーマのオプションを指定するには、presets欄にオプションを渡します。この例では、docsは`@docusaurus/plugin-content-docs`を指し、themeは`@docusaurus/theme-classic`を指します。

```js
// docusaurus.config.ts
export default {
  // ...
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        theme: {
          customCss: ['./src/css/custom.css'],
        },
      },
    ],
  ],
};
```

### ヒント

短縮形`presets: [['classic', {...}]]`も同様に機能します。テーマ、プラグイン、プリセットの設定の詳細については、[プラグインの使用](https://docusaurus.io/docs/using-plugins)を参照してください。

### カスタム設定

Docusaurusは`docusaurus.config.ts`の未知のフィールドを保護します。カスタムフィールドを追加するには、`customFields`で定義してください。

例：

```js
// docusaurus.config.ts
export default {
  // ...
  customFields: {
    image: '',
    keywords: [],
  },
  // ...
};
```

## コンポーネントから設定にアクセス

設定オブジェクトは、サイトのすべてのコンポーネントで利用できるようになります。そして、Reactコンテキストから`siteConfig`としてアクセスすることができます。

簡単な例：

```jsx
import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const Hello = () => {
  const { siteConfig } = useDocusaurusContext();
  const { title, tagline } = siteConfig;

  return <div>{`${title} · ${tagline}`}</div>;
};
```

### ヒント

クライアント側でそれらのフィールドを使いたいだけなら、自分でJSファイルを作ってES6モジュールとしてインポートすればいいので、docusaurus.config.tsに入れる必要はありません。

## Babelの設定のカスタマイズ

新しいDocusaurusのプロジェクトでは、プロジェクトルートに`babel.config.ts`を自動生成

しています。

```js
// babel.config.ts
export default {
  presets: ['@docusaurus/core/lib/babel/preset'],
};
```

ほとんどの場合、この構成で問題なく動作します。Babelの設定をカスタマイズしたい場合（例：Flowのサポートを追加するなど）、このファイルを直接編集することができます。変更を有効にするには、Docusaurusの開発サーバーを再起動する必要があります。