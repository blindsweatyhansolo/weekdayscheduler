$(document).ready(function(){
    auditTime();
    loadTasks();
});

tasks = {};

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

// compare current hour to timediv id, change to past present or future
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

// setInt FUNCTION TO RUN auditTime EVERY 30 MINS //
setInterval(function(){
    $(".time-div").each(function(index, el){
    auditTime(el);
    });
    console.log("this is checked");
}, (1000 * 60) * 30);

// FUNCTION TO CREATE TASKS IN TIME BLOCKS //
// use click event to get $(this) for timeblock variable
// create elements that make up task item (taskLi / taskP)
// append p element to time block parent 
// check due time with auditTime()
// append to list on page 

// FUNCTION TO LOAD TASKS FROM LOCAL STORAGE //
// create tasks variable set to parsed LS getItem "tasks"
// if nothing in LS, create new object to track task arrays by timeblock
// loop over object properties then loop over sub-arrays

// FUNCTION TO SAVE TASKS TO LOCAL STORAGE WHEN CLICKING SAVE ICON //
var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

// FUNCTION WHEN CLICKING SAVE BUTTON
// update tasks array


// CALL loadTasks ON PAGE LOAD //
// loadTasks();