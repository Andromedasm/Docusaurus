---
id: docusaurus-mermaid
title: Docusaurus mermaid
---

# 図

図は、コードブロック内のMermaidを使用して描画することができます。

## インストール

```bash
npm install --save @docusaurus/theme-mermaid
```

### Mermaid機能を有効化

プラグイン`@docusaurus/theme-mermaid`を追加し、`docusaurus.config.js`内の`markdown.mermaid`を`true`に設定することでMermaid機能を有効化できます。

```js
// docusaurus.config.js
export default {
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
};
```

## 使い方

言語を`mermaid`に設定した次のようなコードブロックを追加します。

### Example Mermaid diagram

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

A  
B  
C  
D

Mermaidの構文の詳細については、[Mermaidの構文ドキュメント](https://mermaid-js.github.io/mermaid/#/)を参照してください。

## テーマ

`docusaurus.config.js`内の`themeConfig`の中にある`mermaid.theme`の値を設定することで、図のダーク及びライトのテーマを変更することが可能です。ライトモードとダークモードの両方にテーマを設定することができます。

```js
// docusaurus.config.js
export default {
  themeConfig: {
    mermaid: {
      theme: {light: 'neutral', dark: 'forest'},
    },
  },
};
```

Mermaid図のテーマ設定の詳細については、[Mermaidテーマ設定ドキュメント](https://mermaid-js.github.io/mermaid/#/theming)を参照してください。

## Mermaidの設定

次のような`mermaid.options`内のオプションは、`mermaid.initialize`に直接渡されます。

```js
// docusaurus.config.js
export default {
  themeConfig: {
    mermaid: {
      options: {
        maxTextSize: 50,
      },
    },
  },
};
```

利用可能な設定オプションについては、[Mermaid設定ドキュメント](https://mermaid-js.github.io/mermaid/#/setup)と[Mermaid設定型](https://github.com/mermaid-js/mermaid/blob/develop/typings/mermaidAPI.d.ts)を参照してください。

## Dynamic Mermaid Component

動的な図を生成するには、Mermaidコンポーネントを使用できます。

### Example of dynamic Mermaid component

```jsx
import Mermaid from '@theme/Mermaid';

<Mermaid
  value={`graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;`}
/>
```