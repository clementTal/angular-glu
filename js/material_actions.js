function toogleClick(event)
{
    var element = this;
    element.classList.add('clicked');
    window.setTimeout(function() {
        element.classList.remove('clicked');
        var fn = element.getAttribute('data-ng-action');
        var scope = angular.element(element).scope();
        scope.$apply(fn);
    }, 400);
}

function init() {
    var button = document.getElementsByClassName('button');
    for (var i = 0; i < button.length; i++) {
        button[i].addEventListener('click',  toogleClick, true);
    }

    var round = document.getElementsByClassName('round');
    for (var i = 0; i < round.length; i++) {
        round[i].addEventListener('click', toogleClick, true);
    }

    var symbs = document.getElementsByClassName('symbs');
    for (var i = 0; i < symbs.length; i++) {
        symbs[i].addEventListener('click', toogleClick, true);
    }
}

window.onload = function() {
    init();
};
