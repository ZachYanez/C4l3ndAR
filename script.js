var dayLabel = moment().format("dddd")
var currentTime = moment().format("LTS")
var timeValue = moment().format("LTS")
console.log(timeValue)
// Updates Time

function runningClock() {
    setInterval(function(){
$("#currentTime").html(moment().format("LTS"));
},1000);
}
// Update Day
 function currentDay(){
     $("#currentDay").html(dayLabel);
 }

$(".saveBtn").on("click", function(){

     var timeClicked = $(this).siblings("#time").text()
     var eventInput = $(this).siblings(".textinput").val()
    localStorage.setItem("event", eventInput)
    localStorage.setItem("Time", timeClicked)
        console.log(localStorage)
       
 

})

currentDay()
runningClock()

