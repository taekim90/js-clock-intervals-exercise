// //Define Hands
// let hour = 0 
// let minute = 0
// let second = 0


// //FOR HOUR HAND
// const hourRotation = (numberOfHours) => {
//     return ((numberOfHours / 12) * 360)
// }
// // let hourDegrees = hourRotation(hour) // change this input by 0-12?
// // const hourHand = document.getElementById('hour')
// // hourHand.style.transform = "rotate(" + hourDegrees + "deg)"


// //FOR MINUTE HAND
// const minuteRotation = (numberOfMinutes) => {
//     return ((numberOfMinutes / 60) * 360)
// }
// //let minuteDegrees = minuteRotation(minute) // change this input by 0-60
// //const minuteHand = document.getElementById('minute')
// //minuteHand.style.transform = "rotate(" + minuteDegrees + "deg)"


// //FOR SECOND HAND
// const secondRotation = (numberOfSeconds) => {
//     return ((numberOfSeconds / 60) * 360)
// }
// //let secondDegrees = secondRotation(second) // change this input by 0-60
// //const secondHand = document.getElementById('second')
// //secondHand.style.transform = "rotate(" + secondDegrees + "deg)"


// const autoMovement = () => {
//     second++
//     if (second === 60) {
//         second = 0
//         minute++
//     }
//     if (minute === 60) {
//         minute = 0
//         hour++
//     }
//     if (hour === 12) {
//         hour = 0
//     }

//     //moves second hand
//     let secondDegrees = secondRotation(second) 
//     const secondHand = document.getElementById('second')
//     secondHand.style.transform = "rotate(" + secondDegrees + "deg)"

//     //moves minute hand
//     let minuteDegrees = minuteRotation(minute) 
//     const minuteHand = document.getElementById('minute')
//     minuteHand.style.transform = "rotate(" + minuteDegrees + "deg)"

//     //moves hour hand
//     let hourDegrees = hourRotation(hour) // change this input by 0-12?
//     const hourHand = document.getElementById('hour')
//     hourHand.style.transform = "rotate(" + hourDegrees + "deg)"

// }
// setInterval(autoMovement, 1000)









// FOR ACTUAL WORLD TIME CLOCK

const secondHand = document.querySelector('#second')
const minuteHand = document.querySelector('#minute')
const hourHand = document.querySelector('#hour')

const setClock = () => {
    const currentDate = new Date()
    const seconds = currentDate.getSeconds()
    const minutes = currentDate.getMinutes()
    const hour = currentDate.getHours()

    const secondDegrees = (seconds / 60) * 360
    const minuteDegrees = (minutes / 60) * 360
    const hourDegrees = (hour / 12) * 360

    secondHand.style.transform = "rotate(" + secondDegrees + "deg)"
    minuteHand.style.transform = "rotate(" + minuteDegrees + "deg)"
    hourHand.style.transform = "rotate(" + hourDegrees + "deg)"
}
setInterval(setClock, 1000)









// //Instructor's Answer
// // // Variables - APPLICATION STATE (change) 
// let seconds = 0
// let minutes = 0
// let hours = 0

// // DOM STUFF
// const secondHand = document.querySelector('#second')
// const minuteHand = document.querySelector('#minute')
// const hourHand = document.querySelector('#hour')



// // Program Logic
// const clockRun = () => {
//     console.log(seconds)
//     // calculate the seconds to degrees for the CSS rotation
//     const secToDeg = (seconds / 60) * 360
//     const minToDeg = (minutes / 60) * 360
//     const hourToDeg = (hours / 12) * 360
//     // grab the second hand element and update the css
//     secondHand.style.transform = 'rotate(' + secToDeg + 'deg)'
//     minuteHand.style.transform = 'rotate(' + minToDeg + 'deg)'
//     hourHand.style.transform = 'rotate(' + hourToDeg + 'deg)'
//     // increment the time
//     seconds++
//     if (seconds === 60) {
//         seconds = 0
//         minutes++
//     }
//     if (minutes === 60) {
//         minutes = 0
//         hours++
//     }
// }

// setInterval(clockRun, 1000)
