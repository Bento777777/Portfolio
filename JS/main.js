/*================ NAVBAR============= */

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')

menuIcon.onclik = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

/*================ ACTIVE LINK============= */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height =sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').
                classList.add('active');
            });
        };
    });

    /*================ STICKY NAVBAR============= */
    let header = document.querySelectorAll('header');
    header.classList.toggle('sticky' ,window.scrollY > 100);

    /*================ REMOVE NAVBAR============= */
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/*================ SCROLL REVEAL ============= */

scrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

scrollReveal().reveal('.home-content, heading', {origin:'top'});
scrollReveal().reveal('.home-img, .services-container, .portifolio-box, . contact form', {origin:'bottom'});
scrollReveal().reveal('.home-contact h1, .about-img', {origin:'left'});
scrollReveal().reveal(',home-contact p, .about-content', {origin:'righ'});

    const typed = new Typed('.multiple-text', {
        strings:['desenvolvedor web', 'web designer','Youtuber'],
        typeSpeed: 70,
        backSpeed: 70,
        backDelat: 1000,
        loop: true,

    })