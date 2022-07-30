var 출석부 = ['흥민', '영희', '철수', '재석'];

function 이름찾기(a){
  Boolean = '철수';
  출석부.forEach(function(name){
    if (name == a){
      console.log('있어요');
    } else {
      console.log('없어요');
    }
  });
}

// 이름찾기('철수');
이름찾기('명수');
