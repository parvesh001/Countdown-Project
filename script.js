// ****Setting Giveaway End Date***

//targeting giveaway-end date
let giveawayEnd = document.querySelector(".giveaway-end");

//months and days in roman script
let months = [
  "JANUARY",
  "FEBURARY",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "July",
  "AUGUST",
  "SEPTEMBER",
  "OCTUBER",
  "NOVEMBER",
  "DECEMBER",
];

let days = ["Sunday", "MONDAY","TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];

//adding this to run this countdown always
let now = new Date();
let nowYear = now.getFullYear();
let nowMonth = now.getMonth();
let nowDate = now.getDate();
let nowHr = now.getHours();
let nowMin = now.getMinutes();
let nowSec = now.getSeconds();

// storing new date to give it to giveaway-end
// let endDate = new Date(2022,6,10,12,00,0);
let endDate = new Date(nowYear, nowMonth, nowDate + 2, nowHr, nowMin, nowSec);


//extracting dates one by one from this endDate
const year = endDate.getFullYear();
const month = months[endDate.getMonth()];
const date = endDate.getDate();
const hours = endDate.getHours();
const minutes = endDate.getMinutes();
const day = days[endDate.getDay()];

//assining them to our giveaway end
giveawayEnd.innerHTML = `Giveaway Ends On ${day}, ${date} ${month} ${year}, ${hours}:${minutes}am`;


// ****Initiating Countdown*****

//targeting count down numbers
let numbers = document.querySelectorAll(".num-and-text h4");

//function for countdown
function countDown() {
  //getting today time in mls
  let todayTime = new Date().getTime();
  //getting end-time in mls
  let endTime = endDate.getTime();
  //getting remaining time in mls
  let remainingTime = endTime - todayTime;
 
  //we know:- //1s = 1000ml;
  //1m = 60s;
  //1hr = 60m;
  //1d = 24hrs;
  
  //get day hours minutes and seconds in milliseconds
  const day = 24 * 60 * 60 * 1000;
  const hour = 60 * 60 * 1000;
  const minutes = 60 * 1000;
  const sec = 1000;
  

  //extracting remaining days hours minutes and seconds
  let remainingDays = Math.floor(remainingTime / day);
  let remainingHrs = Math.floor((remainingTime % day) / hour);
  let remainingMin = Math.floor((remainingTime % hour) / minutes);
  let remainingSec = Math.floor((remainingTime % minutes) / sec);

  //formin an array of extracting things
  let values = [remainingDays,remainingHrs,remainingMin,remainingSec];

  //ensuring zero in case of single number
  function zero(value){
    if(value < 10){
        return value = `0${value}`
    }else {
        return value;
    }
  }

  //assining numbers their values
  numbers.forEach((number, index) => {
    return number.innerHTML = zero(values[index])
  } );
  
  //what if remaining time is 0'
  let countDown = document.querySelector(".countdown");
  if(remainingTime < 0){
    clearInterval(myInterval);
    countDown.innerHTML = `<h3>Sorry! You Are Late..</h3>`
  }
}

let myInterval = setInterval(countDown,1000);

