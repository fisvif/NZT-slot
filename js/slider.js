const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    navigation: {
      nextEl: '.slider-next',
      prevEl: '.slider-prew',
    }
  });

let heigt = []

document.querySelectorAll('.swiper-slide').forEach((e) => {
	heigt.push(e.offsetHeight)
	console.log(e.offsetHeight);
})
console.log(heigt);

document.querySelectorAll('.swiper-slide').forEach((e) => {
	e.style.height = Math.max(heigt) + 'px';
})