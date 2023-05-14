// $('button').click(func1)
// function func1() {
//     $('#img1').css("width" , "500px")
//  }

// Click one times
// $("button").click(function() {
//     $("#img1").css("width" , "500px")
//   })

// Double Click times
// $("button").dblclick(function() {
//     $("#img1").css("width" , "500px")
//   })

// mouseenter เหตุการณ์เกิดขึ้นเมื่อตัวชี้เมาส์อยู่เหนือ องค์ประกอบที่เลือก
// $("button").mouseenter(function() {
//     $("#img1").css("width" , "500px")
//   })

// mouseleave เหตุการณ์เกิดขึ้นเมื่อตัวชี้เมาส์ออกจากส่วนที่เลือกอยู่
// $("button").mouseleave(function() {
//     $("#img1").css("width" , "250px")
//   })

$("#img1").hover(function () { 
    $(this).css('width' , '500px')
 },
 function () { 
    $(this).css('width' , '250px')
  })
