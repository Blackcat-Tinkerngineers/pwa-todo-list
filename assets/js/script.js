$(document).ready(function () {

  let NowMoment = moment().format("MMMM Do YYYY");
  let displayDate = document.getElementById("currentDay");
  displayDate.innerHTML = NowMoment;
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
});