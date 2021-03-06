// Open planner--> open the website
    // Current day is displayed at top of the page--> use moment.js
    var day = moment().format('dddd, MMM Do YYYY');
    $("#currentDay").html(day);

// Scroll down calendar
    // Timeblocks are present for standard business hours (9-5pm)-->within the HTML file (DONE)
    // Timeblocks are color coded to indicate whether the event is in th past, present, or future
    function colorBlock() {
        var hourNow = moment().hour();

        // After "split": we remove the dash on the id of the time-block so that it does not identify as two ids
        // Will specifically target the number that was turned from a string 
        $(".time-block").each(function() {
            var hourTime = parseInt($(this).attr("id").split('-')[1]);
            
            // Compares the timeblock hour to the current hour to set up the color-coding effect
            if(hourTime < hourNow) {
                $(this).addClass("past");
            }
            else if(hourTime === hourNow) {
                $(this).removeClass("past");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        });
    }

    // Rechecks for the schedule color every 20 seconds to auto fill with new colors 
    colorBlock();
    var interval = setInterval(colorBlock, 20000)

// For EACH timeblock: 
    // Can enter the event + SAVE event in the timeblock --> use localStorage
    $(".saveBtn").on("click", function(){
        var info = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, info);
    })
        
     // Refresh page--> saved event is still there 
        $("#hour-9 .description").val(localStorage.getItem("hour-9"));
        $("#hour-10 .description").val(localStorage.getItem("hour-10"));
        $("#hour-11 .description").val(localStorage.getItem("hour-11"));
        $("#hour-12 .description").val(localStorage.getItem("hour-12"));
        $("#hour-13 .description").val(localStorage.getItem("hour-13"));
        $("#hour-14 .description").val(localStorage.getItem("hour-14"));
        $("#hour-15 .description").val(localStorage.getItem("hour-15"));
        $("#hour-16 .description").val(localStorage.getItem("hour-16"));
        $("#hour-17 .description").val(localStorage.getItem("hour-17"));
