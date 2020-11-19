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

// another.html
//another 1
function firstAnother() {
    const firstAnotherWrapper = document.querySelector('.another-1__wrapper');

    function parallax(e) {
        this.querySelectorAll('.another-1__layer').forEach(layer => {
            const speed = layer.getAttribute('data-speed');
            const x = (window.innerWidth - e.pageX * speed) / 100;
            const y = (window.innerHeight - e.pageY * speed) / 100;

            layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
        })
    }

    firstAnotherWrapper.addEventListener('mousemove', parallax);
}

//another 2
function secondAnother() {
    const secondAnotherWrapper = document.querySelector('.another-2');

    secondAnotherWrapper.addEventListener('mousemove', function(e) {
        const bubbles = document.createElement('span');
        bubbles.className = 'another-2__span';
        bubbles.style.left = -25 + e.offsetX + 'px';
        bubbles.style.top = -25 + e.offsetY + 'px';
        secondAnotherWrapper.appendChild(bubbles);
    })
}

const init = function() {
    changeTitle();
    changeColorBorderCircles();
    firstAnother();
    secondAnother();
};

document.addEventListener('DOMContentLoaded', init);
