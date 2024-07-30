---
id: docusaurus-heading
title: Docusaurus見出しと目次
---

# Markdown 見出し

Markdown の見出しを通常通り使用できます。

## レベル 2 タイトル

### レベル 3 タイトル

#### レベル 4 タイトル

Markdownの各見出しは、目次の項目として表示されます。

## 見出しID

各見出しにはIDがあり、自動生成または明示的に指定することができます。見出しIDによって、以下のようなMarkdownやJSXで特定の文書の見出しにリンクすることができます。

```markdown
[link](#heading-id)

<Link to="#heading-id">link</Link>
```

デフォルトでは、Docusaurusは見出しのテキストに基づいて見出しIDを生成します。例えば、「### Hello World」は「hello-world」というIDを持つことになります。

生成されたIDには次のようないくつかの制限があります。

- IDの見た目が悪い場合がある
- 既存のIDを更新することなく、テキストを変更したり翻訳したりしたくてもできない場合がある

特別なMarkdown構文を使用すると、明示的な見出しIDを設定できます。

```markdown
### ハローワールド {#my-explicit-id}
```

> ヒント
>
> `write-heading-ids` CLIコマンドを使用すると、すべてのMarkdown文書に明示的なIDを追加することができます。

### IDの衝突を避ける

生成された見出しIDは各ページで一意であることが保証されますが、カスタムIDを使用する場合は、それぞれが各ページに1つだけあるようにしてください。そうしないと、同じIDを持つ2つのDOM要素が存在することになり、これは無効なHTMLセマンティクスであり、一つの見出しがリンク不能となることに繋がります。

## 目次の見出しレベル

各Markdownドキュメントは、右上の隅に目次を表示します。デフォルトでは、この目次にはh2およびh3の見出しのみが表示されますが、ページ構造の概要を知るには十分でしょう。見出しの表示範囲を変更する必要がある場合、最小および最大の見出しレベルをページごとまたはグローバルにカスタマイズすることができます。

特定のページの見出しレベルを設定するには、フロントマター内で`toc_min_heading_level`と`toc_max_heading_level`を使用します。

```markdown
myDoc.md
---
# h2〜h5の見出しを表示
toc_min_heading_level: 2
toc_max_heading_level: 5
---
```

_すべての_ページの見出しレベルを設定するには、以下のように`themeConfig.tableOfContents`オプションを使用します。

```js
// docusaurus.config.js
export default {
  themeConfig: {
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 5,
    },
  },
};
```

全体オプションを設定した場合でも、フロントマターによって局所的に上書きすることができます。

> メモ
>
> `themeConfig`内のオプションは、インライン見出しを含むサイト上のすべての目次に適用されますが、フロントマター内のオプションは右上の見出しにのみに影響します。各`<TOCInline />`コンポーネントをカスタマイズするには、`minHeadingLevel`と`maxHeadingLevel`というプロパティを使用する必要があります。

## インラインの目次

また、MDXの利用により、Markdown文書内に直接目次を表示することもできます。

`toc` 変数は任意のMDXドキュメントで利用可能であり、そのドキュメント内のすべての見出しを含みます。デフォルトでは、目次にはh2およびh3の見出しのみが表示されますが、個々の`TOCInline`コンポーネントに対して`minHeadingLevel`や`maxHeadingLevel`を設定することで、表示される見出しレベルを変更できます。

```jsx
import TOCInline from '@theme/TOCInline';

<TOCInline toc={toc} />
```

```markdown
Markdown 見出し
見出しID
目次の見出しレベル
インラインの目次
目次の生成をカスタマイズ
Example Section 1
Example Subsection 1 a
Example Subsection 1 b
Example Subsection 1 c
Example Section 2
Example Subsection 2 a
Example Subsection 2 b
Example Subsection 2 c
Example Section 3
Example Subsection 3 a
Example Subsection 3 b
Example Subsection 3 c
```

`toc` グローバルは見出し項目のリストに過ぎません。

