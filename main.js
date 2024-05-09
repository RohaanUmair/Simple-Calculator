const display = document.querySelector('input');
const displayDate = document.querySelector('h1');



setInterval(() => {
    let date = new Date();
    let hours = date.getHours().toString().padStart(2, '0');
    let mins = date.getMinutes().toString().padStart(2, '0');
    let ampm;
    if (hours >= 12){
        ampm = 'pm';
    } else {
        ampm = 'am';
    }
    displayDate.innerText = hours % 12 + ':' + mins + ' ' + ampm;
}, 70);



function addToDisplay(elem){
    display.value += elem;
}

function clearDisplay(){
    display.value = '';
}

function calculate(){
    try{
        display.value = eval(display.value);
    } catch (error){
        display.style.color = 'red';
        display.value = 'Error';
        setTimeout(() => {
            display.value = '';
            display.style.color = 'rgb(4, 151, 209)';
        }, 1000);
    }
}

function removeLastNum(){
    if (display.value.length > 0){
        display.value = display.value.slice(0, display.value.length - 1);
    }
}