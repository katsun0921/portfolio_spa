# Portfolio Single Page Application

wordpressからREST APIを受け取りReactでSPAにする

## プロジェクト管理

[github project](https://github.com/users/katsun0921/projects/1)

作業を行う際は、githubにProjectまたはissueを作成する

## ブランチの命名規則

- master
  - 現在の公開されているブランチ
  - masterに直接コミットしない
- develop/プロジェクト番号
  - masterから分岐
  - 次回リリースの開発用
  - masterへマージ
- feature/プロジェクト番号/column-番号
  - develop/プロジェクト番号から分岐
  - 新規機能の開発用
  - developへマージする。
- issue/issue番号
  - masterから分岐
  - 現在の公開のバグフィックス

（※）プロジェクト番号は「<https://github.com/users/アカウント名/projects/1」の末尾にある番号この場合「1」>

（※）column-番号の番号はCopy column linkでコピーされた末尾の番号
