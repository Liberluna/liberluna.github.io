# liberluna.github.io
Liberlunaの公式サイトのソースコードです。

## 貢献・著作権
貢献した著作物の著作権は、全てLiberlunaが保持するものとします。
## ブログの追加方法
1. https://github.com/Liberluna/liberluna.github.io/tree/main/src/pages/blog/posts
に飛んでください。
2. 変更時の日付(yyyymmdd)と発行されたブログの識別番号をアンダーバーで繋げたファイルを作ってください。
(例) `20230516_0.md` 次 `20230516_1.md`
3. 作成したファイルの中に、次のコードをコピーアンドペーストして、内容を自由にカスタマイズしてください。
```markdown
---
layout: ../../../layouts/Post.astro
title: "<ここにタイトル>"
author: "<username(ex:nakasyou)>"
avatar: "<ここにアイコンのPath. ex: nakasyou.png 基本は[username].png >"
date: 2023-05-15 #日付 ISO 8601 (yyyy-mm-dd)
update: 2023-05-15 #アップデートした日付 ISO 8601 (yyyy-mm-dd)
desc: "説明"
thumbnail: "サムネイルのURL"
---
## ここに本文
```
4. commit,push,pull requestについて

タイトルは必ず付ける。
試作段階でのcommit,pushは控え、完成した状態でするようしてください。

---

5. ブログについて
issuesの説明をお読みください。
