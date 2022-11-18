let takeBtn = document.querySelector('#takeBtn'),
    playBtn = document.querySelector('#playBtn'),
    prizeText = document.querySelector('.about-text'),
    takeText = document.querySelector('.take-prize-txt');

    takeBtn.onclick = (event) => {
        event.preventDafault();
        takeText.style.display = 'block';
        prizeText.style.display = 'none';
        playBtn.style.display = 'none';
    }