var i = 0;
var txt = 'FIND OUT MORE ABOUT GAME'; /* Текст */
var speed = 85; /* Скорость/длительность эффекта в миллисекундах */

function typeWriter() {
    if (i < txt.length) {
        document.querySelector(".logo-animation-text-two").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter()