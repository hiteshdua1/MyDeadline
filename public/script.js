const theDDay = new Date("August 15, 2018 18:00:00")

// countdown
let timer = setInterval(function() {

  // get today's date
  const today = new Date().getTime();

  // get the difference
  const diff = theDDay.getTime() - today;

  // math
  let weekends = Math.floor(diff / (1000 * 60 * 60 * 24))/4; 
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  // display
  document.getElementById("timer").innerHTML =
    "<div class=\"days\"> \
  <div class=\"numbers\">" + CalculateWeekendDays(new Date(Date.now()),theDDay) + "</div>Weekend Days</div> \
<div class=\"hours\"> \
  <div class=\"numbers\">" + days + "</div>days</div> \
<div class=\"minutes\"> \
  <div class=\"numbers\">" + hours + "</div>hours</div> \
<div class=\"seconds\"> \
  <div class=\"numbers\">" + minutes + "</div>minutes</div> \
</div>";

}, 1000);

function CalculateWeekendDays(fromDate, toDate){
    var weekendDayCount = 0;

    while(fromDate < toDate){
        fromDate.setDate(fromDate.getDate() + 1);
        if(fromDate.getDay() === 0 || fromDate.getDay() == 6){
            ++weekendDayCount ;
        }
    }

    return weekendDayCount ;
}

