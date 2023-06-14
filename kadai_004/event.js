$(function() {
  $(window).on({
    // HTMLドキュメントが読み込み完了したとき
    'load': () => {
      console.log('loadイベントが発生しました');
    },

    // 画面をスクロールしたとき
    'scroll': () => {
      console.log('scrollイベントが発生しました');
    },
  });
});