$('#btn1').click(function () { 
    $('#dialog').dialog("open")
 })



$('#dialog').dialog({
    title : 'Basic Dialog',
    draggable  : false,
    resizable : false,
    closeOnEscape : false,
    width : 500,
    height : 250 ,
    // modal : true,
    autoOpen : false,
    buttons : {
        "Delete all item" : function () {
            $(this).dialog("close")
          },
          Cancel : function () { 
            $(this).dialog("close")
           }
    },
    show :{
        effect : "fadeIn",
        duration : 2000
    },
    hide : {
        effect : "fadeOut",
        duration : 2000
    }

})
   