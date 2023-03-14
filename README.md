# TestGPT

phpってGithub Pagesは使えないんですね, 諦めます

A-frameテスト用 => 挫折

enchant.js => 挫折

心機一転, 最寄り駅チェッカーを作ります

住所を使ってのチェッカーはありますが, 建物名から最寄り駅を探すアプリは見つかりませんでした.

主なフローは, 建物名を入力->そこから自動で住所を得る->さらにそれを使って自動で最寄り駅を検索

#「建物名を入力->そこから自動で住所を得る」をやってるのですが, これが難しい.

APIを使うとなると, お金がかかるのでやってられない.

自作htmlで建物名を入力し, その建物名を元に, https://www.google.com/maps/search/+建物名となるURLにリクエストを送る.
そして, そのURLにおけるhtmlソースの中にある, 住所を示すテキストを見つけ出し, それを自作htmlに表示させるというもの.

例えば, XMLHttpRequestを使って, google mapの外部HTMLソースを取得することを試みましたが, どうやらセキュリティの理由で失敗.

fetchとかいうものも使ってみたけど, よく分からないままうまくいかない.

#自動で住所を得る->さらにそれを使って自動で最寄り駅を検索も試みたが…

navitimeに住所を使っての[最寄り駅検索サイト](https://api-sdk.navitime.co.jp/api/specs/examples/sample/node_around_search/node_around_search.html)があったので,
そのサイトを開いた時に住所が既に入力された状態にしたかったので, 外部から値を入力する機構, URLパラメータを使った機構を考えたが, どれも失敗

# 今後の画策

OpenStreetMapの利用…マップが古すぎるデメリット有
YahooMapAPI…Yahooを使わないのでよく分からない

道は遠い
