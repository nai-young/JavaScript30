const hour = document.querySelector('.hour')
const minute = document.querySelector('.minutes')
const second = document.querySelector('.seconds')
const weekDay = document.querySelector('.weekDay')
const day = document.querySelector('.day')
const month = document.querySelector('.month')
const year = document.querySelector('.year')

function clock () {
  setInterval(() => {
    let date = new Date()
    let hr = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()

    let hr_rot = 30 * hr + min / 2
    let min_rot = 6 * min
    let sec_rot = 6 * sec

    hour.style.transform = `rotate(${hr_rot}deg)`
    minute.style.transform = `rotate(${min_rot}deg)`;
    second.style.transform = `rotate(${sec_rot}deg)`;

  }, 1000)
}

function today () {
  let date = new Date()
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  weekDay.innerText = date.getUTCDate()
  day.innerText = days[date.getDay()]
  month.innerText = months[date.getMonth()]
  year.innerText = date.getFullYear()
}

clock()
today()