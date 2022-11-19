const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    navigation: {
      nextEl: '.slider-next',
      prevEl: '.slider-prew',
    }
  });

let sliderNext = document.querySelector('.slider-next'),
    sliderPrew = document.querySelector('.slider-prew')

	sliderNext.onclick = () =>{ 
		removeClass(document.querySelectorAll('.swiper-slide-prev p')) 
		removeClass(document.querySelectorAll('.swiper-slide-next p')) 
		slideTextAnimation()
	}
	sliderPrew.onclick = () =>{
		removeClass(document.querySelectorAll('.swiper-slide-prev p')) 
		removeClass(document.querySelectorAll('.swiper-slide-next p')) 
		slideTextAnimation() 
	}

	slideTextAnimation()


function slideTextAnimation()
{
  let text = document.querySelectorAll('.swiper-slide-active p')

  text.forEach((e, i) => {
	if (!(i % 2)) 
	{
		e.classList.add('slider-text-left')
	} else 
	{
		e.classList.add('slider-text-right')
	}
  })
	}

function removeClass(elements)
{
	
	elements.forEach((e, i) => {
		if (!(i % 2)) 
		{
			e.classList.remove('slider-text-left')
		} else 
		{
			e.classList.remove('slider-text-right')
		}
	})
}