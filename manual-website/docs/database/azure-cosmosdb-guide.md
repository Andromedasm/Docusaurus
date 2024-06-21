---
id: azure-cosmosdb-guide
title: Azure Cosmos DB使用説明書
---

# Azure Cosmos DB 使用説明書

このガイドでは、Azure Cosmos DBの基本的な使用方法から応用的なテクニックまでを詳細に説明します。Azure Cosmos DBは、グローバルに分散されたマルチモデルデータベースサービスです。

## 目次
1. [Azure Cosmos DBの作成](#azure-cosmos-dbの作成)
2. [基本設定](#基本設定)
    - [データベースとコンテナの作成](#データベースとコンテナの作成)
    - [設定ファイルの調整](#設定ファイルの調整)
3. [遠隔アクセスの設定](#遠隔アクセスの設定)
4. [ユーザーと権限の管理](#ユーザーと権限の管理)
5. [基本的なクエリ](#基本的なクエリ)
    - [データの追加](#データの追加)
    - [データの取得](#データの取得)
    - [データの更新](#データの更新)
    - [データの削除](#データの削除)
6. [高度なクエリ](#高度なクエリ)
    - [フィルタリングとソート](#フィルタリングとソート)
    - [集計](#集計)
7. [高度な使用方法](#高度な使用方法)
    - [パーティションとスケーリング](#パーティションとスケーリング)
    - [マルチモデルの使用](#マルチモデルの使用)
    - [パフォーマンスチューニング](#パフォーマンスチューニング)

## Azure Cosmos DBの作成

### 1. AzureポータルでのCosmos DBアカウントの作成

1. Azureポータルにサインインします。
2. 「リソースの作成」ボタンをクリックし、「データベース」を選択します。
3. 「Azure Cosmos DB」を選択し、「作成」をクリックします。
4. 必要な情報（サブスクリプション、リソースグループ、アカウント名、APIなど）を入力し、「確認と作成」をクリックします。
5. デプロイが完了するまで待ちます。

## 基本設定

### データベースとコンテナの作成

1. 作成したCosmos DBアカウントに移動します。
2. 左側のナビゲーションメニューから「データエクスプローラー」を選択します。
3. 「新しいデータベース」をクリックし、データベースIDを入力し、「OK」をクリックします。
4. データベースを選択し、「新しいコンテナー」をクリックします。
5. コンテナIDとパーティションキーを入力し、「OK」をクリックします。

### 設定ファイルの調整

Azure Cosmos DBはマネージドサービスであり、特定の設定ファイルは必要ありません。ただし、SDKや接続文字列の設定が必要です。

## 遠隔アクセスの設定

Azure Cosmos DBはインターネット経由でアクセスできます。Azureポータルでネットワーク設定を確認し、必要に応じてアクセス制御を行います。

1. Cosmos DBアカウントに移動します。
2. 「ファイアウォールと仮想ネットワーク」設定で、アクセスを許可するIPアドレスや仮想ネットワークを追加します。

## ユーザーと権限の管理

### ユーザーの作成

Cosmos DBでは、リソーストークンを使用してユーザーごとのアクセスを管理できます。

1. Azureポータルの「データエクスプローラー」で対象のデータベースを選択します。
2. 「ユーザー」を選択し、「新しいユーザー」をクリックします。
3. ユーザーIDを入力し、「OK」をクリックします。

### 権限の付与

1. 対象のユーザーを選択し、「権限」をクリックします。
2. 権限のID、許可するリソースの種類、アクセスレベル（読み取り、書き込みなど）を設定し、「OK」をクリックします。

## 基本的なクエリ

### データの追加

データをコンテナに追加するには、Azure SDKを使用します。以下はJavaScript SDKの例です。

```javascript
const { CosmosClient } = require("@azure/cosmos");
const client = new CosmosClient({ endpoint: "<your-endpoint>", key: "<your-key>" });

const database = client.database("<your-database>");
const container = database.container("<your-container>");

async function addItem(item) {
    const { resource: createdItem } = await container.items.create(item);
    console.log(`Created item with id: ${createdItem.id}`);
}

const item = { id: "1", name: "John Doe", age: 30 };
addItem(item);
```

データの取得
コンテナからデータを取得します。

javascript

async function getItem(id) {
const { resource: item } = await container.item(id).read();
console.log(`Retrieved item: ${item.id}`);
}

getItem("1");
データの更新
データを更新します。

javascript

async function updateItem(id, updatedItem) {
const { resource: item } = await container.item(id).replace(updatedItem);
console.log(`Updated item: ${item.id}`);
}

const updatedItem = { id: "1", name: "Jane Doe", age: 32 };
updateItem("1", updatedItem);
データの削除
データを削除します。

javascript

async function deleteItem(id) {
await container.item(id).delete();
console.log(`Deleted item: ${id}`);
}

deleteItem("1");
高度なクエリ
フィルタリングとソート
SQLクエリを使用してデータをフィルタリングおよびソートします。

javascript

async function queryItems() {
const querySpec = {
query: "SELECT * FROM c WHERE c.age > @age ORDER BY c.name",
parameters: [
{ name: "@age", value: 25 }
]
};

    const { resources: items } = await container.items.query(querySpec).fetchAll();
    items.forEach(item => console.log(`Item: ${item.id}, Name: ${item.name}, Age: ${item.age}`));
}

queryItems();
集計
集計クエリを実行します。

javascript

async function aggregateItems() {
const querySpec = {
query: "SELECT VALUE COUNT(1) FROM c WHERE c.age > @age",
parameters: [
{ name: "@age", value: 25 }
]
};

    const { resources: count } = await container.items.query(querySpec).fetchAll();
    console.log(`Count: ${count[0]}`);
}

aggregateItems();
高度な使用方法
パーティションとスケーリング
データをパーティション化してスケーラビリティを向上させます。コンテナ作成時にパーティションキーを設定します。

javascript

const partitionKey = { kind: "Hash", paths: ["/category"] };

async function createContainer(database) {
const { resource: container } = await database.containers.createIfNotExists({
id: "your-container",
partitionKey,
});
console.log(`Created container: ${container.id}`);
}

createContainer(database);
マルチモデルの使用
Cosmos DBは、ドキュメント、グラフ、キー・バリュー、カラムファミリなどのマルチモデルをサポートします。

グラフモデル: Gremlin APIを使用してグラフデータを操作します。
キー・バリューモデル: テーブルAPIを使用してキー・バリューデータを操作します。
カラムファミリモデル: Cassandra APIを使用してカラムファミリデータを操作します。
パフォーマンスチューニング
インデックスの設定: 適切なインデックスを設定してクエリパフォーマンスを向上させます。
スループットの調整: スループット（RUs）を動的に調整して、コストとパフォーマンスのバランスを最適化します。
データモデリング: データアクセスパターンに基づいてデータモデルを最適化します。
以上で、Azure Cosmos DBの基本的な使用方法と高度な操作についての説明を終わります。Cosmos DBは強力で柔軟なデータベースサービスであり、効率的に使用するためには各機能を理解し、適切に活用することが重要です。
