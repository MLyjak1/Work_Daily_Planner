

window.setInterval(function () {
    $('#currentDay').html(moment().format('ddd MM/DD/YY hh:mm:ss'))
}, 1000);



$(document).ready(function () {


    for (var i = 9; i < 18; i++) {
        var colorKey = "";
        var currentHour = moment().hours();
        console.log(currentHour);
        if (i < currentHour) {
            colorKey = "past";
        } else if (i === currentHour) {
            colorKey = "present";
        } else {
            colorKey = "future";
        }
        var displayHour = "";
        if (i < 12) {
            displayHour = i + " A.M.";
        } else if (i === 12) {
            displayHour = i + " P.M.";
        } else {
            displayHour = i - 12 + " P.M.";
        }
        var blockEl = $("<div>").addClass("row").attr("id", i);
        var hourEl = $("<div>").addClass("col-2").text(displayHour);
        var textEl = $("<textarea>").addClass("col-8 description " + colorKey).val(localStorage.getItem(i));
        var buttonEl = $("<button>").addClass("col-2 btn btn-primary").text("save").attr("id", i);
        $(".container").append(blockEl.append(hourEl, textEl, buttonEl));
    };

    $(".btn-primary").on("click", function () {
        console.log(this);
        var hour = $(this).attr("id");
        var activity = $(this).siblings(".description").val().trim();
        localStorage.setItem(hour, activity);
    })


})
