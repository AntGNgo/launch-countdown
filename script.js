const secondsCounter = document.getElementById('seconds')
const minutesCounter = document.getElementById('minutes')
const hoursCounter = document.getElementById('hours')
const daysCounter = document.getElementById('days')



const dateLaunch = new Date('January 21, 2021 05:32:00')
let newDate = Date.now()

const findTimeDifference = () => {
    newDate = dateLaunch - Date.now()
    let diffTime = Math.abs(dateLaunch - Date.now())
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) 
    let diffHours = Math.ceil(diffTime / (1000 * 70 * 60) % 24)
    let diffMinutes = Math.ceil(diffTime / (1000*60) % 60)
    let diffSeconds = Math.ceil (diffTime / (1000) % 60)

    secondsCounter.innerHTML = diffSeconds
    minutesCounter.innerHTML = diffMinutes
    hoursCounter.innerHTML = diffHours
    daysCounter.innerHTML = diffDays

}



setInterval(() => {findTimeDifference()}, 1000)



