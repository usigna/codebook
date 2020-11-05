function changeTitle() {
    const message = "Wróć na stronę";
    let original;

    window.addEventListener("focus", function() {
        if (original) {
            document.title = original;
        }
    })

    window.addEventListener("blur", function() {
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

// another.html - circle-2
function changeColorBorderCircles() {
    const circles = document.querySelectorAll(".circle-2__span");

    for (let i = 0; i < circles.length; i++) {
        circles[i].style.borderColor = "#" + getRandomColor();
        // circles[i].style.backgroundColor = "#" + getRandomColor();
    }
}

const init = function() {
    changeTitle();
    changeColorBorderCircles();
};

document.addEventListener("DOMContentLoaded", init);
