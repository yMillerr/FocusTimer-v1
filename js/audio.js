export default function Sounds(){

    const florestAudio = new Audio("https://github.com/yMillerr/audios/raw/main/Floresta.wav")
    const rainAudio = new Audio("https://github.com/yMillerr/audios/raw/main/Chuva.wav")
    const coffeeAudio = new Audio("https://github.com/yMillerr/audios/raw/main/Cafeteria.wav")
    const flameAudio = new Audio("https://github.com/yMillerr/audios/raw/main/Lareira.wav")

    function loop(audio){
        audio.loop = true
    }

    return {
        florestAudio,
        rainAudio,
        coffeeAudio,
        flameAudio,
        loop,
    }
}