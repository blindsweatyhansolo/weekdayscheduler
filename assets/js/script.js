$(document).ready(function(){
    auditTime();
    loadTasks();
});

// TIME DECLARATIONS USING MOMENT
$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm A"));
// gets current time at hour (24 hr format)
var currentHour = moment().format("HH");


// FUNCTION TO CLEAR LOCAL STORAGE/CONTENTS
$("#clearFields").click(function(event) {
    event.preventDefault;
    // clear all unsaved textarea input
    $("textarea").val("");
    localStorage.clear();
});

// FUNCTION TO AUDIT TIME FOR EACH TIMEBLOCK //
// compare current hour to each timediv id, change to past present or future class
var auditTime = function(){
    $(".time-div").each(function(){
        var timeDiv = $(this).attr("id");
        
        if (currentHour === timeDiv) {
            $(this).find(".time-block").removeClass("past");
            $(this).find(".time-block").addClass("present");
        } else if (currentHour > timeDiv) {
            $(this).find(".time-block").removeClass("present");
            $(this).find(".time-block").addClass("past");
        } else if (currentHour < timeDiv) {
            $(this).find(".time-block").removeClass("present");
            $(this).find(".time-block").addClass("future");
        }
    });
};

// FUNCTION TO RUN auditTime EVERY 30 MINS //
setInterval(function(){
    $(".time-div").each(function(index, el){
    auditTime(el);
    });
    console.log("this is checked");
}, (1000 * 60) * 30);


// FUNCTION TO SAVE TASKS TO LOCAL STORAGE WHEN CLICKING SAVE ICON //
$(".saveBtn").click(function(event){
    event.preventDefault();
    var inputValue = $(this).siblings(".form-control").val();
    var time = $(this).parent().attr("id")
    localStorage.setItem(time, inputValue);
});

// FUNCTION TO LOAD SAVED TASKS FROM LOCALSTORAGE INTO RESPECTIVE TIMEBLOCKS //
var loadTasks = function(){
    $("#09 .time-block").val(localStorage.getItem("09"));
    $("#10 .time-block").val(localStorage.getItem("10"));
    $("#11 .time-block").val(localStorage.getItem("11"));
    $("#12 .time-block").val(localStorage.getItem("12"));
    $("#13 .time-block").val(localStorage.getItem("13"));
    $("#14 .time-block").val(localStorage.getItem("14"));
    $("#15 .time-block").val(localStorage.getItem("15"));
    $("#16 .time-block").val(localStorage.getItem("16"));
    $("#17 .time-block").val(localStorage.getItem("17"));
};
