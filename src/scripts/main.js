AOS.init()

$('.hero__carousel').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    adaptativeHeight: true
});

const dataDoEvento = new Date("Apr 24, 2025 15:00:00")
const timeStampDoEvento = dataDoEvento.getTime()

const contaAsHoras = setInterval(function() {
    const  timeStampAtual = new Date().getTime()

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual

    const diaEmMs = 1000 * 60 * 60 * 24
    const horaEmMs = 1000 * 60 * 60
    const minutoEmMs = 1000 * 60

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs)
    const horasAteOEvento = Math.floor((diasAteOEvento % diaEmMs)/ horaEmMs)
    const minutosAteOEvento =  Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs )
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000)

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`

    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras)
        document.getElementById('contador').innerHTML = "Você chegou tarde!"
        document.getElementById('p__hero').innerHTML = ""
        document.getElementById('p__hero2').innerHTML = ""
        document.getElementsById('hero__btn').style.display = 'none'
    }
}, 1000)

