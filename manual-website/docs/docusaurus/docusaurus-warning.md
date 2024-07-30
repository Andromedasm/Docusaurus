---
id: docusaurus-warning
title: Docusaurus注意書き
---

# 注意書き

Markdownの基本構文に加え、3つのコロンでテキストを囲み、その後にその種類を示すラベルを付けることによる、特別な注意書き構文が利用できます。

例：

:::note

_Markdown_ `構文`を使った**内容**については、 [この`api`](#)を参照してください。

:::

:::tip

_Markdown_ `構文` を使った**内容**については、 [この`api`](#)を参照してください。

:::

:::info

_Markdown_ `構文` を使った**内容**については、 [この`api`](#)を参照してください。

:::

:::warning

Some **content** with _Markdown_ `syntax`. [この`api`](#)を参照してください。

:::

:::danger

_Markdown_ `構文` を使った**内容**については、 [この`api`](#)を参照してください。

:::

### メモ

Markdown 構文 を使った内容については、 このapiを参照してください。

### ヒント

Markdown 構文 を使った内容については、 このapiを参照してください。

### 情報

Markdown 構文 を使った内容については、 このapiを参照してください。

### 警告

Some content with Markdown syntax. このapiを参照してください。

### 危険

Markdown 構文 を使った内容については、 このapiを参照してください。

## Prettierとの併用

Markdownファイルの整形にPrettierを使用している場合、Prettierがコードを自動整形して無効な注意書き構文にすることがあります。この問題を回避するには、開始ディレクティブと終了ディレクティブの周りに空白行を追加します。ここで紹介する例が、すべてコンテンツの周囲に空行があるのもこのためです。

```markdown
<!-- Prettierにより改変されません -->
:::note

Hello world

:::

<!-- Prettierはこれを -->
:::note
Hello world
:::

<!-- このように改変する場合があります -->
::: note Hello world:::
```

## タイトルの明記

オプションでタイトルを指定することもできます。

```markdown
:::note[_Markdown_ `構文`を**使った**タイトル！]

_Markdown_ `構文`を使った**内容**

:::
```

Markdown 構文を使ったタイトル！
Markdown 構文を使った内容

## 入れ子になった注意書き

注意書きは入れ子にすることができます。親の注意書きのレベルごとに、コロンの数を増やしてください。

```markdown
:::::info[親]

親の内容

::::danger[子]

子の内容

:::tip[孫]

孫の内容

:::

::::

:::::
```

親
親の内容

子
子の内容

孫
孫の内容

## Admonitions with MDX

MDX内でも注意書きを使用できます！

```jsx
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::tip[タブ内で注意書きを使用]

<Tabs>
  <TabItem value="apple" label="リンゴ">リンゴです🍎</TabItem>
  <TabItem value="orange" label="ミカン">ミカンです🍊</TabItem>
  <TabItem value="banana" label="バナナ">バナナです🍌</TabItem>
</Tabs>

:::
```

タブ内で注意書きを使用
リンゴ
ミカン
バナナ
リンゴです🍎

## JSXでの使用方法

Markdownの外では、`@theme/Admonition` コンポーネントを使用して同じ出力を得ることができます。

```jsx
// MyReactPage.jsx
import Admonition from '@theme/Admonition';

export default function MyReactPage() {
  return (
    <div>
      <Admonition type="info">
        <p>Some information</p>
      </Admonition>
    </div>
  );
}
```

使用可能なタイプは以下の通りです: note, tip, danger, info, warning。オプションで、JSX要素や文字列、タイトルを指定できます。

```jsx
// MyReactPage.jsx
<Admonition type="tip" icon="💡" title="Did you know...">
  Use plugins to introduce shorter syntax for the most commonly used JSX elements in your project.
</Admonition>
```

💡Did you know...
Use plugins to introduce shorter syntax for the most commonly used JSX elements in your project.

## 注意書きのカスタマイズ

注意書きには、解析とレンダリングの2種類のカスタマイズが可能です。

### レンダリング動作のカスタマイズ

各個別の注意書きタイプがどのようにレンダリングされるかをスウィズルを通じてカスタマイズできます。多くの場合、単純なラッパーを使用することで目標を達成できます。例えば、以下の例では、情報の注意書きのみアイコンを変更します。

```jsx
// src/theme/Admonition.js
import React from 'react';
import Admonition from '@theme-original/Admonition';
import MyCustomNoteIcon from '@site/static/img/info.svg';

export default function AdmonitionWrapper(props) {
  if (props.type !== 'info') {
    return <Admonition title="My Custom Admonition Title" {...props} />;
  }
  return <Admonition icon={<MyCustomNoteIcon />} {...props} />;
}
```

### 解析動作のカスタマイズ

注意書きはRemarkプラグインで実装されています。このプラグインは設定可能です。特定のコンテンツプラグイン（docs、blog、pages）用にRemarkプラグインをカスタマイズするには、`admonitions` キーを通じてオプションを渡します。

```js
// docusaurus.config.js
export default {
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          admonitions: {
            keywords: ['note', 'tip', 'info', 'warning', 'danger'],
            extendDefaults: true,
          },
        },
      },
    ],
  ],
};
```

プラグインは以下のオプションを受け入れます。

- keywords: 注意書きのタイプとして使用できるキーワードの配列。
- extendDefaults: 提供されたオプション（キーワードなど）を既存のデフォルトにマージするかどうか。デフォルトはtrueです。

キーワードはAdmonitionコンポーネントの`type`プロップとして渡されます。

### カスタム注意書きタイプコンポーネント

デフォルトでは、テーマは`:::my-custom-admonition`のようなカスタム注意書きキーワードを処理する方法を知りません。各注意書きキーワードをReactコンポーネントにマッピングして、テーマがそれらをレンダリングする方法を理解できるようにする必要があります。

以下の設定を使用して、新しい注意書きタイプ`my-custom-admonition`を登録した場合:

```js
// docusaurus.config.js
export default {
  // ...
  presets: [
    [
      'classic',
      {
        // ...
        docs: {
          admonitions: {
            keywords: ['my-custom-admonition'],
            extendDefaults: true,
          },
        },
      },
    ],
  ],
};
```

次に、対応するReactコンポーネントを作成して提供します（残念ながら、これはReactコンポーネントファイルではないため、スウィズル可能ではありません）。

```jsx
// src/theme/Admonition/Types.js
import React from 'react';
import DefaultAdmonitionTypes from '@theme-original/Admonition/Types';

function MyCustomAdmonition(props) {
  return (
    <div style={{border: 'solid red', padding: 10}}>
      <h5 style={{color: 'blue', fontSize: 30}}>{props.title}</h5>
      <div>{props.children}</div>
    </div>
  );
}

const AdmonitionTypes = {
  ...DefaultAdmonitionTypes,

  // すべてのカスタム注意書きタイプをここに追加...
  // デフォルトのものも上書きできます
  'my-custom-admonition': MyCustomAdmonition,
};

export default AdmonitionTypes;
```

これで、新しい注意書きキーワードをMarkdownファイル内で使用でき、カスタムロジックで解析およびレンダリングされます。

```markdown
:::my-custom-admonition[My Title]

It works!

:::
```

My Title
It works!