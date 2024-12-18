---
id: windows11-rdp-password-save-issue
title: Windows 11 でRDPパスワードが保存できない問題の対処方法
sidebar_label: Windows 11 RDP パスワード保存問題
---

## 概要

Windows 11 において、リモートデスクトップ（RDP）の資格情報を保存できない問題が発生しています。Windows 10 までは正常に動作していたパスワード保存機能が、Windows 11 バージョン22H2以降で動作しなくなりました。本ガイドでは、この問題に対処する方法として、`cmdkey`を使用した手動での認証情報登録手順を説明します。

## 問題の詳細

Windows 11で他のPCにリモートデスクトップ接続を試みる際、保存されたユーザーIDとパスワードを使用しようとするとエラーメッセージが表示され、再度パスワードの入力を要求されます。

**エラーメッセージ:**
```
Windows Defender Credential Guard では、保存された資格情報を使用できません。資格情報を入力してください。
```

## 調査結果

この問題は、Windows 11 バージョン22H2から発生していることがわかっています。バージョン22H2以前のWindows 11ではこの問題は発生していませんが、サポート終了に伴い22H2へのアップデートが強制されるため、今後同様の問題が発生する可能性があります。

Microsoftの公式ドキュメントでも同様の問題が報告されています：
[Windows 11 22H2 - Can't use saved credential](https://learn.microsoft.com/en-us/answers/questions/1021785/windows-11-22h2-can39t-use-saved-credential.html)

ここでは、2つの解決策が提示されています：
1. レジストリ設定の変更
2. `cmdkey`を使用して個別にRDPの認証情報を登録

## 解決策：`cmdkey`を使用してRDP認証情報を登録

最も簡単な対処法は、`cmdkey`コマンドを使って手動でリモートデスクトップの認証情報を登録する方法です。以下に手順を示します。

### コマンドの基本形式

以下のようにコマンドを実行します：

```
cmdkey /generic:TERMSRV/%hostname% /user:%UserName% /pass
```

例えば、接続先のPC名が`hogePC`、ユーザー名が`hogeUser`の場合、コマンドは次のようになります：

```
cmdkey /generic:TERMSRV/hogePC /user:hogeUser /pass
```

ただし、Windowsでは認証情報が「%COMPUTERNAME%\%UserName%」の形式で保存されるため、次の形式でコマンドを実行する必要があります：

```
cmdkey /generic:TERMSRV/hogePC /user:hogePC\hogeUser /pass
```

### 実例

次に、具体的な例を示します：

1. 管理者権限でコマンドプロンプトを開きます。
2. 以下のコマンドを実行します：
   ```bash
   cmdkey /generic:TERMSRV/hogePC /user:hogePC\hogeUser /pass
   ```
3. パスワードを入力するように求められるので、キーボードから入力します。

コマンドが正常に実行されると、次のメッセージが表示されます：
```
資格情報を正しく追加しました。
```

この方法は、Microsoftアカウントを使用しているPCにも適用できます。以下のようにMicrosoftアカウントのメールアドレスを使用してください：

```
cmdkey /generic:TERMSRV/%hostname% /user:%MicrosoftAccountAddr% /pass
```

例えば、次のように実行します：
```
cmdkey /generic:TERMSRV/hogePC /user:hoge@outlook.com /pass
```

### 保存された認証情報の確認

保存された認証情報は、次のコマンドで確認できます：

```
cmdkey /list
```

これにより、登録されている全ての資格情報がリスト表示されます。

### 不正な認証情報の削除

もし誤った認証情報が保存されている場合、次のコマンドで削除することができます：

```
cmdkey /delete:TERMSRV/hogePC01
```

これにより、指定された対象の認証情報が削除されます。

## 代替解決策：レジストリの変更

もう一つの対策として、レジストリを変更することでCredential Guardを無効化し、保存された資格情報を使用できるようにする方法があります。

以下のレジストリキーを追加・設定します：

1. 以下の場所に移動：
   ```
   HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\DeviceGuard
   ```
   次のキーを追加します：
    - `EnableVirtualizationBasedSecurity`（DWORD、値は0）
    - `RequirePlatformSecurityFeature`（DWORD、値は0）

2. 次の場所にも移動：
   ```
   HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Lsa
   ```
   次のキーを追加します：
    - `LsaCfgFlags`（DWORD、値は0）

3. 変更後、PCを再起動してください。

**注意:** この方法はCredential Guardを無効化するため、セキュリティが低下する可能性があります。`cmdkey`を使用した方法ではCredential Guardを維持しながら問題を解決できます。

## 結論

`cmdkey`を使用して手動で認証情報を登録することにより、Windows 11 バージョン22H2のRDP資格情報保存問題を解決できます。この方法では、Credential Guardを無効化することなく、保存したパスワードを使用できるようになります。必要に応じて、レジストリの変更も別の解決策として検討できますが、セキュリティリスクを伴うことを考慮してください。
