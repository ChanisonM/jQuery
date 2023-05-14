// $('.div1').click(function () {
//   var x = $('.p1').html()
//   console.log(x);
//   $('#span1').text(x)

// });

// $('.div1').dblclick(function () {
//   $('#span1').text('')
// })

// $('.div1').click(function () {
//   alert($('.p1').html())

// });

// $('.p1').click(function (){
//   alert($('.p1').attr('class'))
// });

// $('#btn1').click(function () {
//   $('.p1').attr('id' , 'idp2')
// });

// $('.p1').click(function (){
//   alert($('.p1').attr('id'))
// });

// $('.div1').click(function () {
//  color =  $('.div1').css('background-color')
//  $('#span1').text(color)
// });


$(".div1").hover(func_1, func_2);
color = $(".div1").css("background-color");
function func_1() {
  $("#span1").text(color);
}
function func_2() {
  $("#span1").text('');
}

$('#btn1').click(function () {
  $('.div1').css('background' , 'red')
});

