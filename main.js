/* Menue Show */
const showMenu = (toggleId, navID) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navID)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show') /* show menu dans css */
        })
    }
}

showMenu('nav-toggle','nav-menu')

/* Remove Menu Mobile après avoir cliquer sur une catégorie */
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* Scroll Section active link dans le menue (trait sous le nom de la catégorie) */
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}


/* Scroll reveal animation */
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/* Scroll HOME */
sr.reveal('.acceuil__title', {})
sr.reveal('.acceuil__scroll', {delay: 200})
sr.reveal('.acceuil__img', {origin: 'right', delay: 400})
sr.reveal('.cv', {delay: 400, interval: 600})

/* Scroll APROPOS */
sr.reveal('.apropos__img', {delay: 500})
sr.reveal('.apropos__subtitle', {delay: 300})
sr.reveal('.apropos__profession', {delay: 400})
sr.reveal('.apropos__text', {delay: 500})
sr.reveal('.apropos__social-icon', {delay: 600, interval: 200})

/* Scroll SKILLS */
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__name', {distance: '20px', delay: 50, interval: 100})
sr.reveal('.skills__img', {delay: 400})

/* Scroll PORTFOLIO */
sr.reveal('.portfolio__img', {interval: 200})

/* Scroll CONTACT */
sr.reveal('.contact__subtitle', {})
sr.reveal('.contact__text', {interval: 200})
sr.reveal('.contact__input', {delay: 400})
sr.reveal('.contact__button', {delay: 600})