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
$('#btn11').click(function () { 
    $('#img1').slideUp(2000).css('opacity' , '1').slideDown(1000).fadeOut(2000).fadeIn(2000)
 })