---
id: docusaurus-links
title: Docusaurus links
---

# Markdown リンク

他のページへのリンクを追加する方法には、URLパスとファイルパスの2つがあります。

- [他のドキュメントへのURLパス](./installation)
- [他のドキュメントへのファイルパス](./installation.mdx)

URLパスはDocusaurusによって処理されず、`<a href="./installation">` に直接レンダリングされます。つまり、ファイルシステムの場所ではなく、ページのURLの場所に従って解決されます。

同じプラグインによって含まれる別のMarkdownファイルを参照したい場合は、リンク先のドキュメントの相対パスを使用できます。DocusaurusのMarkdownローダーは、ファイルパスをターゲットファイルのURLパスに変換し（そのため.md拡張子を削除します）。

例えば、`docs/folder/doc1.md` にいて、`docs/folder/doc2.md`、`docs/folder/subfolder/doc3.md`、`docs/otherFolder/doc4.md` を参照したい場合：

```markdown
docs/folder/doc1.md
I am referencing a [document](doc2.mdx).

Reference to another [document in a subfolder](subfolder/doc3.mdx).

[Relative document](../otherFolder/doc4.mdx) referencing works as well.
```

相対ファイルパスは現在のファイルのディレクトリに対して解決されます。一方、絶対ファイルパスは通常 `docs/`、`blog/` または `i18n/zh-Hans/plugin-content-docs/current` のようなコンテンツルートに対して解決されます。

絶対ファイルパスはサイトディレクトリに対しても相対的に解決できます。ただし、`/docs/` や `/blog/` で始まるリンクは、新しいドキュメントバージョンを作成したり、ローカライズしたりする場合に手動で更新する必要があるため、ポータブルではないことに注意してください。

コンテンツルートに対して相対的に [リンク](/otherFolder/doc4.mdx) を書くことができます（`/docs/`）。

サイトディレクトリに対して相対的に [リンク](/docs/otherFolder/doc4.mdx) を書くこともできますが、推奨されません。

相対ファイルパス（.md拡張子付き）を使用することは、以下の利点があります：

- リンクはGitHubインターフェースや多くのMarkdownエディタで動作し続けます
- ファイルのスラッグをカスタマイズしても、すべてのリンクを更新する必要がありません
- フォルダ間でファイルを移動する場合、エディタによって追跡され、一部のエディタはファイルリンクを自動的に更新することがあります
- バージョン管理されたドキュメントは、同じバージョンの他のドキュメントへのリンクを維持します
- トレイリングスラッシュ設定を更新すると、相対URLリンクは非常に壊れやすくなります

> 警告
>
> Markdownファイルの参照は、ソースファイルとターゲットファイルが同じプラグインインスタンスによって処理されている場合にのみ機能します。これはMarkdown処理アーキテクチャの技術的制限であり、将来的に修正される予定です。プラグイン間でファイルをリンクする場合（例えば、ブログ記事からドキュメントページへのリンク）、URLリンクを使用する必要があります。