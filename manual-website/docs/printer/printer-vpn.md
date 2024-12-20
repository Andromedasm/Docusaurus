---
id: printer-vpn
title: VPNを使用してプリンターを設定
---

# VPNを使用してプリンターを設定する手順

このマニュアルでは、VPNを使用してリモート拠点（支店など）のプリンターを本社から設定する方法を説明します。

プリンターのIPアドレスの取得方法や、ドライバーのインストール手順も含めて解説します。


## 1. VPN接続の確認

最初に、リモート拠点と本社が正しくVPN接続されているか確認します。VPNを使用してリモートのプリンターを設定するため、接続の安定性は非常に重要です。


## 2. プリンターのIPアドレスを取得する方法

リモートのプリンターのIPアドレスを取得するには、以下のいずれかの方法を使用します。

### 方法 1: Telnetを使ってルーターから確認する

1. VPN接続を通じてリモート拠点のルーターにアクセスします。
2. ターミナルを使用し、次のコマンドでルーターにTelnet接続します。
   ```bash
   telnet <ルーターのIPアドレス>
   ```
3. ルーターのDHCPリーステーブルからプリンターに割り当てられたIPアドレスを確認します。
   ```bash
   show status dhcp summary
   ```

### 方法 2: BRAdmin Professional 4を使用する

1. Brotherの管理ツール「BRAdmin Professional 4」をPCにインストールします。
2. VPNネットワークセグメント内でプリンターをスキャンし、該当プリンターのIPアドレスを表示させます。


## 3. プリンタードライバーのインストール

IPアドレスを取得した後、リモートのプリンターに対応したドライバーをインストールします。

### Brotherプリンターの場合

1. [Brother公式ウェブサイト](https://support.brother.com/)から該当プリンターのドライバーをダウンロードします。
2. ダウンロードしたファイルを実行し、インストールウィザードに従って「ネットワーク接続」を選択します。
3. 取得したIPアドレスを入力して設定を完了します。

### Toshibaプリンターの場合

1. [Toshiba公式ウェブサイト](https://www.toshibatec.co.jp/)からプリンタードライバーをダウンロードします。
2. インストールウィザードに従って、TCP/IP接続を選び、IPアドレスを入力して設定します。


## 4. テスト印刷の実行(必要に応じて)

プリンタードライバーがインストールされ、設定が完了したら、テスト印刷を行って接続が正しく行われているか確認します。


## 5. トラブルシューティング

もしテスト印刷がうまくいかない場合は、以下の項目を確認してください。

1. VPN接続が正常か確認します。
2. IPアドレスが正確か確認します。
3. プリンターがネットワークに正しく接続されているか確認します。

