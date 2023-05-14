$('#btn1').click(function () {
    
    $('#img1').hide()
  })

$('#btn2').click(function () {
    $('#img1').show()
  })

$('#btn3').click(function () {
    $('#img1').toggle()
  })
$('#btn4').click(function () {
    $('#img1').fadeOut()
  })
$('#btn5').click(function () {
        $('#img1').fadeIn()
  })
$('#btn6').click(function () {
    $('#img1').fadeToggle()
  })
$('#btn7').click(function () {
    $('#img1').slideUp()
  })
$('#btn8').click(function () {
    $('#img1').slideDown()
  })
$('#btn9').click(function () {
    $('#img1').slideToggle(2000)
  })
$('#btn10').click(function () {
    $('#img1').stop()
  })

$('#btn11').hover(func_1 , func_2)
function func_1() {
    $('#img1').animate({
        left:'250px' ,
        opacity : '1',
        height : '400px',
        width : '400px'
    },2000)
  }

  function func_2() {
    $('#img1').animate({
        left:'0px' ,
        opacity : '0.4',
        height : '250px',
        width : '250px'
    },2000)
    }


