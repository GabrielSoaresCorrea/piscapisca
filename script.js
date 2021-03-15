const $ = (query) => document.querySelector(query);
const rootColor = (colorBg) => getComputedStyle(document.documentElement).getPropertyValue(colorBg);

// objeto q possui a classe das bolas e a cor do root css
let arrayBallsObj =[ 
    {
        ballSelector: $(".ball-1"),
        colorBackground: rootColor('--color-background-b1'),
    },
    {
        ballSelector: $(".ball-2"),
        colorBackground: rootColor('--color-background-b2'),
    },
    {
        ballSelector: $(".ball-3"),
        colorBackground: rootColor('--color-background-b3'),
    },
    {
        ballSelector: $(".ball-4"),
        colorBackground: rootColor('--color-background-b4'),
    },
    {
        ballSelector: $(".ball-5"),
        colorBackground: rootColor('--color-background-b5'),
    },
    {
        ballSelector: $(".ball-6"),
        colorBackground: rootColor('--color-background-b6'),
    },
    {
        ballSelector: $(".ball-7"),
        colorBackground: rootColor('--color-background-b7'),
    }
]
// preencher as bolas com as cores
arrayBallsObj.forEach( ({ballSelector, colorBackground}, index) => {
    ballSelector.style.backgroundColor = colorBackground;
});

let valorInicialDoLoopDelay = 0; // alternar entre as cores

let pararPisca = true;

let tempoDeDelay = 1000;

const funcaoBotao = $("#button-time");

//botao para parar o pisca
funcaoBotao.addEventListener ("click",() => {
    if(pararPisca){
        pararPisca = false;
    } else {
        pararPisca = true;
    }
});

window.setInterval(() => {
    
    if(pararPisca){
        if(valorInicialDoLoopDelay % 2 == 0){
            arrayBallsObj[0].ballSelector.style.backgroundColor = "black";
            arrayBallsObj[1].ballSelector.style.backgroundColor = arrayBallsObj[1].colorBackground;
            arrayBallsObj[2].ballSelector.style.backgroundColor = "black";
            arrayBallsObj[3].ballSelector.style.backgroundColor = arrayBallsObj[3].colorBackground;
            arrayBallsObj[4].ballSelector.style.backgroundColor = "black";
            arrayBallsObj[5].ballSelector.style.backgroundColor = arrayBallsObj[5].colorBackground;
            arrayBallsObj[6].ballSelector.style.backgroundColor = "black";
    
        } else {
            arrayBallsObj[0].ballSelector.style.backgroundColor = arrayBallsObj[0].colorBackground;
            arrayBallsObj[1].ballSelector.style.backgroundColor = "black"
            arrayBallsObj[2].ballSelector.style.backgroundColor = arrayBallsObj[2].colorBackground;
            arrayBallsObj[3].ballSelector.style.backgroundColor = "black"
            arrayBallsObj[4].ballSelector.style.backgroundColor = arrayBallsObj[4].colorBackground;
            arrayBallsObj[5].ballSelector.style.backgroundColor = "black"
            arrayBallsObj[6].ballSelector.style.backgroundColor = arrayBallsObj[6].colorBackground;
        }
    
        if(valorInicialDoLoopDelay == 0){
            valorInicialDoLoopDelay++
        } else {
            valorInicialDoLoopDelay = 0
        }
    }
}, tempoDeDelay);