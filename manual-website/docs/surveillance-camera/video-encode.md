---
id: video-encode
title: 動画エンコードマニュアル
---

## iVMS-4200から動画をダウンロード、エンコードする方法

### 1. iVMS-4200から動画をダウンロードする手順

1. **iVMS-4200の起動**
   - デスクトップまたはスタートメニューからiVMS-4200を起動します。

2. **リモート再生の選択**
   - メインメニューから「リモート再生」を選択します。

3. **カメラと時間範囲の選択**
   - 左側のデバイスリストから目的のカメラを選択します。
   - 右側のカレンダーから再生したい日付を選択し、時間範囲を設定します。

4. **動画のダウンロード**
   - 設定した時間範囲の動画を再生します。
   - 再生バーの上にあるダウンロードボタンをクリックします。
    <img src="/img/video-encode/download.png" />
    - チェックを入れて、開始時刻と終了時間を設定します。
    <img src="/img/video-encode/download1.png" />
    - 「ダウンロード」ボタンをクリックし、ビデオをダウンロードします。

### 2. HandBrakeを使用してH.264にエンコードする方法

1. **HandBrakeのインストール**
   - 公式サイト（[https://handbrake.fr/](https://handbrake.fr/)）からHandBrakeをダウンロードし、インストールします。

2. **HandBrakeの起動**
   - デスクトップまたはスタートメニューからHandBrakeを起動します。

3. **ソースの選択**
   - 「ファイルを開く」をクリックし、iVMS-4200からダウンロードした動画ファイルを選択します。
    <img src="/img/video-encode/file.png" />

4. **プリセットの選択**
   - プリセットリストから「Fast 1080p30」など適切なプリセットを選択します。
    <img src="/img/video-encode/preset.png" />

5. **ビデオ設定**
   - 「ビデオ」タブを選択し、「ビデオエンコーダー」を「H.264 (Intel QSV)」に設定します（Intel Quick Sync Videoが利用可能な場合）。
    <img src="/img/video-encode/qsv.png" />

6. **保存先の設定**
   - 「保存先」フィールドにエンコード後のファイルの保存先を指定します。
    <img src="/img/video-encode/saveas.png" />

7. **エンコードの開始**
   - 「開始」ボタンをクリックしてエンコードを開始します。
    <img src="/img/video-encode/startencode.png" />

### 3. FFmpegを使用してH.264にエンコードする方法

1. **FFmpegのインストール**
   - 公式サイト（[https://ffmpeg.org/download.html](https://ffmpeg.org/download.html)）からFFmpegをダウンロードし、インストールします。

2. **コマンドプロンプトの起動**
   - スタートメニューから「コマンドプロンプト」を検索し、右クリックして「管理者として実行」を選択します。

3. **エンコードコマンドの実行**
   - 次のコマンドを入力して、iVMS-4200からダウンロードした動画をH.264にエンコードします（Intel Quick Sync Videoが利用可能な場合）：

    ```bash
    ffmpeg -i input_video.mp4 -c:v h264_qsv -preset fast -c:a copy output_video.mp4
    ```

   - 上記のコマンドで、「input_video.mp4」は変換する元の動画ファイルの名前を、「output_video.mp4」は変換後のファイルの名前を指定します。

   - Intel Quick Sync Videoが利用できない場合は、次のコマンドを使用します：

    ```bash
    ffmpeg -i input_video.mp4 -c:v libx264 -preset fast -c:a copy output_video.mp4
    ```

4. **エンコードの完了**
   - コマンドが完了するまで待ち、エンコード後の動画ファイルが指定した保存先に作成されていることを確認します。
