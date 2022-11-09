export default function Controls({
    minutes,
    seconds,
    timer,
    displayMinutes,
    sounds,
    buttonPlay,
    buttonPause

}){
    let itsPlaying = false


    function removeFiveMinutes(){
        minutes = Number(displayMinutes.textContent) - 5

        if(minutes < 0){
            minutes = 0
            alert('Não pode diminuir mais minutos!')
        }

        timer.displayUpdate(minutes , 0)
    }

    function addFiveMinutes() { 
        minutes = Number(displayMinutes.textContent) + 5
        
        if(minutes > 90){
            minutes = 90
            alert('Você alcançou o limite de minutos')
        }
    
        timer.displayUpdate(minutes , 0)
    }
    
    function activeAudioAndToggleColor(audio , event){

        let notPlayingCondition = audio.paused && itsPlaying === false
        let playingCondition = event.classList.contains('color') && itsPlaying === true

        if(notPlayingCondition){
            audio.play()
            event.classList.add('color')
            itsPlaying = true

        } else if(playingCondition) {
            audio.pause()
            event.classList.remove('color')
            itsPlaying = false
        }

        sounds.loop(audio)
    }
    
    function buttonToggle(){
        buttonPlay.classList.toggle('hide')
        buttonPause.classList.toggle('hide')
    }

    return { 
        activeAudioAndToggleColor,
        addFiveMinutes,
        removeFiveMinutes,
        buttonToggle
    }
}