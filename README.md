# Portfolio Single Page Application

wordpress から REST API を受け取り React で SPA にする

## プロジェクト管理

[github project](https://github.com/katsun0921/portfolio_spa/projects)

作業を行う際は、github に Project または issue を作成する

## ブランチの命名規則

- master
  - 現在の公開されているブランチ
  - master に直接コミットしない
- develop/プロジェクト番号
  - master から分岐
  - 次回リリースの開発用
  - master へマージ
- feature/プロジェクト番号/column-番号
  - develop/プロジェクト番号から分岐
  - 新規機能の開発用
  - develop へマージする。
- issue/issue 番号
  - master から分岐
  - 現在の公開のバグフィックス

（※）プロジェクト番号は「<https://github.com/users/アカウント名/projects/1」の末尾にある番号この場合「1」>

（※）column-番号の番号は Copy column link でコピーされた末尾の番号

## Lint ツール

### Prettier

prettier.config.js に記載。[記載方法は js](https://prettier.io/docs/en/configuration.html#basic-configuration)

記載したら、共有しやすいように機能のコメントを記載する

[設定の参照先](https://prettier.io/docs/en/options.html)

## Gatsby.js

[公式サイト gatsbyjs.org](https://www.gatsbyjs.org/)

本サイトは WordPress から API を取得し、Gatsby で SPA サイトになります。

プラグインに[gatsby-source-wordpress](https://www.gatsbyjs.org/packages/gatsby-source-wordpress/?=wordpres)を使用
