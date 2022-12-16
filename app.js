const slides = document.querySelectorAll('.slide')

for (let slide of slides) {
    slide.addEventListener('click', function() {
        clearActiveClasses ()

        slide.classList.add('active')
    })
}

function clearActiveClasses() {
    for (let slide of slides) {
        slide.classList.remove('active')
    }
}
