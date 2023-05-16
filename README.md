# liberluna.github.io
Liberlunaの公式サイトのソースコードです。
## ブログの追加方法
1. https://github.com/Liberluna/liberluna.github.io/tree/main/src/pages/blog/posts
に飛んでください。
2. 今日の日付(yyyymmdd)と今日発行されたブログの識別番号をアンダーバーで繋げたファイルを作ってください。
(例) `20230516_0.md` 次 `20230516_1.md`
3. 中に、次のコードをコピペして、カスタマイズしてください。
```markdown
---
layout: ../../../layouts/Post.astro
title: "<ここにタイトル>"
author: "nakasyou"
avatar: "<ここにアイコンのPath. ex: nakasyou.png 基本は[username].png >"
date: 2023-05-15 #日付 ISO 8601 (yyyy-mm-dd)
update: 2023-05-15 #アップデートした日付 ISO 8601 (yyyy-mm-dd)
desc: "説明"
thumbnail: "サムネイルのURL"
---
## ここに本文
```
4. コミット、プッシュ、プルリク
