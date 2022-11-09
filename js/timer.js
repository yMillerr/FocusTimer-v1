export default function Timer({
    displayMinutes,
    displaySeconds,
    minutes,
}){
    let timerTimeOut
    
    function countDown(){
        timerTimeOut = setTimeout(function(){
             let minutes = displayMinutes.textContent 
             let seconds = displaySeconds.textContent 
             let isFinished = minutes <= 0 && seconds <= 0
     
             if(isFinished){
                 reset()
                 return
             }
     
             if(seconds == 0){
                 seconds = 60
                 --minutes
             }
     
             displayUpdate(minutes , seconds - 1)
     
             countDown()
     
        } , 1000)
    }

    function displayUpdate(minutes , seconds){
        displayMinutes.textContent = String(minutes).padStart(2 , '0')
        displaySeconds.textContent = String(seconds).padStart(2 , '0')
    }

    function reset(){
        displayUpdate(minutes , 0)
        stop()
    }

    function stop(){
        clearTimeout(timerTimeOut)
    }

    return {
        reset,
        displayUpdate,
        countDown,
        stop,
    }
}