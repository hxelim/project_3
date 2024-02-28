$(function(){
  $('.round').lettering();


  // 토핑 추가
  function toppingS (){
  var add_arr = [];
  $('input[name=topping]:checked').each(function(){
    var addV = $(this).val()
    add_arr.push(addV)
  })
  console.log(add_arr)
}

$('input:checkbox[name=topping]').change(function(){
  toppingS();
})



});

// 버튼 누르면 주문 수량 증가, 감소
function count(type) {
  const resultElement = document.getElementById('result')

  let number = resultElement.innerText;

 
  if(type === 'plus') {
    if (number <5){
      number = parseInt(number) + 1;
    } else {
      alert("최대 5개까지 주문할 수 있습니다.")
    }

  } else if (type === 'minus') {
    if (number >1){
    number = parseInt(number) - 1;
  } else {
    // alert ("최소 1개부터 주문할 수 있습니다.")
  }
  }

  resultElement.innerText = number;
}



window.onload = function(){
  // 피자 이름 receipt에 가져오기
  let nameS = document.getElementById('nameS')
  let nameB = document.getElementById('nameB')

  nameS.textContent = nameB.textContent



}


