---
id: apache-hive-guide
title: Apache Hiveマニュアル
---

# Apache Hive 使用マニュアル

このガイドでは、Apache Hiveの基本的な使用方法から応用的なテクニックまでを詳細に説明します。Apache Hiveは、大規模データの管理とクエリを容易にするためのデータウェアハウスソフトウェアです。

## 目次
1. [Apache Hiveのインストール](#apache-hiveのインストール)
    - [前提条件](#前提条件)
    - [Linuxでのインストール](#linuxでのインストール)
    - [Windowsでのインストール](#windowsでのインストール)
    - [macOSでのインストール](#macosでのインストール)
2. [基本設定](#基本設定)
    - [初期設定とHiveサービスの起動](#初期設定とhiveサービスの起動)
    - [設定ファイルの調整](#設定ファイルの調整)
3. [遠隔アクセスの設定](#遠隔アクセスの設定)
4. [ユーザーと権限の管理](#ユーザーと権限の管理)
    - [ユーザーの作成](#ユーザーの作成)
    - [権限の付与](#権限の付与)
5. [基本的なクエリ](#基本的なクエリ)
    - [データベースとテーブルの作成](#データベースとテーブルの作成)
    - [データの挿入](#データの挿入)
    - [データの取得](#データの取得)
    - [データの更新](#データの更新)
    - [データの削除](#データの削除)
6. [高度なクエリ](#高度なクエリ)
    - [ジョイン](#ジョイン)
    - [集計](#集計)
    - [サブクエリ](#サブクエリ)
7. [高度な使用方法](#高度な使用方法)
    - [パーティションとバケット](#パーティションとバケット)
    - [ユーザー定義関数（UDF）](#ユーザー定義関数udf)
    - [パフォーマンスチューニング](#パフォーマンスチューニング)

## Apache Hiveのインストール

### 前提条件

Apache Hiveを使用する前に、Hadoopがインストールされている必要があります。Hadoopのインストール方法については、[Apache Hadoop使用説明書](#apache-hadoopのインストール)を参照してください。

### Linuxでのインストール

1. Javaのインストール（HiveはJavaが必要です）。
    ```bash
    sudo apt-get update
    sudo apt-get install default-jdk
    ```

2. Hiveのダウンロードと解凍。
    ```bash
    wget https://downloads.apache.org/hive/hive-3.1.2/apache-hive-3.1.2-bin.tar.gz
    tar -xzvf apache-hive-3.1.2-bin.tar.gz
    sudo mv apache-hive-3.1.2-bin /usr/local/hive
    ```

3. 環境変数の設定。
    ```bash
    echo "export HIVE_HOME=/usr/local/hive" >> ~/.bashrc
    echo "export PATH=\$PATH:\$HIVE_HOME/bin" >> ~/.bashrc
    source ~/.bashrc
    ```

### Windowsでのインストール

1. Hiveの公式サイト（[https://hive.apache.org/downloads.html](https://hive.apache.org/downloads.html)）からWindows用のバイナリをダウンロードします。
2. ダウンロードしたZIPファイルを解凍し、適当なフォルダに配置します。
3. 環境変数の設定（システムプロパティから環境変数を設定します）。

### macOSでのインストール

1. Homebrewを使用してHiveをインストールします。
    ```bash
    brew install hive
    ```

2. 環境変数の設定。
    ```bash
    echo "export HIVE_HOME=/usr/local/Cellar/hive/3.1.2" >> ~/.bash_profile
    echo "export PATH=\$PATH:\$HIVE_HOME/bin" >> ~/.bash_profile
    source ~/.bash_profile
    ```

## 基本設定

### 初期設定とHiveサービスの起動

1. Metastoreデータベースの設定。
    ```bash
    schematool -initSchema -dbType derby
    ```

2. Hiveシェルの起動。
    ```bash
    hive
    ```

### 設定ファイルの調整

Hiveの設定ファイルは通常、`$HIVE_HOME/conf/hive-site.xml`にあります。

- 設定ファイルの編集
    ```xml
    <configuration>
        <property>
            <name>javax.jdo.option.ConnectionURL</name>
            <value>jdbc:derby:;databaseName=metastore_db;create=true</value>
        </property>
        <property>
            <name>javax.jdo.option.ConnectionDriverName</name>
            <value>org.apache.derby.jdbc.EmbeddedDriver</value>
        </property>
    </configuration>
    ```

設定変更後、Hiveサービスを再起動します。

## 遠隔アクセスの設定

遠隔アクセスを許可するために、必要なポート（HiveServer2は10000など）をファイアウォールで開放します。

```bash
# ファイアウォールの設定（例：UFW）
sudo ufw allow 10000/tcp
```

リモートユーザーの設定も行います。

sh

CREATE USER 'hiveuser'@'%' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON *.* TO 'hiveuser'@'%';
ユーザーと権限の管理
ユーザーの作成
Hiveで新しいユーザーを作成し、適切な権限を設定します。

sh

CREATE USER 'newuser'@'%' IDENTIFIED BY 'newpassword';
権限の付与
ユーザーにデータベースやテーブルへの権限を付与します。

sh

GRANT ALL ON DATABASE mydb TO USER 'newuser';
基本的なクエリ
データベースとテーブルの作成
データベースとテーブルを作成します。

sql

CREATE DATABASE mydb;
USE mydb;
CREATE TABLE mytable (id INT, name STRING);
データの挿入
テーブルにデータを挿入します。

sql

INSERT INTO mytable (id, name) VALUES (1, 'John');
データの取得
テーブルからデータを取得します。

sql

SELECT * FROM mytable;
データの更新
テーブルのデータを更新します。

sql

UPDATE mytable SET name = 'John Doe' WHERE id = 1;
データの削除
テーブルのデータを削除します。

sql

DELETE FROM mytable WHERE id = 1;
高度なクエリ
ジョイン
複数のテーブルを結合してデータを取得します。

sql

SELECT a.id, a.name, b.salary
FROM mytable a
JOIN salarytable b ON a.id = b.id;
集計
データを集計します。

sql

SELECT department, COUNT(*)
FROM employees
GROUP BY department;
サブクエリ
サブクエリを使用して、複雑なクエリを作成します。

sql

SELECT name
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);
高度な使用方法
パーティションとバケット
パーティションとバケットを使用してデータを管理し、クエリパフォーマンスを向上させます。

パーティション付きテーブルの作成

sql

CREATE TABLE partitioned_table (id INT, name STRING)
PARTITIONED BY (year STRING, month STRING);
バケット付きテーブルの作成

sql

CREATE TABLE bucketed_table (id INT, name STRING)
CLUSTERED BY (id) INTO 10 BUCKETS;
ユーザー定義関数（UDF）
カスタムUDFを作成してHiveで使用します。

JavaでUDFを作成（MyUpper.java）

java

import org.apache.hadoop.hive.ql.exec.UDF;
import org.apache.hadoop.io.Text;

public class MyUpper extends UDF {
public Text evaluate(Text input) {
if (input == null) return null;
return new Text(input.toString().toUpperCase());
}
}
コンパイルしてJARファイルを作成

sh

javac -cp $(hadoop classpath):$(hive --auxpath) MyUpper.java
jar -cf myupper.jar MyUpper.class
UDFの登録と使用

sql

ADD JAR /path/to/myupper.jar;
CREATE TEMPORARY FUNCTION myupper AS 'MyUpper';
SELECT myupper(name) FROM mytable;
パフォーマンスチューニング
Hiveのパフォーマンスを向上させるための設定と最適化を行います。

クエリの最適化ヒントの使用

sql

SELECT /*+ MAPJOIN(b) */ a.id, a.name, b.salary
FROM mytable a
JOIN salarytable b ON a.id = b.id;
パーティションプルーニングの活用

sql

SELECT * FROM partitioned_table
WHERE year = '2021' AND month = '01';
以上で、Apache Hiveの基本的な使用方法と高度な操作についての説明を終わります。Hiveは大規模データのクエリと管理に最適なツールですが、効率的に使用するためには各機能を理解し、適切に活用することが重要です。