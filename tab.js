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


// 셔츠나 바지를 옵션 선택하면 사이즈 셀렉터가 나타나게 하기
$('.form-select').eq(0).on('input', function(){
  var item = $('.form-select').eq(0).val();  /* e.currentTarget이나 this를 써줘도 됨 */
  if( item == '셔츠' ){
    $('.form-select').eq(1).removeClass('size');
    $('.form-select').eq(1).html('');
    shirts.forEach(function(data){
      $('.form-select').eq(1).append(`<option>${data}</option>`)
    })
  } else if (item == '바지') {
    $('.form-select').eq(1).removeClass('size');
    $('.form-select').eq(1).html('');
    /*  forEach : array에 붙일 수 있는 반복문 */
    pants.forEach(function(data){
      $('.form-select').eq(1).append(`<option>${data}</option>`)
    });
  } else {
    $('.form-select').eq(1).addClass('size');    
  }
});

// 서버에서 보낸 데이터 가정
var pants = [28, 30, 32, 34];
var shirts = [90, 95, 100, 105];

// object 반복문 돌리기 (for in  반복문)
var obj = {name : 'kim', age : 20}

for (var key in obj) {
  // console.log(key);  // 키를 꺼낼때
  console.log(obj[key]);  // 값을 꺼낼때
}

// HTML 생성법
var a = document.createElement('p');
a.innerHTML = '안녕';
document.querySelector('#test').appendChild(a);

// HTML 생성법 2
var template ='<p>안녕</p>';
document.querySelector('#test').insertAdjacentHTML('beforeend', template);
