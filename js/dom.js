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


// $(".div1").hover(func_1, func_2);
// color = $(".div1").css("background-color");
// function func_1() {
//   $("#span1").text(color);
// }
// function func_2() {
//   $("#span1").text('');
// }

// $('#btn1').click(function () {
//   $('.div1').css('background' , 'red')
// });

// $('#btn1').click(function () { 
//   $('.div1').append('The paragraph 2').css({
//     'text-align' : 'center',
//     'color' : 'red'
//   })
// });


$('#btn1').click(function () { 
  $('.div1').append('<img src="/img/bootstrap-logo.png" height="75px" width="75px"> ')
 })

$('#btn2').click(function () {
  $('.div1').prepend("<p>This is a paragraph 2 using Prepend</p>")
  })

$('#btn3').click(function () {
  $('.div1').before("<p>This is a paragraph 2 using Before</p>")
  })
$('#btn4').click(function () {
  $('.div1').after("<p>This is a paragraph 2 using After</p>")
  })

$('#btn5').click(function () {
  $('.div1').remove()
  })

  $('#btn6').click(function () {
    $('.div1').empty()
    })