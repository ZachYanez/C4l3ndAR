var dayLabel = moment().format("dddd");
var currentTime = moment().format("LTS");
var timeValue = moment().format("LTS");
var currentDate = new Date();
var currentHour = currentDate.getHours();
console.log(currentHour);
console.log(timeValue);
// Updates Time

 // Repopulate
function Repopulate(){
 for (i = 7; i < 25; i++){
   localStorage.getItem(i)
  console.log(localStorage(i))  
  }
}




//Running Clock
function runningClock() {
  setInterval(function () {
    $("#currentTime").html(moment().format("LTS"));
  }, 1000);
}
// Update Day
function currentDay() {
  $("#currentDay").html(dayLabel);
}


//Save button
$(".saveBtn").on("click", function () {
  var timeClicked = $(this).siblings("#time").text();
  var eventInput = $(this).siblings(".textinput").val();
  localStorage.setItem(timeClicked, eventInput);
  console.log(localStorage.getItem('timeClicked'))

});



// Function to Change Color of Box

function ColorChange() {
  // currentHour returns the hour in military time
  var currentHour = currentDate.getHours();
  document.getElementsByClassName(currentHour)[0].style.backgroundColor = "red";
  var maxPastHour = currentHour--;
  for (var i = 7; i < maxPastHour; i++) {
    document.getElementsByClassName(i)[0].style.backgroundColor = "green";
  }
}

ColorChange();
currentDay();
runningClock();
