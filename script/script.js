let items = document.getElementsByClassName('slider_item'),
    left = document.getElementsByClassName('left_btn')[0],
    right = document.getElementsByClassName('right_btn')[0],
    burger = document.getElementsByClassName('burger')[0],
    menu = document.getElementsByClassName('top_nav')[0],
    count = 0;

function slideToRight (slides) {
    if(slides[count].classList.contains('current')) {
        slides[count].classList.remove('current');
        count++;
        if(count == slides.length) {
            slides[0].classList.add('current');
            count = 0;
        }
        else {
            slides[count].classList.add('current');
        }
    }
}

function slideToLeft (slides) {
    if(slides[count].classList.contains('current')) {
        slides[count].classList.remove('current');
        count--;
        if(count < 0) {
            slides[slides.length - 1].classList.add('current');
            count = (slides.length - 1);
        }
        else {
            slides[count].classList.add('current');
        }
    }
}

right.addEventListener('click', slideToRight.bind(null,items));
left.addEventListener('click', slideToLeft.bind(null,items));


burger.onclick = function() {
    if(menu.className == 'top_nav') {
        menu.className += ' show-from_left'
    }
    else {
        menu.className = 'top_nav';
    }
}