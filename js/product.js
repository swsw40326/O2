function minus() {
    let count = parseInt($('#buy-count').val());
    if (count == 1) return;
    $('#buy-count').val(--count);
}

function plus() {
    let count = parseInt($('#buy-count').val());
    $('#buy-count').val(++count);
}

let thumbnails = document.getElementsByClassName('thumbnail')

let activeImages = document.getElementsByClassName('activeSlide')

let index = 0;

for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener('click', function() {
        if (activeImages.length > 0) {
            activeImages[0].classList.remove('activeSlide')
        }

        index = this.index;

        this.classList.add('activeSlide')
        document.getElementById('featured').src = this.src
    })
    thumbnails[i].index = i;
}

let btnUp = document.getElementById('slideUp');
let btnDown = document.getElementById('slideDown');

btnDown.addEventListener('click', function() {
    document.getElementById('slider').scrollTo({
        top: document.getElementById('slider').scrollTop + 180,
        behavior: "smooth"
    });
    if (index >= thumbnails.length - 1) {
        return;
    }
    index++;
    thumbnails[index].click();
})

btnUp.addEventListener('click', function() {
    document.getElementById('slider').scrollTo({
        top: document.getElementById('slider').scrollTop - 180,
        behavior: "smooth"
    });
    if (index < 1) {
        return;
    }
    index--;
    thumbnails[index].click();
})