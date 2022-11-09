import { 
    buttonPlay,
    buttonStop,
    buttonPause,
    addMinutes,
    removeMinutes,
    florest,
    flames,
    rain,
    coffee,} from "./utils.js"

export default function Events ({timer,controls,sounds}){
    
    buttonPlay.addEventListener('click', () => {    
        timer.countDown()
        controls.buttonToggle()
    })

    buttonPause.addEventListener('click' , () => {
        controls.buttonToggle()
        timer.stop()
    })
    
    buttonStop.addEventListener('click' ,() =>{
        timer.reset()
        buttonPause.classList.add('hide')
        buttonPlay.classList.remove('hide')
    })
    
    addMinutes.addEventListener('click' , () => {
        controls.addFiveMinutes()
    })
    
    removeMinutes.addEventListener('click' , () => {
        controls.removeFiveMinutes()
    })
    
    florest.addEventListener('click' ,() =>{
        controls.activeAudioAndToggleColor(sounds.florestAudio , florest)
    })
    
    rain.addEventListener('click' ,() => {
        controls.activeAudioAndToggleColor(sounds.rainAudio , rain)
    })
    
    coffee.addEventListener('click' ,() => {
        controls.activeAudioAndToggleColor(sounds.coffeeAudio , coffee)
    })
    
    flames.addEventListener('click' , () => {
        controls.activeAudioAndToggleColor(sounds.flameAudio , flames)
    })
    
    
}