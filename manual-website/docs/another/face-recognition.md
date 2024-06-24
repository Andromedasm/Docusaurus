graph TD;
    A[プロジェクト] --> B[React]
    A --> C[Flask]
    A --> D[DB]
    A --> E[顔認証]
    A --> F[デバイス]

    B --> B1[顔登録]
    B --> B2[顔再登録]
    B --> B3[顔認証]
    B --> B4[出退勤]
    B -- API --> C

    C --> C1[顔登録]
    C --> C2[顔再登録]
    C --> C3[顔認証]
    C --> C4[出退勤]
    C1 -- Route --> C5[upload]
    C2 -- Route --> C5[upload]
    C --> D

    D --> D1[顔情報保存]
    D --> D2[勤怠情報保存]

    E --> E1[ディープランニング]
    E1 -- GPU --> E2[Nvidia GPU]

    F --> F1[iPad]
    F --> F2[Safari]
    F1 --> B
    F2 --> B
