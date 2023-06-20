$(function() {
  // ボタンをクリックしたら
  $('.btn').on('click', function() {
    // .text-boxのvalue属性の値を変更する
    $('.text-box').prop('value', "クリックしました！");
  });
});