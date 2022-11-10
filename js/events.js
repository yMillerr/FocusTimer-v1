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
        controls.playAndPause()
    })

    buttonPause.addEventListener('click' , () => {
        controls.playAndPause()
        timer.stop()
    })
    
    buttonStop.addEventListener('click' ,() =>{
        timer.reset()
        controls.reset()
     
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