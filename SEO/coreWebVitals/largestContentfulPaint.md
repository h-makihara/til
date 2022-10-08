# LCP(Largest Contentful Paint)
最大視覚コンテンツの表示時間  
読み込みパフォーマンスを評価する  
**2.5秒以内にする必要がある**

以下に記載する過去の指標の変化の末、現在の評価指標が提唱されている。  
W3C Web Performance ワーキンググループでの議論やGoogleが実施した調査から、ページのメインコンテンツの読み込みタイミングを正確に測定するためには「最も大きい要素（Largest Content）」がレンダリングされるタイミングの測定が重要であることがわかった。
## その他の指標
古い指標としては以下に述べるものがある

### [load](https://developer.mozilla.org/ja/docs/Web/API/Window/load_event)  
Window:loadイベントを指す。  
**ページ全体（スタイルシートや画像などのすべての依存するリソース）を読み込んだ**とき発生するイベント  
以下に述べるDOMContentLoadedが、ページのDOMの読み込みを完了すれば、リソースの読み込みを完了するのを待たずに発生することと明確に異なる。
### [DOMContentLoaded](https://developer.mozilla.org/ja/docs/Web/API/Document/DOMContentLoaded_event)  
Document:DOMContentLoadedイベントを指す。  
HTMLの初期文書が完全に読み込まれ、解釈された時点で発生する。  
**スタイルシートや画像、サブフレームの読み込みを完了するのは待たない。**  
（loadと明確に異なる点）
### [FCP(First Contentful Paint)](https://web.dev/fcp/)  
ページの読み込みが開始されてから**ページ内のコンテンツ[^contents]のいずれかの部分が「画面上にレンダリングされるまでの時間」**  
少しわかりにくい。  
多分以下のようなイメージだと思う。
- 一番頭に鬱陶しい広告が表示されたとしても、それがFCPとしては最初に表示されたコンテンツになったり  
- 検索ワードを入力した検索ボックスが再描画されるような画面だった場合、その検索ボックスが最初に表示されればそれがFCPにおけるコンテンツになってしまう。

「本当に見せたいもの」に関係なく、「最初に表示されたコンテンツ」という表現になる  
<ins>LCPと明確に違う部分でもある</ins>  
LCPと異なるとはいえ、不要な指標ではない。  
真っ白な画面で待たされるのはユーザとしても不快なので、決して無視できる指標ではない。  
具体的には、**1.8秒以下になるよう努力する必要がある**と定義されているもよう。  
- 測定方法
    - ラボ環境
        - Lighthouse
        - Chrome DevTools
        - PageSpeedInsights
    - 実際のユーザ環境
        - PageSpeedInsights
        - Chrome User Experience Report
        - Search Console(Core Web Vitals Report)
        - web-vitals JavaScriptライブラリ
    <!-- dummy comment line for breaking list -->
  多い…。  
どちらも計測可能できる測定方法としてPageSpeedInsightsが上がっているところは注目したい。  
Lighthouseってラボ環境だけなんだ、という部分も驚きだった。

### [FMP(First Meaningful Paint)](https://web.dev/first-meaningful-paint/)  
Lighthouse6.0で非推奨になった項目  
ページロードに対して過剰に反応するため、一貫性のない結果につながってしまう。  
メトリックの定義はブラウザ固有の実装の詳細に依存しているため、すべてのWebブラウザーにおいての標準化や実装ができないため。  
考え方はLCPに近い（ように見える）。  
**ページの主要コンテンツがいつユーザに表示されるか**を測定する。  
スコアの測定方法としては、[読み込みを開始してから、ページをスクロールせずに見える主要なコンテンツをレンダリングするまでの時間（秒単位）](https://docs.google.com/document/d/1BR94tJdZLsin5poeet0XoTW60M0SjvOJQttKT-JK8HI/view)  
iframe内にスクロールせずに見えるコンテンツがある場合などに異なる場合がある。  
FMPはiframe内のコンテンツがユーザに表示されると評価されるが、FCPにはiframeコンテンツを含まない。ここがFCPとFMPの違いになる。  
### SI（Speed Index）  
Lighthouseレポートの「パフォーマンス」セクションで追跡される6つの指標のひとつ。  
ページの読み込み中にコンテンツが視覚的に表示される速さを測定する。  
Lighthouseでは、最初にブラウザでページをロードするビデオをキャプチャし、フレーム感の視覚的な進行を計測する。  
そして、[Speedline Node.jsモジュール](https://github.com/paulirish/speedline)を使用して、スコアを生成する。   



[^contents]: テキスト、画像（背景画像を含む）、<svg>要素、白以外の<canvas>要素を指す

