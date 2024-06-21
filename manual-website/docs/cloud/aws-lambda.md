---
id: aws-lambda
title: AWS Lambda使用マニュアル
---

# AWS Lambda 使用マニュアル

このガイドでは、AWS Lambdaの基本的な使用方法から応用的なテクニックまでを詳細に説明します。AWS Lambdaは、イベント駆動型のサーバーレスコンピューティングサービスであり、コードをイベントに応じて実行することができます。

## 目次
1. [AWS Lambdaの基本説明](#aws-lambdaの基本説明)
    - [AWS Lambdaのインストールと設定](#aws-lambdaのインストールと設定)
2. [AWS Lambdaの基本機能](#aws-lambdaの基本機能)
    - [Lambda関数の作成](#lambda関数の作成)
    - [トリガーの設定](#トリガーの設定)
    - [バインディングの使用](#バインディングの使用)
3. [AWS Lambdaの高度な機能](#aws-lambdaの高度な機能)
    - [関数の監視とロギング](#関数の監視とロギング)
    - [デプロイとCI/CD](#デプロイとcicd)
    - [スケーリングとパフォーマンスチューニング](#スケーリングとパフォーマンスチューニング)

## AWS Lambdaの基本説明

### AWS Lambdaのインストールと設定

AWS Lambdaは、AWSマネジメントコンソールまたはAWS CLIを使用して設定できます。

#### AWS CLIのインストール

1. AWS CLIをインストールします。
    ```bash
    curl "https://awscli.amazonaws.com/AWSCLIV2.pkg" -o "AWSCLIV2.pkg"
    sudo installer -pkg AWSCLIV2.pkg -target /
    ```

2. AWS CLIを設定します。
    ```bash
    aws configure
    ```

### IAMロールの作成

1. AWSマネジメントコンソールにサインインし、「IAM」を検索して開きます。
2. 「ロール」を選択し、「ロールの作成」をクリックします。
3. 「Lambda」を選択し、必要なポリシーをアタッチしてロールを作成します。

## AWS Lambdaの基本機能

### Lambda関数の作成

AWSマネジメントコンソールまたはAWS CLIを使用して新しいLambda関数を作成します。

#### AWSマネジメントコンソールでの作成

1. AWSマネジメントコンソールで「Lambda」を検索して開きます。
2. 「関数の作成」をクリックします。
3. 関数名、ランタイム、ロールを設定し、「関数の作成」をクリックします。

#### AWS CLIでの作成

1. AWS CLIを使用して新しいLambda関数を作成します。
    ```bash
    aws lambda create-function --function-name MyFunction \
        --runtime nodejs14.x \
        --role arn:aws:iam::123456789012:role/MyLambdaRole \
        --handler index.handler \
        --zip-file fileb://function.zip
    ```

### トリガーの設定

AWS Lambdaは様々なトリガーをサポートしています。以下はS3トリガーの例です。

#### S3トリガーの設定

1. Lambda関数の設定ページで「トリガーを追加」をクリックします。
2. 「S3」を選択し、バケット名とイベントタイプを設定します。
3. 「追加」をクリックしてトリガーを設定します。

### バインディングの使用

AWS Lambdaは、入力バインディングと出力バインディングを使用して、データソースと連携できます。

#### DynamoDBストリームからデータを読み取る入力バインディングの例

1. DynamoDBテーブルを作成し、ストリームを有効にします。
2. Lambda関数にDynamoDBストリームをトリガーとして設定します。

#### S3バケットにデータを書き込む出力バインディングの例

```javascript
const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = async (event) => {
    const params = {
        Bucket: 'my-bucket',
        Key: 'my-key',
        Body: 'Hello from Lambda!'
    };

    try {
        const data = await s3.putObject(params).promise();
        console.log('Success', data);
        return data;
    } catch (err) {
        console.log('Error', err);
        throw err;
    }
};
```

AWS Lambdaの高度な機能
関数の監視とロギング
AWS Lambdaの実行状況を監視し、ログを記録します。

ログを記録するためにconsole.logを使用します。

```javascript
exports.handler = async (event) => {
console.log('Logging an example message.');
return 'Logging example complete.';
};
```

AWS CloudWatchでログを確認します。

デプロイとCI/CD
AWS Lambdaをデプロイし、継続的インテグレーション/継続的デリバリー（CI/CD）を設定します。

GitHub Actionsを使用したデプロイ
.github/workflows/aws-lambda-deploy.ymlファイルを作成し、以下の内容を追加します。
yaml
复制代码
name: AWS Lambda Deploy

on:
push:
branches:
- main

jobs:
build-and-deploy:
runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v2

    - name: Set up Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '14'

    - name: Install dependencies
      run: npm install

    - name: Zip Lambda function
      run: zip -r function.zip .

    - name: Deploy to AWS Lambda
      uses: aws-actions/aws-cli-action@v1
      with:
        aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
        aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
        aws-region: us-east-1
        command: >
          aws lambda update-function-code --function-name MyFunction --zip-file fileb://function.zip
AWS CodePipelineを使用したデプロイ
AWS CodePipelineを使用してLambda関数のビルドとデプロイを設定します。
スケーリングとパフォーマンスチューニング
AWS Lambdaのスケーリングとパフォーマンスを最適化します。

スケーリング設定
AWS Lambdaは、自動スケーリングによりリクエストの増減に対応します。Lambda関数の同時実行数を設定します。

パフォーマンスチューニングの例
関数の応答時間を短縮するために、環境変数を使用します。

javascript
复制代码
exports.handler = async (event) => {
const value = process.env.MY_ENV_VAR;
console.log(`Environment variable value: ${value}`);
return `Value: ${value}`;
};
Lambda関数のタイムアウトを設定します。

sh
复制代码
aws lambda update-function-configuration --function-name MyFunction --timeout 10
以上で、AWS Lambdaの基本的な使用方法と高度な操作についての説明を終わります。AWS Lambdaは強力で柔軟なサーバーレスコンピューティングプラットフォームであり、効率的に使用するためには各機能を理解し、適切に活用することが重要です。