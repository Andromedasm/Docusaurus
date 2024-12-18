---
id: docusaurus-tabs
title: Docusaurus Tabs
---

# タブ

Docusaurus は、MDX を使って Markdown 内で使用できる `<Tabs>` コンポーネントを提供しています。

```jsx
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="apple" label="Apple" default>
    This is an apple 🍎
  </TabItem>
  <TabItem value="orange" label="Orange">
    This is an orange 🍊
  </TabItem>
  <TabItem value="banana" label="Banana">
    This is a banana 🍌
  </TabItem>
</Tabs>
```

- Apple
- Orange
- Banana
- This is an apple 🍎

また、Tabs コンポーネントに `values` と `defaultValue` のプロップを提供することもできます。

```jsx
<Tabs
  defaultValue="apple"
  values={[
    {label: 'Apple', value: 'apple'},
    {label: 'Orange', value: 'orange'},
    {label: 'Banana', value: 'banana'},
  ]}>
  <TabItem value="apple">This is an apple 🍎</TabItem>
  <TabItem value="orange">This is an orange 🍊</TabItem>
  <TabItem value="banana">This is a banana 🍌</TabItem>
</Tabs>
```

- Apple
- Orange
- Banana
- This is an apple 🍎

Tabs のプロップは TabItem のプロップよりも優先されます。

> ヒント
>
> デフォルトでは、すべてのタブはビルドプロセス中にすぐにレンダリングされ、検索エンジンは隠れたタブもインデックス化できます。
>
> デフォルトタブのみをレンダリングするには、`<Tabs lazy />` を使用します。

### デフォルトタブの表示

最初のタブはデフォルトで表示されます。この動作を上書きするには、タブアイテムの1つに `default` を追加してデフォルトタブを指定できます。また、Tabs コンポーネントの `defaultValue` プロップを任意のラベル値に設定できます。例えば、上記の例では、`value="apple"` タブに `default` を設定するか、`tabs` に `defaultValue="apple"` を設定すると、"Apple" タブがデフォルトで開きます。

Docusaurus は、Tabs に `defaultValue` が提供されているが、それが存在しない値を参照している場合、エラーをスローします。どのタブもデフォルトで表示されないようにするには、`defaultValue={null}` を使用します。

### タブ選択の同期

同じ種類のタブの選択を同期させたい場合があります。例えば、Windows ユーザーと macOS ユーザー向けに異なる指示を提供し、OS 固有の指示タブを一度に変更したい場合などです。そのためには、すべての関連タブに同じ `groupId` プロップを与えることができます。これを行うと、この選択は `localStorage` に保存され、同じ `groupId` を持つすべての `<Tabs>` インスタンスは、いずれかの値が変更されると自動的に更新されます。なお、グループ ID はグローバルに名前空間化されています。

```jsx
<Tabs groupId="operating-systems">
  <TabItem value="win" label="Windows">Use Ctrl + C to copy.</TabItem>
  <TabItem value="mac" label="macOS">Use Command + C to copy.</TabItem>
</Tabs>

<Tabs groupId="operating-systems">
  <TabItem value="win" label="Windows">Use Ctrl + V to paste.</TabItem>
  <TabItem value="mac" label="macOS">Use Command + V to paste.</TabItem>
</Tabs>
```

- Windows
- macOS
- Use Ctrl + C to copy.
- Windows
- macOS
- Use Ctrl + V to paste.

同じ `groupId` を持つすべてのタブグループで、可能な値が同じである必要はありません。あるタブグループが同じ `groupId` を持つ別のタブグループに存在しない値を選択すると、欠けている値を持つタブグループはタブを変更しません。次の例で確認できます。Linux を選択してみてください。上記のタブグループは変更されません。

```jsx
<Tabs groupId="operating-systems">
  <TabItem value="win" label="Windows">
    I am Windows.
  </TabItem>
  <TabItem value="mac" label="macOS">
    I am macOS.
  </TabItem>
  <TabItem value="linux" label="Linux">
    I am Linux.
  </TabItem>
</Tabs>
```

- Windows
- macOS
- Linux
- I am Windows.

