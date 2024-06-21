---
id: neo4j-guide
title: Neo4jマニュアル
---

# Neo4j 使用マニュアル

このガイドでは、Neo4jの基本的な使用方法から応用的なテクニックまでを詳細に説明します。Neo4jは、グラフデータベースであり、ノード、リレーションシップ、およびプロパティを使用してデータを保存およびクエリします。

## 目次
1. [Neo4jのインストール](#neo4jのインストール)
    - [Linuxでのインストール](#linuxでのインストール)
    - [Windowsでのインストール](#windowsでのインストール)
    - [macOSでのインストール](#macosでのインストール)
2. [基本設定](#基本設定)
    - [初期設定とNeo4jサービスの起動](#初期設定とneo4jサービスの起動)
    - [設定ファイルの調整](#設定ファイルの調整)
3. [遠隔アクセスの設定](#遠隔アクセスの設定)
4. [ユーザーと権限の管理](#ユーザーと権限の管理)
5. [基本的なクエリ](#基本的なクエリ)
    - [ノードの作成](#ノードの作成)
    - [リレーションシップの作成](#リレーションシップの作成)
    - [データの取得](#データの取得)
    - [データの更新](#データの更新)
    - [データの削除](#データの削除)
6. [高度なクエリ](#高度なクエリ)
    - [パスのクエリ](#パスのクエリ)
    - [集計](#集計)
    - [パフォーマンスチューニング](#パフォーマンスチューニング)
7. [高度な使用方法](#高度な使用方法)
    - [トランザクション](#トランザクション)
    - [バックアップと復元](#バックアップと復元)
    - [レプリケーションと高可用性](#レプリケーションと高可用性)

## Neo4jのインストール

### Linuxでのインストール

1. Javaのインストール（Neo4jはJavaが必要です）。
    ```bash
    sudo apt-get update
    sudo apt-get install default-jdk
    ```

2. Neo4jのダウンロードとインストール。
    ```bash
    wget -O - https://debian.neo4j.com/neotechnology.gpg.key | sudo apt-key add -
    echo 'deb https://debian.neo4j.com stable 4.3' | sudo tee /etc/apt/sources.list.d/neo4j.list
    sudo apt-get update
    sudo apt-get install neo4j
    ```

3. Neo4jサービスを起動します。
    ```bash
    sudo systemctl start neo4j
    sudo systemctl enable neo4j
    ```

### Windowsでのインストール

1. Neo4jの公式サイト（[https://neo4j.com/download/](https://neo4j.com/download/)）からWindowsインストーラをダウンロードします。
2. インストーラを実行し、画面の指示に従ってインストールします。
3. インストール後、Neo4jを起動します。

### macOSでのインストール

1. Homebrewを使用してNeo4jをインストールします。
    ```bash
    brew install neo4j
    ```

2. Neo4jサービスを起動します。
    ```bash
    neo4j start
    ```

## 基本設定

### 初期設定とNeo4jサービスの起動

1. Neo4jの設定ファイル（通常は`/etc/neo4j/neo4j.conf`）を編集して初期設定を行います。
    ```bash
    sudo nano /etc/neo4j/neo4j.conf
    ```

2. 設定変更後、Neo4jサービスを再起動します。
    ```bash
    sudo systemctl restart neo4j
    ```

### 設定ファイルの調整

- バインドアドレスの設定
    ```conf
    dbms.default_listen_address=0.0.0.0
    ```

- パスワードの設定
    ```conf
    dbms.security.auth_enabled=true
    ```

## 遠隔アクセスの設定

遠隔アクセスを許可するために、必要なポート（通常は7474と7687）をファイアウォールで開放します。

```bash
# ファイアウォールの設定（例：UFW）
sudo ufw allow 7474/tcp
sudo ufw allow 7687/tcp
```

ユーザーと権限の管理
ユーザーの作成
Neo4jで新しいユーザーを作成し、適切な権限を設定します。

cypher

CREATE USER myuser SET PASSWORD 'mypassword' CHANGE NOT REQUIRED;
権限の付与
ユーザーにデータベースやテーブルへの権限を付与します。

cypher

GRANT ROLE admin TO myuser;
基本的なクエリ
ノードの作成
ノードを作成します。

cypher

CREATE (n:Person {name: 'Alice', age: 30});
リレーションシップの作成
ノード間にリレーションシップを作成します。

cypher

MATCH (a:Person {name: 'Alice'}), (b:Person {name: 'Bob'})
CREATE (a)-[:KNOWS]->(b);
データの取得
ノードやリレーションシップをクエリしてデータを取得します。

cypher

MATCH (n:Person) RETURN n;
データの更新
ノードのデータを更新します。

cypher

MATCH (n:Person {name: 'Alice'})
SET n.age = 31;
データの削除
ノードやリレーションシップを削除します。

cypher

MATCH (n:Person {name: 'Alice'})
DETACH DELETE n;
高度なクエリ
パスのクエリ
特定のパターンに一致するパスをクエリします。

cypher

MATCH p = (a:Person)-[:KNOWS]->(b:Person)
RETURN p;
集計
データを集計します。

cypher

MATCH (n:Person)
RETURN n.age, count(n);
パフォーマンスチューニング
クエリのパフォーマンスを向上させるための最適化を行います。

インデックスの作成

cypher

CREATE INDEX FOR (n:Person) ON (n.name);
プロファイリング

cypher

PROFILE MATCH (n:Person) RETURN n;
高度な使用方法
トランザクション
トランザクションを使用して複数のクエリをアトミックに実行します。

cypher

BEGIN;
CREATE (n:Person {name: 'Charlie', age: 25});
CREATE (m:Person {name: 'Dave', age: 35});
COMMIT;
バックアップと復元
Neo4jデータベースのバックアップと復元を行います。

バックアップ

sh

neo4j-admin backup --from=localhost --backup-dir=/backups --name=mybackup
復元

sh

neo4j-admin restore --from=/backups/mybackup --database=neo4j --force
レプリケーションと高可用性
Neo4jクラスタを設定して高可用性を実現します。

クラスタの設定（neo4j.confファイル）

conf

causal_clustering.minimum_core_cluster_size_at_formation=3
causal_clustering.minimum_core_cluster_size_at_runtime=3
causal_clustering.discovery_type=LIST
causal_clustering.initial_discovery_members=host1:5000,host2:5000,host3:5000
クラスタの起動

sh

neo4j start
以上で、Neo4jの基本的な使用方法と高度な操作についての説明を終わります。Neo4jは強力なグラフデータベースであり、効率的に使用するためには各機能を理解し、適切に活用することが重要です。