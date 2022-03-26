$(document).ready(function(){
    loadTasks();
    auditTime();
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
            $(this).find(".time-block").removeClass("past").addClass("present");
        } else if (currentHour > timeDiv) {
            $(this).find(".time-block").removeClass("present").addClass("past");
        } else if (currentHour < timeDiv) {
            $(this).find(".time-block").removeClass("present").addClass("future");
        }
    });
};

// FUNCTION TO RUN auditTime EVERY 30 MINS //
setInterval(function(){
    $(".time-div").each(function(index, el){
    auditTime(el);
    });
    // console.log("this is checked");
}, (1000 * 60) * 30);


// FUNCTION TO SAVE TASKS TO LOCAL STORAGE WHEN CLICKING SAVE ICON //
$(".saveBtn").click(function(event){
    event.preventDefault();
    var inputValue = $(this).siblings(".form-control").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, inputValue);

    var taskStorage = JSON.parse(localStorage.getItem("tasks"));
    var updated = { ...taskStorage, [time]: inputValue};
    // ... copies data previously set from taskStorage as an argument
    // then adds [time]: inputValue to object as new key value pair
    
    localStorage.setItem("tasks", JSON.stringify(updated));
    // console.log(updated);
});

// FUNCTION TO LOAD SAVED TASKS FROM LOCALSTORAGE INTO RESPECTIVE TIMEBLOCKS //
var loadTasks = function(){
    var taskStorage = localStorage.getItem("tasks");

    // if taskStorage is empty, create task array with hour id key matches
    if (!taskStorage) {
        var tasks = {
            "09": "",
            "10": "",
            "11": "",
            "12": "",
            "13": "",
            "14": "",
            "15": "",
            "16": "",
            "17": ""
        };
        localStorage.setItem("tasks", JSON.stringify(tasks));
        return;
    }

    $(".time-div").each(function(){
        timeDiv = $(this).attr("id");
        var taskStorage = JSON.parse(localStorage.getItem("tasks"));
        var timeVal = taskStorage[timeDiv];
        // object square bracket notation ensures key set to a number correctly reads as a string 
        $(this).find(".time-block").val(timeVal);
    });
};
