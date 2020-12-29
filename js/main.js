const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');


//counter and creating size of images
let counter = 1;
const size = carouselImages[0].clientWidth;

//Puts starting image front and center
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';


//Button Listeners
nextBtn.addEventListener('click', () => {
	if(counter >= carouselImages.length -1) return; //fixes clicking too fast and getting blank space
	carouselSlide.style.transition = "transform 0.4s ease-in-out";
	counter++; //adds one to counter
	carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

prevBtn.addEventListener('click', () => {
	if (counter <= 0) return; //fixes clicking too fast and getting blank space
	carouselSlide.style.transition = "transform 0.4s ease-in-out";
	counter--; //removes one from counter
	carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

//Jumping back to before or after clone to make it appear as looped through
carouselSlide.addEventListener('transitionend', () => {
	if (carouselImages[counter].id === 'lastClone') {
		carouselSlide.style.transition = "none";
		counter = carouselImages.length - 2;
		carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
	}
	if (carouselImages[counter].id === 'firstClone') {
		carouselSlide.style.transition = "none";
		counter = carouselImages.length - counter;
		carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
	}
});


















