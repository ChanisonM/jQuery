$( "#datepicker" ).datepicker({
    showOtherMonths : true,
    selectOtherMonths : true,
    showButtonPanel : true,
    changeMonth : true ,
    changeYear : true,
    minDate : new Date(2023,1,1),
    maxDate : new Date(2023,31,12),
    numberOfMonths: 2
});

$('#tool').tooltip({
    track : true,
    content : "This is the place for Name" ,
    show : {
        effect : "slideDown" ,
        delay : 100
    },
    hide : {
        effect : "blind",
        delay:100
    }
})