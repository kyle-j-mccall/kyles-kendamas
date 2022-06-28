const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

const info = document.querySelector('info-toggle');
const infoFacts = document.querySelector('.kendama-info');

menu.addEventListener('click', function() {
    info.classList.toggle('is-active');
    infoFacts.classList.toggle('active');

});

