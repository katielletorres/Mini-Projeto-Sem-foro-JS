const img = document.getElementById( 'img' );
const buttons = document.getElementById( 'buttons' );
let colorIndex = 0;
let intervalid = null;

const trafficLight = ( event ) => {
    stopAutomatic();
    turnOn[event.target.id]();
}

const nextIndex = () => colorIndex <2 ? ++colorIndex : 0;

const changecolor = () => {
    const colors = ['red','yellow','green']
    const color = colors[ colorIndex ];
    turnOn[color]();
    nextIndex();
}

const stopAutomatic = () => {
    clearInterval ( intervalid );
}

const turnOn = {
    'red':    () => img.src = './Semáforo/Vermelho.jpg',
    'yellow': () => img.src = './Semáforo/Amarelo.jpg',
    'green':  () => img.src = './Semáforo/Verde.jpg',
    'automatic': () => intervalid = setInterval( changecolor, 1000 )
}    

buttons.addEventListener('click', trafficLight );