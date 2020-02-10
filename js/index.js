const link = document.querySelector('a');

link.textContent = 'imiwakannai';
link.href = 'https://dolgkreker.github.io/maki-fandom/';

const sect = document.querySelector('section');
const para = document.createElement('p');
sect.appendChild(para);
para.textContent = 'Nani sore? Imiwakannai';

// for(let i = 1; i <= 1000; i++) {
//     const p = document.createElement('p');
//     p.textContent = i + 1 + '. Imiwakannai';
//     sect.appendChild(p);
// }

const linkPara = document.querySelector('p');
sect.appendChild(linkPara.cloneNode(true));

para.style.color = 'white';
para.style.backgroundColor = 'black';
para.style.padding = '10px';
para.style.width = '250px';
para.style.textAlign = 'center';


const clock = document.querySelector('.clock');
const options = {  
    hour: "2-digit", minute: "2-digit", second: "2-digit"
};  
const showClock = () => clock.innerText = (new Date()).toLocaleTimeString("uk", options);
setInterval(showClock, 1000);

$('.click-me').click( () => $('img').toggle(3000) );

const display = document.querySelector('.display');

document.querySelectorAll('.digits button')
    .forEach( button => button.addEventListener('click', digitPressed));

function digitPressed(ev) {
    display.value += ev.target.innerText;
}

document.querySelectorAll('.opers button')
    .forEach( button => button.addEventListener('click', operPressed));

function operPressed(ev) {
    display.value += ev.target.innerText;
}

document.querySelector('.eq').addEventListener('click', calculate);

function calculate() {
    display.value = eval(display.value);
}