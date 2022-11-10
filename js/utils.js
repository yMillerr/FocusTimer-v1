const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonPause = document.querySelector('.pause')

const addMinutes = document.querySelector('.add-minutes')
const removeMinutes = document.querySelector('.remove-minutes')

const displayMinutes = document.querySelector('.minutes')
const displaySeconds = document.querySelector('.seconds')

const florest = document.querySelector('.florest')
const rain = document.querySelector('.rain')
const coffee = document.querySelector('.coffee')
const flames = document.querySelector('.flames')

let minutes = displayMinutes.textContent


export {
    minutes,

    florest,
    coffee,
    rain,
    flames,

    addMinutes,
    removeMinutes,

    buttonPlay,
    buttonStop,
    buttonPause,

    displaySeconds,
    displayMinutes
}