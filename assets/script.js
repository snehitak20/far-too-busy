// Open planner--> open the website
    // Current day is displayed at top of the page--> use moment.js
    $("#currentDay").text(moment().format('dddd, MMM Do YYYY'));
// Scroll down calendar
    // Timeblocks are present for standard business hours (9-5pm)-->within the HTML file (DONE)

// Timeblocks features 
    // Color-coded: past events (grey), present events(red), future events(green)
  

// For EACH timeblock: 
    // Can enter the event + SAVE event in the timeblock --> use localStorage
    $(".saveBtn").on("click", function(){
        var info = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, info);
    })

// Refresh page--> saved event is still there 
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#1 .description").val(localStorage.getItem("1"));
    $("#2 .description").val(localStorage.getItem("2"));
    $("#3 .description").val(localStorage.getItem("3"));
    $("#4 .description").val(localStorage.getItem("4"));
    $("#5 .description").val(localStorage.getItem("5"));

    