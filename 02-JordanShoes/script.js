var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 30
});

const sr = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 2000,
    reset: true
});

ScrollReveal().reveal('.item', {delay: 500});