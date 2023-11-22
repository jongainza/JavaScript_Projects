const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  
];
const giveaway=document.querySelector(".giveaway")
const deadline=document.querySelector('.deadline')
const items = document.querySelectorAll(".deadline-format h4")


let futureDate=new Date(2023,8,31,12,30,00)


let year =futureDate.getFullYear()
let month = futureDate.getMonth()
month=months[month]
let date= futureDate.getDay()
date=weekdays[date]
let day = futureDate.getDate()
let minutes = futureDate.getMinutes()
let hours = futureDate.getHours()

giveaway.textContent=`givaway ends on ${date}, ${day} ${month} ${year}, ${hours}:${minutes}pm`

// future time in ms
let futureTime = futureDate.getTime()
console.log(futureTime);

function getRemainingTime(){
  const today = new Date().getTime();
  const t = futureTime-today
// 1sg = 1000ms
// 1min = 60 sg
// 1hr = 60 min
// 1 day = 24hr

// values in ms
const oneDay = 24*60*60*1000
const oneHr = 60*60*1000
const oneMin = 60*1000
const oneSec=1000
// calculate all values
let days =Math.floor(t/ oneDay)
let hours=Math.floor(t%oneDay/oneHr)
let min = Math.floor(t%oneHr/oneMin)
let sg = Math.floor(t%oneMin/oneSec)

// set values array
let values =[days,hours,min,sg]

function format(item){
  if (item<10){
    return `0${item}`
  }else{
    return item
  }
}

items.forEach(function(item,index){
  item.innerHTML=format(values[index])
})
if (t<0){
  clearInterval(countdown)
  deadline.innerHTML=`<h4 class="expired">Sorry, the countdown has expired</h4>`
}
}

let countdown = setInterval(getRemainingTime,500)
 getRemainingTime()