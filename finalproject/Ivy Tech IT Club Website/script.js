// =========================
// MOBILE NAVIGATION
// =========================

const toggle =
document.getElementById(
'menu-toggle'
);

const nav =
document.getElementById(
'nav-menu'
);

if (toggle) {

    toggle.addEventListener(
    'click',
    () => {

        nav.classList.toggle(
        'active'
        );

    });

}

// =========================
// SCROLL ANIMATIONS
// =========================

const observer =
new IntersectionObserver(
(entries) => {

entries.forEach(entry => {

if (entry.isIntersecting) {

entry.target.classList.add(
'show'
);

}

});

});

document
.querySelectorAll('.hidden')
.forEach(el => {

observer.observe(el);

});

// =========================
// CONTACT FORM MESSAGE
// =========================

const form =
document.getElementById(
'contact-form'
);

if (form) {

form.addEventListener(
'submit',
function(event) {

event.preventDefault();

document
.getElementById(
'success-message'
)
.style.display = 'block';

form.reset();

});

}