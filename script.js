const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-center a');

function activateNavLink() {
    let scrollPos = window.scrollY + window.innerHeight / 2; // middle of viewport

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        const id = section.getAttribute('id');
        const link = document.querySelector(`.nav-center a[href="#${id}"]`);

        if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', activateNavLink);
window.addEventListener('load', activateNavLink);
