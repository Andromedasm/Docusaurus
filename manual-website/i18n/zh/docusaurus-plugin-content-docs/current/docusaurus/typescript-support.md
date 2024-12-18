---
id: docusaurus-typescript
title: Docusaurus TypeScript
---

# TypeScript サポート

DocusaurusはTypeScriptで書かれており、最上級クラスのTypeScriptサポートを提供します。

The minimum required version is TypeScript 5.1.

## 初期設定

DocusaurusはTypeScriptを使ったテーマコンポーネントの作成とその使用をサポートしています。初期設定用テンプレートがTypeScript版を提供している場合、`--typescript`フラグを使用することで直接TypeScript完全対応のサイトを初期設定できます。

```bash
npx create-docusaurus@latest my-website classic --typescript
```

以下は、既存のプロジェクトをTypeScriptに移行する方法についてのガイドです。

## セットアップ

Add the following packages to your project:

```bash
npm install --save-dev typescript @docusaurus/module-type-aliases @docusaurus/tsconfig @docusaurus/types
```

次に、`tsconfig.json`をプロジェクトのルートに以下の内容で追加しましょう。

```json
{
  "extends": "@docusaurus/tsconfig",
  "compilerOptions": {
    "baseUrl": "."
  }
}
```

実際には、Docusaurusはプロジェクトをコンパイルするためにこの`tsconfig.json`を使用しません。このファイルは、より良いエディタ体験のために追加されるにすぎません。ただし、`tsc`を実行して、自分でコードを確認するか、CIで確認するかを選択できます。

これでTypeScriptのテーマコンポーネントを書き始めることができます。

## 設定ファイルを入力する

It is possible to use a TypeScript config file in Docusaurus.

```ts
// docusaurus.config.ts
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'My Site',
  favicon: 'img/favicon.ico',

  /* Your site config here */

  presets: [
    [
      'classic',
      {
        /* Your preset config here */
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    /* Your theme config here */
  } satisfies Preset.ThemeConfig,
};

export default config;
```

It is also possible to use JSDoc type annotations within a `.js` file:

### ヒント

型注釈は非常に便利で、IDEが設定オブジェクトの型を理解するのに役立ちます。極上のIDE (VS Code、WebStorm、IntelliJなど) は、快適な自動補完体験を与えてくれます。

## TypeScript テーマコンポーネントをスイズリングする

TypeScriptテーマコンポーネントをサポートするテーマの場合、`--typescript`フラグをswizzleの最後に追加して、TypeScriptのソースコードを取得できます。たとえば、次のコマンドは`src/theme/Footer`以下に`index.tsx`と`styles.module.css`を生成します。

```bash
npm run swizzle @docusaurus/theme-classic Footer -- --typescript
```

Docusaurus公式テーマは全て、`theme-classic`・`theme-live-codeblock`・`theme-search-algolia`を含むTypeScriptテーマコンポーネントをサポートしています。あなたがDocusaurusテーマパッケージの作成者で、TypeScriptに対応させたいと考えている場合、ライフサイクルAPIの説明を参照してください。