import '/src/scss/style.scss';



const menuIcon = document.querySelector('.menu__icon');
const navigation = document.querySelector('.navigation');

const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const sliderWrapper = document.querySelector('.slider__wrapper');
const sliderList = document.querySelectorAll('.cards');

//Burger menu
menuIcon.addEventListener('click', function () {
    menuIcon.classList.toggle('_active');
    navigation.classList.toggle('_active');
    if (dropMenuNoAuth.classList.contains('_active')) {
        dropMenuNoAuth.classList.remove('_active');
    }
})


//Slider

let increment = 3;
if(sliderWrapper.clientWidth <= 368) {
    increment = 1;
}
console.log(increment)
let currentIndex = 0;
function prevSlide () {
    if (currentIndex == 0) {
        return;
    } else {
        currentIndex--;
        changeClientWidth();
    }
}
function nextSlide () {
    if (currentIndex == sliderList.length - increment) {
        return;
    } else {
        currentIndex++;
        changeClientWidth();
    }
    
}   


function changeClientWidth () {
    let imageWidth = sliderWrapper.firstElementChild.clientWidth;
    let pixels = (-imageWidth - 30) * currentIndex;
    sliderWrapper.style.transform = 'translateX(' + pixels + 'px)';
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);
