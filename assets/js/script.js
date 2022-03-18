tasks = {};

// TIME DECLARATIONS USING MOMENTJS
var currentTime = moment();
// returns time to nearest hour
currentTime = currentTime.startOf("hour");
// returns 9am for start of day
var beforeTime = moment().startOf("day").add(9, "hours");
// current date/time displayed in header
$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm A"));

// FUNCTION TO CLEAR LOCAL STORAGE/CONTENTS
$("#clearFields").click(function(event) {
    event.preventDefault;
    // clear all unsaved textarea input
    $("textarea").val("");
    localStorage.clear();
});


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

// FUNCTION TO AUDIT TIME BLOCKS auditTime() //
// get time from timeblock
// convert time to moment object at 5pm (17) local time (L)
// remove old classes
// apply new classes if near/over time

// FUNCTION WHEN CLICKING SAVE BUTTON
// update tasks array
// auditTime()


// setInt FUNCTION TO RUN auditTime EVERY 30 MINS //
// setInterval(function(){
//     $("timeblockclassnames").each(function(index, el){
//         auditTime(el);
//     });
// }, (1000 * 60) * 30);


// CALL loadTasks ON PAGE LOAD //
// loadTasks();