```typescript
declare const toc: {
  value: string;
  id: string;
  level: number;
}[];
```

`toc` グローバルはフラットな配列なので、不要なノードを切り取ったり、追加のノードを挿入したり、新しい目次ツリーを作成したりするのが簡単です。

```jsx
import TOCInline from '@theme/TOCInline';

<TOCInline
  // h2 と h4 見出しのみを表示
  toc={toc.filter((node) => node.level === 2 || node.level === 4)}
  minHeadingLevel={2}
  // デフォルトのh2およびh3見出しに加えてh4見出しを表示
  maxHeadingLevel={4}
/>
```

```markdown
Markdown 見出し
目次の見出しレベル
インラインの目次
目次の生成をカスタマイズ
Example Section 1
Example subsubsection 1 a I
Example subsubsection 1 a II
Example subsubsection 1 a III
Example subsubsection 1 b I
Example subsubsection 1 b II
Example subsubsection 1 b III
Example subsubsection 1 c I
Example subsubsection 1 c II
Example subsubsection 1 c III
Example Section 2
Example subsubsection 2 a I
Example subsubsection 2 a II
Example subsubsection 2 a III
Example subsubsection 2 b I
Example subsubsection 2 b II
Example subsubsection 2 b III
Example subsubsection 2 c I
Example subsubsection 2 c II
Example subsubsection 2 c III
Example Section 3
Example subsubsection 3 a I
Example subsubsection 3 a II
Example subsubsection 3 a III
Example subsubsection 3 b I
Example subsubsection 3 b II
Example subsubsection 3 b III
Example subsubsection 3 c I
Example subsubsection 3 c II
Example subsubsection 3 c III
目次の生成をカスタマイズ
```

目次はRemarkプラグインを使用してMarkdownソースを解析することで生成されます。誤検知や見逃しが発生する既知のエッジケースがあります。

非表示領域内のMarkdown見出しは目次に表示され続けます。例えば、Tabsやdetails内の見出しは除外されません。

非Markdown見出しは目次に表示されません。このことを利用して、上記の問題に対処することができます。

```html
<details>
  <summary>Some details containing headings</summary>
  <h2 id="#heading-id">I'm a heading that will not show up in the TOC</h2>
  Some content...
</details>
```

追加の見出しを挿入したり特定の見出しを無視したりする機能は進行中の作業です。この機能が重要な場合は、この問題にあなたのユースケースを報告してください。

> 警告
>
> 以下は現在のページに目次項目を追加するためのダミーコンテンツです。

```markdown
Example Section 1
Lorem ipsum

Example Subsection 1 a
Lorem ipsum

Example subsubsection 1 a I
Example subsubsection 1 a II
Example subsubsection 1 a III
Example Subsection 1 b
Lorem ipsum

Example subsubsection 1 b I
Example subsubsection 1 b II
Example subsubsection 1 b III
Example Subsection 1 c
Lorem ipsum

Example subsubsection 1 c I
Example subsubsection 1 c II
Example subsubsection 1 c III
Example Section 2
Lorem ipsum

Example Subsection 2 a
Lorem ipsum

Example subsubsection 2 a I


Example subsubsection 2 a II
Example subsubsection 2 a III
Example Subsection 2 b
Lorem ipsum

Example subsubsection 2 b I
Example subsubsection 2 b II
Example subsubsection 2 b III
Example Subsection 2 c
Lorem ipsum

Example subsubsection 2 c I
Example subsubsection 2 c II
Example subsubsection 2 c III
Example Section 3
Lorem ipsum

Example Subsection 3 a
Lorem ipsum

Example subsubsection 3 a I
Example subsubsection 3 a II
Example subsubsection 3 a III
Example Subsection 3 b
Lorem ipsum

Example subsubsection 3 b I
Example subsubsection 3 b II
Example subsubsection 3 b III
Example Subsection 3 c
Lorem ipsum

Example subsubsection 3 c I
Example subsubsection 3 c II
Example subsubsection 3 c III
```