異なるグループ ID を持つタブ選択は互いに干渉しません。

```jsx
<Tabs groupId="operating-systems">
  <TabItem value="win" label="Windows">Windows in windows.</TabItem>
  <TabItem value="mac" label="macOS">macOS is macOS.</TabItem>
</Tabs>

<Tabs groupId="non-mac-operating-systems">
  <TabItem value="win" label="Windows">Windows is windows.</TabItem>
  <TabItem value="unix" label="Unix">Unix is unix.</TabItem>
</Tabs>
```

- Windows
- macOS
- Windows in windows.
- Windows
- Unix
- Windows is windows.

### タブのカスタマイズ

特定のタブセットの外観をカスタマイズしたい場合があります。その場合、`className` プロップに文字列を渡すと、指定された CSS クラスが Tabs コンポーネントに追加されます。

```jsx
<Tabs className="unique-tabs">
  <TabItem value="Apple">This is an apple 🍎</TabItem>
  <TabItem value="Orange">This is an orange 🍊</TabItem>
  <TabItem value="Banana">This is a banana 🍌</TabItem>
</Tabs>
```

- Apple
- Orange
- Banana
- This is an apple 🍎

### タブの見出しのカスタマイズ

各タブの見出しを独立してカスタマイズすることもできます。`attributes` フィールドを使用して、追加のプロップを見出しに渡すことができます。これらのプロップは、Tabs の `values` プロップを通じて、または各 TabItem のプロップを通じて渡すことができます。

```jsx
some-doc.mdx
import styles from './styles.module.css';

<Tabs>
  <TabItem value="apple" label="Apple" attributes={{className: styles.red}}>
    This is an apple 🍎
  </TabItem>
  <TabItem value="orange" label="Orange" attributes={{className: styles.orange}}>
    This is an orange 🍊
  </TabItem>
  <TabItem value="banana" label="Banana" attributes={{className: styles.yellow}}>
    This is a banana 🍌
  </TabItem>
</Tabs>
```

```css
styles.module.css
.red {
  color: red;
}
.red[aria-selected='true'] {
  border-bottom-color: red;
}

.orange {
  color: orange;
}
.orange[aria-selected='true'] {
  border-bottom-color: orange;
}

.yellow {
  color: yellow;
}
.yellow[aria-selected='true'] {
  border-bottom-color: yellow;
}
```

- Apple
- Orange
- Banana
- This is an apple 🍎

> ヒント
>
> `className` は他のデフォルトクラス名とマージされます。CSS 属性セレクタとペアにしたカスタムデータフィールド（`{'data-value': 'apple'}`）を使用することもできます。

```css
styles.module.css
li[role='tab'][data-value='apple'] {
  color: red;
}
```

### クエリ文字列

選択されたタブを URL の検索パラメータに保持することができます。これにより、特定のタブを事前選択してページへのリンクを共有することができます。例えば、Android アプリからドキュメントへのリンクを共有する際に、Android タブが事前選択されるようにすることができます。この機能はアンカーリンクを提供しません。ブラウザはタブにスクロールしません。

この機能を有効にし、使用する検索パラメータ名を定義するには、`queryString` プロップを使用します。

```jsx
<Tabs queryString="current-os">
  <TabItem value="android" label="Android">
    Android
  </TabItem>
  <TabItem value="

ios" label="iOS">
    iOS
  </TabItem>
</Tabs>
```

- Android
- iOS
- Android

タブがクリックされると、URL の末尾に検索パラメータが追加されます: `?current-os=android` または `?current-os=ios`.

> ヒント
>
> `queryString` は `groupId` と一緒に使用できます。
>
> 便利なことに、`queryString` プロップが `true` の場合、`groupId` の値がフォールバックとして使用されます。

```jsx
<Tabs groupId="current-os" queryString>
  <TabItem value="android" label="Android">
    Android
  </TabItem>
  <TabItem value="ios" label="iOS">
    iOS
  </TabItem>
</Tabs>
```

- Android
- iOS
- Android

ページが読み込まれると、タブのクエリ文字列の選択は `groupId` の選択よりも優先されて復元されます（`localStorage` を使用）。