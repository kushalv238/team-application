const $window = $(window);

/*Appear animation*/

const elemnts = document.querySelectorAll('.content');

const observe = new IntersectionObserver((elemnts) => {
    elemnts.forEach((elemnt) => {
        if (elemnt.isIntersecting) {
            elemnt.target.classList.add('appear');
        }
        else {
            elemnt.target.classList.remove('appear');
        }
    })
});
elemnts.forEach((elem) => observe.observe(elem));



/*scrolling button*/

const mouse = document.getElementById('mouse-up');
function goDown(goDownBy) {
    var top = $(window).scrollTop();
    $(window).scrollTop(top + goDownBy);
    // $('html, body').animate({ scrollTop: top + goDownBy }); //unnecessary animation
};

var seenAll = false;
$(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() < $(document).height() - 500) {
        if (!seenAll) {
            mouse.classList.remove('hide');
        }
        seenAll = true;
    }
    else {
        mouse.classList.add('hide');
    }
})



/*toggle user-info*/

for (var i = 1; i < 5; ++i) {
    const person = document.getElementById('person' + i);
    const card = document.getElementById('card' + i);
    const clickMe = document.getElementById('click-me-' + i);

    person.onclick = () => {
        card.classList.toggle('hide')
        clickMe.classList.add('hide');
    }

    person.addEventListener('dragstart', dragStart)
    person.addEventListener('dragend', dragEnd)
}



/* For phone */

function showHideInfo() {
    if ($window.width() < 900) {
        card1.classList.add('hide');
        card2.classList.add('hide');
        card3.classList.add('hide');
        card4.classList.add('hide');
    }
}

showHideInfo();
$(window).resize(function () {
    showHideInfo();
});



/* Drag and drop */

function dragStart() {
    setTimeout(() => {
        this.classList.toggle('hide');
    }, 0);
}

function dragEnd() {
    this.classList.toggle('hide');
}

document.getElementById('user-content').addEventListener('dragover', e => {
    e.preventDefault();
});



/* Theme changes */
const themeButton = document.getElementById('theme');

const sun = document.getElementById('sun-icon');
const moon = document.getElementById('moon-icon');

const root = document.querySelector(':root');

function themeChange() {
    var theme = JSON.parse(localStorage.getItem('theme'));

    theme = (theme === 'dark' ? 'light' : 'dark');

    if (theme === 'light') {
        root.style.setProperty('--clr-primary', 'white');
        root.style.setProperty('--clr-secondary', 'rgb(46, 45, 45)');
        root.style.setProperty('--clr-bg', 'white');

        themeButton.classList.remove('to-right');

        sun.classList.remove('hide')
        moon.classList.add('hide')
    }
    else {
        root.style.setProperty('--clr-primary', 'rgb(46, 45, 45)');
        root.style.setProperty('--clr-secondary', 'white');
        root.style.setProperty('--clr-bg', 'rgb(19, 19, 22)');

        themeButton.classList.add('to-right');

        sun.classList.add('hide')
        moon.classList.remove('hide')
    }

    localStorage.setItem('theme', JSON.stringify(theme))
}

// themeChange();

function setTheme() {
    goDown(-$(document).height());

    var theme = JSON.parse(localStorage.getItem('theme'));

    if (theme === 'light') {
        root.style.setProperty('--clr-primary', 'white');
        root.style.setProperty('--clr-secondary', 'rgb(46, 45, 45)');
        root.style.setProperty('--clr-bg', 'white');

        themeButton.classList.remove('to-right');

        sun.classList.remove('hide')
        moon.classList.add('hide')
    }
    else {
        root.style.setProperty('--clr-primary', 'rgb(46, 45, 45)');
        root.style.setProperty('--clr-secondary', 'white');
        root.style.setProperty('--clr-bg', 'rgb(19, 19, 22)');

        themeButton.classList.add('to-right');

        sun.classList.add('hide')
        moon.classList.remove('hide')
    }

    localStorage.setItem('theme', JSON.stringify(theme || 'dark'));
}

onload = setTheme();