const buttons = document.querySelectorAll("button");   
const  body = document.querySelector("body");

const colorMap = {
    btn1: '#d5cfe1',
    btn2: '#d2cadf',
    btn3: '#cec5dc',
    btn4: '#c6bbd6',
    btn5: '#b6a6ca'
}

buttons.forEach(function (button){
    button.addEventListener('click', function (e){
        const color = colorMap[e.target.id] // accessing the value of btn1.
        body.style.backgroundColor = color;
    });
});