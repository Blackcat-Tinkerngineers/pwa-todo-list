$(document).ready(function () {

    let NowMoment = moment().format("MMMM Do YYYY");
    let displayDate = document.getElementById("currentDay");
    let displayTime = document.getElementById("currentTime");
    displayDate.innerHTML = NowMoment;
    displayTime.innerHTML = moment().format("h:mm:ss a");
    let currentHour = moment().format("HH");
  
    $(".time-div").each(function () {
      var timeDiv = $(this).attr("id").split("-")[1];
      console.log(timeDiv)
      console.log(currentHour)
  
      if (currentHour === timeDiv) {
        $(this).children(".description").addClass("white-text");
      } else if (currentHour < timeDiv) {
        $(this).addClass("future");
      } else if (currentHour > timeDiv) {
        $(this).removeClass("future")
        $(this).addClass("past");
      }
    });
    console.log('hey there')
    $(".saveBtn").click(function (event) {
      event.preventDefault();
  
      localStorage.setItem($(event.target).parent().attr("id").split("-")[1], $(event.target).siblings(".description").val());
    });
  
    $("#hour-09").children('textarea').val(localStorage.getItem("09"));
    $("#hour-10").children('textarea').val(localStorage.getItem("10"));
    $("#hour-11").children('textarea').val(localStorage.getItem("11"));
    $("#hour-12").children('textarea').val(localStorage.getItem("12"));
    $("#hour-13").children('textarea').val(localStorage.getItem("13"));
    $("#hour-14").children('textarea').val(localStorage.getItem("14"));
    $("#hour-15").children('textarea').val(localStorage.getItem("15"));
    $("#hour-16").children('textarea').val(localStorage.getItem("16"));
    $("#hour-17").children('textarea').val(localStorage.getItem("17"));
    $("#hour-18").children('textarea').val(localStorage.getItem("18"));
    $("#hour-19").children('textarea').val(localStorage.getItem("19"));
    $("#hour-20").children('textarea').val(localStorage.getItem("20"));
    $("#hour-21").children('textarea').val(localStorage.getItem("21"));
    $("#hour-22").children('textarea').val(localStorage.getItem("22"));
    $("#hour-23").children('textarea').val(localStorage.getItem("23"));
    $("#hour-24").children('textarea').val(localStorage.getItem("24"));
  });
  
  