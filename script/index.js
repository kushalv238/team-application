const $window = $(window);


/*Appear animation*/

const elemnts = document.querySelectorAll('.content');

const observe = new IntersectionObserver ( (elemnts) => {
    elemnts.forEach((elemnt) => {
        if(elemnt.isIntersecting) {
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
const zoom = document.getElementById('scroll-text-section');
$(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() < $(document).height()-500) {
        if(!seenAll) {
            mouse.classList.remove('hide');
        }
        seenAll = true;
    }
    else {
        mouse.classList.add('hide');
    }
})



/*toggle user-info*/

for(var i = 1; i < 5; ++i) {
    const person = document.getElementById('person'+i);
    const card = document.getElementById('card'+i);
    const clickMe = document.getElementById('click-me-'+i);

    person.onclick = () => {
        card.classList.toggle('hide')
        clickMe.classList.add('hide');
    }

    person.addEventListener('dragstart', dragStart)
    person.addEventListener('dragend', dragEnd)
}



/* For phone */

function showHideInfo() {
    if($window.width() < 900) {
        card1.classList.add('hide');
        card2.classList.add('hide');
        card3.classList.add('hide');
        card4.classList.add('hide');
    }
}

showHideInfo();
$(window).resize(function() {
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