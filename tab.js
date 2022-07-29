/* 버튼 0 누르면 
버튼 0에 orange 클래스 부착, 기존버튼 orange 제거
박스 0에 show 클래스 부착, 기존박스 show 제거 */

// 셀렉터가 반복될때는 변수를 써주는게 성능면에서 유리
var button = $('.tab-button');
var content = $('.tab-content');

for (let i = 0; i < 3; i++) {
  button.eq(i).on('click', function(){
    button.removeClass("orange");
    button.eq(i).addClass("orange");
    content.removeClass("show");
    content.eq(i).addClass("show");
  });  
}

// button.eq(1).on('click', function(){
//   button.removeClass("orange");
//   button.eq(1).addClass("orange");
//   content.removeClass("show");
//   content.eq(1).addClass("show");
// });

// button.eq(2).on('click', function(){
//   button.removeClass("orange");
//   button.eq(2).addClass("orange");
//   content.removeClass("show");
//   content.eq(2).addClass("show");
// });

var car = ['소나타', 50000, 'white']; // array형
var car2 = {name : '소나타', price : [50000, 3000, 4000]}  // object형
document.querySelector('.car-title').innerHTML = car2.name;
document.querySelector('.car-price').innerHTML = car2.price[0];

