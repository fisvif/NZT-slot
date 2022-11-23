var i = 0;
var txt = 'FIND OUT MORE ABOUT GAME';
var speed = 125; /* швидкість в мілісекундах */

function typeWriter() {
    if (i < txt.length) {
        document.querySelector(".logo-animation-text-two").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter()