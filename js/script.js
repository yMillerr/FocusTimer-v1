import Sounds from './audio.js'
import Timer from './timer.js'
import Controls from './controls.js'
import Events from './events.js'
import {
    displaySeconds,
    displayMinutes,
    minutes,
    seconds,
    buttonPause,
    buttonPlay }from './utils.js'

const sounds = Sounds()


const timer = Timer({
    displayMinutes,
    displaySeconds,
    minutes,
})

const controls = Controls({
    timer,
    minutes,
    displayMinutes,
    buttonPause,
    buttonPlay,
    sounds
})

const events = Events({
    timer,
    controls,
    sounds
})







