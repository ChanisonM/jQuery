$('#dialog').dialog({
    title : 'Customizeble',
    draggable : true,
    resizable : true ,
    closeOnEscape : true,
    modal: false ,
    autoOpen : true
})

$('#btn1').click(function(){
    // alert("Get is Working")
    var modal = $('#dialog').dialog("option" , 'draggable')
    alert(modal)
})
$('#btn2').click(function(){
    // alert("SET is Working")
    $('#dialog').dialog("option" , 'draggable' ,  false)
    // $('#dialog').dialog({
    //     option : {
    //         draggable : false
    //     }
    // })
})