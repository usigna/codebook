function changeTitle() {
    const message = 'Wróć na stronę';
    let original;

    window.addEventListener('focus', function() {
        if (original) {
            document.title = original;
        }
    })

    window.addEventListener('blur', function() {
        const title = document.title;
        if (title != message) {
            original = title;
        }
        document.title = message;
    })
}

function getRandomColor() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}

// animation.html - circle-2
function changeColorBorderCircles() {
    const circles = document.querySelectorAll('.circle-2__span');

    for (let i = 0; i < circles.length; i++) {
        circles[i].style.borderColor = '#' + getRandomColor();
        // circles[i].style.backgroundColor = '#' + getRandomColor();
    }
}

// another.html - parallax
function getParallaxEffect() {
    const parallaxWrapper = document.querySelector('.parallax-1__wrapper');

    function parallax(e) {
        this.querySelectorAll('.parallax-1__layer').forEach(layer => {
            const speed = layer.getAttribute('data-speed');
            const x = (window.innerWidth - e.pageX * speed) / 100;
            const y = (window.innerHeight - e.pageY * speed) / 100;

            layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
        })
    }

    parallaxWrapper.addEventListener('mousemove', parallax);
}

const init = function() {
    changeTitle();
    changeColorBorderCircles();
    getParallaxEffect();
};

document.addEventListener('DOMContentLoaded', init);
