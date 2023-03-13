//おまじない
enchant();

//変数宣言
var game;

//Webページが読み込まれたら
addEventListener( 'load', function() {
    game = new Game(320,320);  //ゲームオブジェクトの作成
    game.preload( 'suicide_face.jpg' );  //画像をプリロード

    //ゲームオブジェクトが読み込まれたら
    game.addEventListener( 'load', function() {
        game.pushScene( game.mainScene() );  //シーンをゲームに追加する
    } );

    //メインシーン
    game.mainScene = function() {
        var scene = new Scene();  //シーンを作成
        scene.backgroundColor = 'black';  //シーンを黒く塗りつぶす

        /**スプライトの表示**/
        var playerSprite = new Sprite( 51, 55 );  //スプライトを作成
        playerSprite.image = game.assets[ 'suicide_face.jpg' ];  //スプライトの画像ファイルを指定
        scene.addChild( playerSprite );  //スプライトをシーンに追加（表示）

        return scene;
    }

    game.start();  //ゲームスタート
} );
